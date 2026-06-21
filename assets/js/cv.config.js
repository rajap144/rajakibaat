/* =============================================================================
 *  CV PAGE CONFIG  —  edit your résumé here.
 *  Text fields accept inline markdown:  [label](url)  **bold**  *italic*
 *  Shared theme / nav / socials live in assets/js/site.js
 * ============================================================================= */

export const CV = {
  meta: {
    title: "CV | Diogo Correia",
    description: "Curriculum Vitae of Diogo Torres Correia — programming enthusiast, computer science & cybersecurity student, federated athlete.",
  },

  name: "Diogo Torres Correia",
  title: "Programming Enthusiast · Computer Science & Cybersecurity Student · Federated Athlete",

  /* Contact chips (icon keys: email, globe, github, linkedin, key, …) */
  contact: [
    { icon: "email",    label: "me@diogotc.com",  href: "mailto:me@diogotc.com" },
    { icon: "globe",    label: "Stockholm, Sweden" },
    { icon: "link",     label: "diogotc.com",      href: "https://diogotc.com" },
    { icon: "github",   label: "diogotcorreia",    href: "https://github.com/diogotcorreia" },
    { icon: "linkedin", label: "diogotcorreia",    href: "https://linkedin.com/in/diogotcorreia" },
  ],

  /* Top buttons. `print: true` triggers the browser's print/save-as-PDF dialog. */
  actions: [
    { label: "Print / Save PDF", print: true },
    { label: "Source code", href: "https://github.com/diogotcorreia/cv", outline: true },
  ],

  skills: {
    groups: [
      { group: "Programming", items: ["JavaScript", "Nix (& Nixpkgs/NixOS)", "Rust", "React", "NodeJS (& Express)", "HTML/CSS", "Java", "Python", "Vue", "C", "C++", "SQL", "PHP", "Spring"] },
      { group: "Operating Systems", items: ["Linux", "Windows", "MacOS"] },
      { group: "Tools", items: ["Git", "Docker"] },
    ],
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "C1 (IELTS Band 8.0)" },
    ],
  },

  openSource: {
    intro: "Contributions in the following projects:",
    items: [
      { name: "Nixpkgs", href: "https://github.com/NixOS/nixpkgs/pulls?q=author%3Adiogotcorreia", note: "Packaging, Bug Fixes, and more" },
      { name: "Strapi", href: "https://github.com/strapi/strapi/pulls?q=author%3Adiogotcorreia", note: "Small Enhancements, Bug Fixes, Security Vulnerability Patching, Translations" },
      { name: "STAYAWAY COVID", href: "https://github.com/stayawayinesctec/stayaway-app/pulls?q=author%3Adiogotcorreia", note: "Dark Mode" },
      { name: "Vuepress", href: "https://github.com/vuejs/vuepress/pulls?q=author%3Adiogotcorreia", note: "Bug Fixes" },
      { name: "Listmonk", href: "https://github.com/knadh/listmonk/issues?q=author%3Adiogotcorreia", note: "Translations" },
      { name: "Umami", href: "https://github.com/mikecao/umami/pulls?q=author%3Adiogotcorreia", note: "Translations" },
      { name: "phhusson's vendor_hardware_overlay", href: "https://github.com/phhusson/vendor_hardware_overlay/pulls?q=author%3Adiogotcorreia", note: "Android Device Overlay" },
      { name: "Firefly-III", href: "https://github.com/firefly-iii/data-importer/pulls?q=author%3Adiogotcorreia", note: "Bug Fixes" },
      { name: "BungeeCord", href: "https://github.com/SpigotMC/BungeeCord/pulls?q=author%3Adiogotcorreia", note: "Bug Fixes" },
      { name: "automatic-timezoned", href: "https://github.com/maxbrunet/automatic-timezoned/pulls?q=author%3Adiogotcorreia", note: "New Features" },
    ],
  },

  education: [
    {
      period: "2023 – 2025",
      org: "KTH Royal Institute of Technology, Sweden",
      title: "Master's in Cybersecurity",
      bullets: [
        "Master's Thesis: [Classa: Uncovering Class Pollution In Python](https://s.diogotc.com/thesis), resulting in the reporting of critical-severity [CVE-2025-58367](https://github.com/advisories/GHSA-mw26-5g2v-hqw3)",
        "Courses in Network & Systems Security, Cryptography, Ethical Hacking, and Language Based Security, among others",
      ],
    },
    {
      period: "2020 – 2023",
      org: "Técnico Lisboa, Portugal",
      title: "Bachelor's in Computer Science and Engineering (LEIC-A)",
      bullets: [
        "Final average: **18.63/20** (19)",
        "Elected Year Delegate (2020 – 2023) and Degree Delegate (2022 – 2023)",
        "Awarded Academic Excellence Diploma (2020/2021)",
        "Awarded Academic Merit Diploma (2021/2022)",
        "Awarded Academic Excellence Diploma (2022/2023)",
        "Top 3 amongst students who enrolled in LEIC-A in 2020/2021 (out of ~180)",
        "Member of the University's Pedagogic Council",
      ],
    },
  ],

  experience: [
    {
      period: "Nov 2024 – Present",
      org: "Ethiack",
      title: "Penetration Tester",
      role: "*Freelance*",
      bullets: ["Conducted penetration testing for Ethiack's customers, finding high-severity vulnerabilities and proposing mitigations."],
    },
    {
      period: "Sep 2024 – Jan 2025",
      org: "LangSec Group, KTH Royal Institute of Technology",
      title: "Research Assistant",
      role: "*Amanuensis*",
      bullets: [
        "Researched the impacts and prevalence of client-side prototype pollution in JavaScript on various websites",
        "Developed a Chromium fork to detect prototype pollution gadgets when visiting a vulnerable website, using dynamic analysis",
      ],
    },
    {
      period: "Apr 2021 – Jul 2023",
      org: "DASI, IST, Lisboa",
      title: "Research Initiation Grant",
      role: "*Full Stack Developer*",
      desc: "DASI is Técnico Lisboa's IT Services' Development Team, which I joined during my first year at the university. It is responsible for developing and managing the school's learning management system, FenixEdu, and other services. I developed a new version of the public API, as well as various bug fixes and UX improvements, some of which were my initiative.",
    },
  ],

  projects: [
    { name: "Resumos LEIC", href: "https://resumos.leic.pt", period: "2021 – Present", tech: "React (GatsbyJS); Markdown",
      desc: "A completely open source website dedicated to class notes for the BSc in Computer Science and Engineering at Técnico Lisboa. Currently achieves more than 30k monthly views across all pages." },
    { name: "Triton — Minecraft Plugin", href: "https://github.com/tritonmc/Triton", period: "2016 – Present", tech: "Java; SpigotMC API",
      desc: "A Minecraft plugin that intercepts network packets in search of placeholders, replacing them with translated messages in the player's language. Written in Java, with 100+ classes and 7000+ lines of code." },
    { name: "TWIN — Triton Web INterface", href: "https://twin.rexcantor64.com/demo", period: "2019 – Present", tech: "JavaScript; React; NodeJS",
      desc: "A web app to configure the Triton plugin. Made with React, Redux and React Router, avoiding the need to manually edit JSON configuration files." },
    { name: "Craftathon", href: "https://craftathon.org", period: "2017, 2018", tech: "NodeJS; PHP",
      desc: "An American charity event where I configured the ticketing system with PayPal. The first edition used PHP, the second NodeJS." },
    { name: "Livraria e Papelaria Espaço", href: "https://lpespaco.pt", period: "2021 – Present", tech: "React (NextJS); NodeJS (Strapi)",
      desc: "An online e-commerce store for a local bookstore, made with NextJS and Strapi, plus an internal program to speed up repetitive tasks, saving dozens of manual labour hours." },
    { name: "Portugal Ultra Triathlon", href: "", period: "May, Jun 2018", tech: "PHP; HTML / CSS",
      desc: "A charity event raising funds for 4 Portuguese sports associations. The website and donation system were made with HTML/CSS and PHP." },
    { name: "Frigu", href: "https://github.com/diogotcorreia/frigu", period: "2022", tech: "Rust; Yew.rs + Axum.rs",
      desc: "A web application in Rust using WebAssembly for the frontend, to manage a small community fridge with transaction history and balances. Docker images auto-published on every release via GitHub Actions." },
    { name: "IST Delegate Election", href: "https://github.com/diogotcorreia/ist-delegate-election", period: "2023", tech: "Rust; TypeScript / React.js",
      desc: "An online voting platform used by Técnico Lisboa's Pedagogical Council for delegate elections. Integrates with the school's OAuth system and avoids storing personal information at all costs." },
  ],
  projectsFootnote: "… and many other small projects",

  extraCurriculars: [
    "[Member of Security Team @ Técnico (STT)](https://sectt.github.io/)",
    "[Member of RoyalRoppers at KTH](https://royalroppers.team/)",
    "[Represented Portugal at ECSC 2024 and 2025](https://ecsc.eu/)",
    "[Informatics I and Web I Instructor at AfterSchool by TreeTree2](https://treetree2.school/)",
    "Portuguese Olympiad in Informatics 2020",
    "Portuguese Olympiad in Physics 2019",
    "Federated Athlete at Portuguese Athletics Federation (2018 – Present)",
    "[Member of Hackerschool student group at IST](https://hackerschool.io)",
    "[Advent of Code Participant](https://github.com/diogotcorreia/advent-of-code)",
  ],
};
