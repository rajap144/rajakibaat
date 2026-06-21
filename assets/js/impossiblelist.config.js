/* =============================================================================
 *  IMPOSSIBLE LIST CONFIG
 *  Each goal: { label, done, note?, children? }
 *    done   -> filled hexagon + strikethrough
 *    note   -> inline markdown ([label](url), **bold**) shown under the goal
 *    children -> nested sub-goals (e.g. target thresholds)
 *  Shared theme / nav / socials live in assets/js/site.js
 * ============================================================================= */

export const IL = {
  meta: {
    title: "Impossible List | Diogo Correia",
    description: "My Impossible List: an ever evolving list of things to achieve.",
  },

  heading: "Impossible List",
  subheading: "by Diogo Correia",
  intro: [
    "You might be wondering what an impossible list is and why it is here. In contrast with a bucket list, an impossible list is ever evolving and is expected to grow with time: you might cross things off the list, but you are also **always adding new items** to the list. It is, therefore, *impossible* to finish every single item in the list, hence the name.",
    "I'm keeping my list public to encourage myself to update it and to get other people to start their very own lists as well.",
  ],

  categories: [
    {
      name: "Technology Goals",
      goals: [
        { label: "Install Arch Linux", done: true, note: "**22 January 2021** — [View repository](https://github.com/diogotcorreia/dotfiles/tree/master)" },
        { label: "Install NixOS", done: true, note: "**27 January 2023** — [View repository](https://github.com/diogotcorreia/dotfiles/tree/nixos)" },
        { label: "Implement CI/CD on a big project", done: false },
        { label: "Ship an Electron App", done: true, note: "**7 September 2020** — [View repository](https://github.com/livraria-papelaria-espaco/faturas-mega-to-keyboard/)" },
        { label: "Code a mobile app with React Native", done: false },
        { label: "Contribute to the Linux Kernel", done: false },
        { label: "Contribute to a Linux Mobile project", done: false },
        { label: "Contribute to an Android Custom ROM", done: false },
      ],
    },
    {
      name: "Health / Sports Goals",
      goals: [
        { label: "Run 5km", done: true, note: "Best time: **18'18s** on 15 June 2019 — [View activity](https://www.strava.com/activities/2453062151)", children: [
          { label: "≤ 19'30s", done: true, note: "Accomplished on 31 December 2018 with a time of **19'13s** — [View activity](https://www.strava.com/activities/2047123379)" },
          { label: "≤ 19'00s", done: true, note: "Accomplished on 15 June 2019 with a time of **18'18s** — [View activity](https://www.strava.com/activities/2453062151)" },
        ] },
        { label: "Run 8km", done: true, note: "Best time: **30'20s** on 11 January 2020 — [View activity](https://www.strava.com/activities/3001812867)", children: [
          { label: "≤ 35'00s", done: true, note: "Accomplished on 11 June 2018 with a time of **33'04s** — [View activity](https://www.strava.com/activities/1632347862)" },
          { label: "≤ 33'00s", done: true, note: "Accomplished on 31 December 2018 with a time of **31'56s** — [View activity](https://www.strava.com/activities/2047123379)" },
          { label: "≤ 30'00s", done: false },
        ] },
        { label: "Run 10km", done: true, note: "Best time: **38'22s** on 11 January 2020 — [View activity](https://www.strava.com/activities/3001812867)", children: [
          { label: "≤ 45'00s", done: true, note: "Accomplished on 30 December 2017 with a time of **44'56s** — [View activity](https://www.strava.com/activities/1333511589)" },
          { label: "≤ 43'00s", done: true, note: "Accomplished on 23 September 2018 with a time of **42'56s** — [View activity](https://www.strava.com/activities/1860126148)" },
          { label: "≤ 40'00s", done: true, note: "Accomplished on 31 December 2018 with a time of **38'51s** — [View activity](https://www.strava.com/activities/2047123379)" },
          { label: "≤ 37'00s", done: false },
        ] },
        { label: "Run 15km", done: true, note: "Best time: **01:03'51s** on 7 September 2024 — [View activity](https://www.strava.com/activities/12350607900)", children: [
          { label: "≤ 01:00'00s", done: false },
        ] },
        { label: "Run 21km (half marathon)", done: true, note: "Best time: **01:34'46s** on 7 September 2024 — [View activity](https://www.strava.com/activities/12350607900)", children: [
          { label: "≤ 01:30'00s", done: false },
        ] },
        { label: "Run 42km (marathon)", done: false },
        { label: "Do a super sprint triathlon [300m swim / 10km bike / 2.5km run]", done: true, note: "Best time: **58'28s** on 16 July 2017" },
        { label: "Do a sprint triathlon [700m swim / 20km bike / 5km run]", done: true, note: "Best time: **01:18'28s** on 27 May 2018 — [Swimming](https://www.strava.com/activities/1599033223) · [Cycling](https://www.strava.com/activities/1599033195) · [Running](https://www.strava.com/activities/1599033199)", children: [
          { label: "≤ 01:40'00s", done: true, note: "Accomplished on 27 May 2018 with a time of **01:18'28s**" },
          { label: "≤ 01:10'00s", done: false },
        ] },
        { label: "Do a standard triathlon [1.5km swim / 40km bike / 10km run]", done: false },
        { label: "Run 200m", done: true, note: "Best time: **28.1s** on 28 November 2019", children: [
          { label: "≤ 30s", done: true, note: "Accomplished on 19 April 2018 with a time of **29.9s**" },
          { label: "≤ 29s", done: true, note: "Accomplished on 28 November 2019 with a time of **28.1s**" },
          { label: "≤ 28s", done: false },
        ] },
        { label: "Run 300m", done: true, note: "Best time: **47.9s** on 21 November 2019", children: [
          { label: "≤ 50s", done: true, note: "Accomplished on 12 April 2018 with a time of **48.8s**" },
          { label: "≤ 48s", done: true, note: "Accomplished on 21 November 2019 with a time of **47.9s**" },
          { label: "≤ 47s", done: false },
        ] },
        { label: "Run 400m", done: true, note: "Best time: **01'03.8s** on 7 April 2023 — [View activity](https://www.strava.com/activities/8844006830)", children: [
          { label: "≤ 01'10s", done: true, note: "Accomplished on 17 April 2018 with a time of **01'06.7s**" },
          { label: "≤ 01'05s", done: true, note: "Accomplished on 7 April 2023 with a time of **01'03.8s** — [View activity](https://www.strava.com/activities/8844006830)" },
          { label: "≤ 01'00s", done: false },
        ] },
        { label: "Run 500m", done: true, note: "Best time: **01'26.5s** on 2 January 2020", children: [
          { label: "≤ 01'35s", done: true, note: "Accomplished on 25 September 2018 with a time of **01'30.3s**" },
          { label: "≤ 01'30s", done: true, note: "Accomplished on 8 December 2018 with a time of **01'27.9s**" },
          { label: "≤ 01'25s", done: false },
        ] },
        { label: "Run 1000m", done: true, note: "Best time: **02'59.3s** on 12 November 2020 — [View activity](https://www.strava.com/activities/4328742407)", children: [
          { label: "≤ 03'20s", done: true, note: "Accomplished on 28 April 2018 with a time of **03'12.8s** — [View activity](https://www.strava.com/activities/1537199162)" },
          { label: "≤ 03'00s", done: true, note: "Accomplished on 12 November 2020 with a time of **02'59.3s** — [View activity](https://www.strava.com/activities/4328742407)" },
        ] },
      ],
    },
    {
      name: "Events to Attend",
      goals: [
        { label: "Web Summit", done: true, note: "**2 November 2021**" },
        { label: "Lisbon Games Week", done: true, note: "**9 November 2014**" },
      ],
    },
    {
      name: "Gaming Goals",
      goals: [
        { label: "Reach gold rank on CS:GO", done: true, note: "**20 December 2018**" },
        { label: "Reach level 100 on Robocraft", done: true, note: "**6 September 2018**" },
      ],
    },
    {
      name: "Traveling",
      goals: [
        { label: "Visit Paris, France", done: true, note: "**Easter 2016**" },
        { label: "Visit Amsterdam, Netherlands", done: true, note: "**Summer 2016**" },
        { label: "Visit Saint Petersburg, Russia", done: true, note: "**Summer 2018**" },
        { label: "Visit Moscow, Russia", done: true, note: "**Summer 2018**" },
        { label: "Visit London, England", done: false },
        { label: "Visit New York City, USA", done: false },
        { label: "Visit Los Angeles, USA", done: false },
        { label: "Visit Stockholm, Sweden", done: true, note: "**August 2023**" },
        { label: "Obtain dual citizenship with another country", done: false },
        { label: "See the Northern Lights", done: true, note: "**3 November 2024**" },
      ],
    },
    {
      name: "Life Goals & Misc",
      goals: [
        { label: "Own a house", done: false },
        { label: "Own a car", done: false },
        { label: "Get something named after me", done: false },
        { label: "Have a positive impact in the world", done: false },
        { label: "Start a blog", done: true, note: "**12 December 2023** — [View website](blog.html)" },
      ],
    },
  ],

  contact: {
    heading: "Contact me",
    text: "Want to share your own impossible list, or just chat? Reach out.",
  },
};
