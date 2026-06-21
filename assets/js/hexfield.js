/* =============================================================================
 *  hexfield.js  —  3D animated hexagon background (Three.js)
 *  Floating hexagonal prisms that spin, drift, and link to nearby neighbours,
 *  reacting to the cursor. A 3D reimagining of the classic "dots + links".
 *  All behaviour is driven by CONFIG.hexField (see config.js).
 * ============================================================================= */

import * as THREE from "three";

export function initHexField(canvas, opts, theme) {
  const cfg = opts || {};
  if (cfg.enabled === false) return { destroy() {} };

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const COUNT = cfg.count ?? 70;
  const SPREAD = cfg.spread ?? 70;
  const BASE_SIZE = cfg.size ?? 1.2;
  const SIZE_JITTER = cfg.sizeJitter ?? 0.9;
  const ROT = (cfg.rotationSpeed ?? 0.25) * (reduceMotion ? 0 : 1);
  const DRIFT = (cfg.driftSpeed ?? 0.35) * (reduceMotion ? 0 : 1);
  const LINK_DIST = cfg.linkDistance ?? 13;
  const LINK_OP = cfg.linkOpacity ?? 0.16;
  const PARALLAX = (cfg.parallax ?? 0.18) * (reduceMotion ? 0 : 1);
  const WIRE = cfg.wireframe ?? false;
  const FILL_OP = cfg.fillOpacity ?? 0.55;

  const colA = new THREE.Color(theme.accent || "#37e0c4");
  const colB = new THREE.Color(theme.accent2 || "#7aa2ff");

  // ---- renderer / scene / camera ----
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(theme.bg ? new THREE.Color(theme.bg).getHex() : 0x0a0e16, 0.012);

  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
  camera.position.z = SPREAD * 0.95;

  const group = new THREE.Group();
  scene.add(group);

  // ---- hexagonal prism geometry (shared) ----
  // CylinderGeometry with 6 radial segments == a hexagon prism.
  const baseGeo = new THREE.CylinderGeometry(1, 1, 0.45, 6);
  const edgeGeo = new THREE.EdgesGeometry(baseGeo);

  const hexes = [];
  const positions = []; // flat Vector3 list reused for link math

  for (let i = 0; i < COUNT; i++) {
    const t = Math.random();
    const color = colA.clone().lerp(colB, t);
    const size = BASE_SIZE * (1 + (Math.random() - 0.5) * SIZE_JITTER);

    const container = new THREE.Group();

    if (WIRE) {
      const lines = new THREE.LineSegments(
        edgeGeo,
        new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.7 })
      );
      lines.scale.setScalar(size);
      container.add(lines);
    } else {
      const mesh = new THREE.Mesh(
        baseGeo,
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: FILL_OP })
      );
      mesh.scale.setScalar(size);
      container.add(mesh);
      // brighter edge outline for definition
      const lines = new THREE.LineSegments(
        edgeGeo,
        new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.85 })
      );
      lines.scale.setScalar(size);
      container.add(lines);
    }

    container.position.set(
      (Math.random() - 0.5) * SPREAD,
      (Math.random() - 0.5) * SPREAD,
      (Math.random() - 0.5) * SPREAD
    );
    container.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);

    hexes.push({
      obj: container,
      rotSpeed: new THREE.Vector3(
        (Math.random() - 0.5) * ROT,
        (Math.random() - 0.5) * ROT,
        (Math.random() - 0.5) * ROT
      ),
      drift: new THREE.Vector3(
        (Math.random() - 0.5) * DRIFT,
        (Math.random() - 0.5) * DRIFT,
        (Math.random() - 0.5) * DRIFT
      ),
    });
    positions.push(container.position);
    group.add(container);
  }

  // ---- connecting lines (single buffer, updated each frame) ----
  const maxSegments = COUNT * 8; // generous cap on simultaneous links
  const linkPos = new Float32Array(maxSegments * 2 * 3);
  const linkGeo = new THREE.BufferGeometry();
  linkGeo.setAttribute("position", new THREE.BufferAttribute(linkPos, 3));
  const linkMat = new THREE.LineBasicMaterial({ color: colA, transparent: true, opacity: LINK_OP });
  const links = new THREE.LineSegments(linkGeo, linkMat);
  group.add(links);

  function updateLinks() {
    let s = 0;
    const maxPairsVerts = maxSegments * 2;
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const a = positions[i], b = positions[j];
        const dx = a.x - b.x, dy = a.y - b.y, dz = a.z - b.z;
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < LINK_DIST * LINK_DIST) {
          if (s >= maxPairsVerts) break;
          const o = s * 3;
          linkPos[o] = a.x; linkPos[o + 1] = a.y; linkPos[o + 2] = a.z;
          linkPos[o + 3] = b.x; linkPos[o + 4] = b.y; linkPos[o + 5] = b.z;
          s += 2;
        }
      }
      if (s >= maxPairsVerts) break;
    }
    linkGeo.setDrawRange(0, s);
    linkGeo.attributes.position.needsUpdate = true;
  }

  // ---- pointer parallax ----
  const mouse = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };
  function onPointer(e) {
    const t = e.touches ? e.touches[0] : e;
    target.x = (t.clientX / window.innerWidth) * 2 - 1;
    target.y = (t.clientY / window.innerHeight) * 2 - 1;
  }
  window.addEventListener("pointermove", onPointer, { passive: true });

  // ---- resize ----
  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);

  // ---- animation loop ----
  const clock = new THREE.Clock();
  let raf = 0;
  let running = true;

  function wrap(v) {
    const half = SPREAD / 2;
    if (v > half) return v - SPREAD;
    if (v < -half) return v + SPREAD;
    return v;
  }

  function tick() {
    if (!running) return;
    const dt = Math.min(clock.getDelta(), 0.05);

    for (const h of hexes) {
      h.obj.rotation.x += h.rotSpeed.x * dt;
      h.obj.rotation.y += h.rotSpeed.y * dt;
      h.obj.rotation.z += h.rotSpeed.z * dt;
      h.obj.position.x = wrap(h.obj.position.x + h.drift.x * dt);
      h.obj.position.y = wrap(h.obj.position.y + h.drift.y * dt);
      h.obj.position.z = wrap(h.obj.position.z + h.drift.z * dt);
    }

    updateLinks();

    // smooth parallax: gently steer camera + tilt the whole field
    mouse.x += (target.x - mouse.x) * 0.04;
    mouse.y += (target.y - mouse.y) * 0.04;
    camera.position.x = mouse.x * SPREAD * 0.18;
    camera.position.y = -mouse.y * SPREAD * 0.18;
    camera.lookAt(scene.position);
    group.rotation.y = mouse.x * PARALLAX;
    group.rotation.x = mouse.y * PARALLAX;

    renderer.render(scene, camera);
    raf = requestAnimationFrame(tick);
  }
  tick();

  // pause when tab not visible
  function onVis() {
    if (document.hidden) {
      running = false;
      cancelAnimationFrame(raf);
    } else if (!running) {
      running = true;
      clock.getDelta();
      tick();
    }
  }
  document.addEventListener("visibilitychange", onVis);

  return {
    destroy() {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVis);
      renderer.dispose();
      baseGeo.dispose();
      edgeGeo.dispose();
      linkGeo.dispose();
    },
  };
}
