/* =============================================================================
 *  PORTFOLIO CONFIG  —  edit THIS file to make the site yours.
 *  Everything you see on the page is generated from the object below.
 *  No build step. Save the file, refresh the browser.
 * ============================================================================= */

import { THEME, HEXFIELD, SOCIALS } from "./site.js";

export const CONFIG = {

  /* ---- Browser tab + social-share preview ---------------------------------- */
  meta: {
    title: "Diogo Correia",                 // browser tab + share title
    description: "Hey, I'm Diogo Torres Correia from Portugal. I love programming, running, taking photos and learning new things!",
    url: "https://example.com/",            // your final site URL (used for share cards)
    favicon: "assets/img/favicon.svg",
  },

  /* Theme, hex field and socials are SHARED — edit them in assets/js/site.js */
  theme: THEME,

  hexField: HEXFIELD,

  /* ---- HERO (top of page) ------------------------------------------------- */
  hero: {
    avatar: "assets/img/avatar.svg",        // your photo (square works best)
    name: "Diogo Correia",
    tagline: "Student, Developer & Runner",
  },

  socials: SOCIALS,

  /* ---- INTRO blurb -------------------------------------------------------- */
  intro: {
    heading: "Hey!",
    // Each string is its own line.
    lines: [
      "I'm Diogo Torres Correia from Portugal!",
      "I love programming, as well as running, taking photos and learning new things!",
      "Feel free to get in touch or take a look at my past work below.",
    ],
  },

  /* ---- TOP PROJECTS (card grid) ------------------------------------------
   * `image` may be a local path (assets/img/...) or a full URL.
   * Leave `image` empty ("") to fall back to a generated hexagon thumbnail.
   * ------------------------------------------------------------------------- */
  projectsHeading: "Portfolio",
  projectsSubheading: "My top projects",
  projects: [
    {
      title: "Triton",
      image: "assets/img/project-1.svg",
      description: "Triton is a Spigot plugin for Minecraft that enables a Minecraft server to send messages in the player's language. This was my first premium plugin on Spigot and I've put a lot of work and effort into it!",
      link: "https://triton.rexcantor64.com",
      linkLabel: "Visit Website",
      tags: ["Java", "Minecraft"],
    },
    {
      title: "Craftathon",
      image: "assets/img/project-2.svg",
      description: "Craftathon was a weekend-long charity event that managed to raise $7,599 for Child's Play Charity in two events (2017 and 2018). I was mainly involved in creating and testing the donation and ticket system.",
      link: "https://craftathon.org",
      linkLabel: "Visit Website",
      tags: ["PHP", "Charity"],
    },
    {
      title: "Livraria e Papelaria Espaço",
      image: "assets/img/project-3.svg",
      description: "A local bookstore in my area. I've helped build their internet presence by coding a webstore as well as providing hosting and email services. I also coded tools that speed up labour-intensive tasks in-store.",
      link: "https://lpespaco.pt",
      linkLabel: "Visit Website",
      tags: ["E-commerce", "Hosting"],
    },
    {
      title: "Resumos LEIC",
      image: "assets/img/project-4.svg",
      description: "A completely open source website dedicated to class notes for the BSc in Computer Science and Engineering at Técnico Lisboa. It achieves more than 30k monthly views across all pages.",
      link: "https://resumos.leic.pt",
      linkLabel: "Visit Website",
      tags: ["Open Source", "Education"],
    },
  ],

  /* ---- TIMELINE ----------------------------------------------------------
   * Newest first. Each entry: date, title, optional subtitle, description, tag.
   * `tag` shows a small label (e.g. a language). Leave "" to hide.
   * ------------------------------------------------------------------------- */
  timelineHeading: "Timeline",
  timeline: [
    { date: "October 2025",  title: "Master's Thesis", subtitle: "Classa: Uncovering Class Pollution in Python", tag: "Python",
      description: "For my Master's Thesis I built a static analysis tool that detects Class Pollution in Python programs and libraries. It was run on 3000 real-world projects, leading to the discovery of the critical-severity vulnerability CVE-2025-58367." },
    { date: "October 2025",  title: "ECSC 2025", subtitle: "In-Person CTF Competition", tag: "", description: "" },
    { date: "October 2024",  title: "ECSC 2024", subtitle: "In-Person CTF Competition", tag: "", description: "" },
    { date: "September 2024", title: "Research Assistant", subtitle: "LangSec Group @ KTH", tag: "JavaScript",
      description: "I investigated the impact and prevalence of client-side prototype pollution in JavaScript across various websites, and developed a Chromium fork to detect prototype pollution gadgets when a vulnerable website is visited." },
    { date: "October 2023", title: "IST Delegate Election", subtitle: "Election app for Técnico's Pedagogical Council", tag: "Rust",
      description: "As a member of the Pedagogical Council, I rebuilt the delegate (student representative) election platform with modern technologies — Rust and React — for a longer life span and lower maintenance." },
    { date: "August 2023",  title: "KTH", subtitle: "MSc Cybersecurity", tag: "", description: "" },
    { date: "April 2022",   title: "Frigu", subtitle: "A Rust and Yew.rs (WebAssembly) app", tag: "Rust",
      description: "My first WebAssembly application, built with Yew.rs for the frontend and Axum.rs for the backend. A simple app to track purchases on a community fridge, used for a while by ~10 people." },
    { date: "April 2021",   title: "DSI @ Técnico", subtitle: "Research Initiation Grant", tag: "",
      description: "I joined DSI (Técnico's IT services) through a research grant, maintaining projects directly linked to the university such as FenixEdu." },
    { date: "February 2021", title: "Resumos LEIC", subtitle: "Community-driven class notes", tag: "",
      description: "An open source website aggregating students' class notes for the BSc in Computer Science and Engineering, becoming a high-quality wiki with 30k+ monthly views and over 50 contributors." },
    { date: "November 2020 – April 2021", title: "TreeTree2", subtitle: "Teaching Python/Web to Students", tag: "Python",
      description: "A non-profit helping young children go beyond school. I participated in 3 editions of 'Informática I' (Python) and 1 edition of 'Web I' (HTML/CSS/JavaScript basics)." },
    { date: "October 2020", title: "Técnico Lisboa", subtitle: "Computer Science Degree", tag: "", description: "" },
    { date: "April 2020",   title: "Livraria e Papelaria Espaço", subtitle: "E-commerce website for a small business", tag: "", description: "" },
    { date: "December 2019", title: "Battleships", subtitle: "An online multiplayer game you can play right now!", tag: "",
      description: "In October 2019 I started developing a small Battleships online multiplayer game for my school class. Two months later it was live — and open source." },
    { date: "January 2019", title: "Triton Web Interface", subtitle: "My first consumer-facing React app", tag: "React",
      description: "For Triton v1.0.0 I introduced TWIN, a web interface to configure the plugin — my first consumer-facing web app made with React." },
    { date: "December 2018", title: "Craftathon 2018", subtitle: "", tag: "",
      description: "During Christmas I helped with Craftathon 2018, raising $1,144. Like in 2017, I mainly worked as a backend developer." },
    { date: "May & June 2018", title: "Portugal Ultra Triathlon", subtitle: "Another volunteering work", tag: "",
      description: "I designed the entire internet presence for Portugal Ultra Triathlon — a triple ironman 'Adventure for Charity' — from the website to the donation system and sysadmin work." },
    { date: "August 2017", title: "JARCraftinator", subtitle: "A custom-made Minecraft server software", tag: "Java",
      description: "I challenged myself to create a working Minecraft server software from scratch to learn how socket connections work in Java. After a week I got my first loaded chunk!" },
    { date: "July 2017",   title: "Craftathon 2017", subtitle: "My first time as a volunteer", tag: "",
      description: "After 6 months of work, Craftathon 2017 raised $6,455.23 for Child's Play Charity. I mainly worked on the website back-end, mostly the payment system." },
    { date: "April 2017",  title: "Portugal Live and Invest", subtitle: "", tag: "PHP",
      description: "I developed a website for my neighbour's company using MaterializeCSS for the front-end and PHP for the back-end." },
    { date: "February 2017", title: "SchoolBit", subtitle: "My first Android app", tag: "Android",
      description: "An Android app that connected to my school system and showed absences, summaries, grades, etc. (later taken down for legal reasons)." },
    { date: "October 2016", title: "Triton", subtitle: "My first premium Spigot plugin", tag: "Java",
      description: "I reused some code to create a seamless translation plugin and sold it on Spigot as MultiLanguagePlugin, since rebranded to Triton." },
    { date: "July 2016",   title: "Clout Team", subtitle: "My first experience working as a team", tag: "",
      description: "I joined a development team working mostly on Minecraft projects. This is where I started receiving money for programming — a huge achievement for me." },
    { date: "2015 – February 2016", title: "IslandCraftGames", subtitle: "My first custom-made Minecraft server", tag: "Java",
      description: "After a few months of work I created a Minecraft server with custom plugins and a website with PayPal support for donations. Most of the code was later open sourced." },
    { date: "2014", title: "How it all started...", subtitle: "", tag: "",
      description: "I started to have an interest in coding. In May 2014 I joined the Bukkit community, started learning Java and created my first Minecraft server." },
  ],

  /* ---- CONTACT section ---------------------------------------------------- */
  contact: {
    heading: "Contact me",
    text: "Got a project in mind, or just want to say hi? My inbox is always open.",
    buttonLabel: "Say hello",
    buttonHref: "mailto:me@diogotc.com",
  },

};
