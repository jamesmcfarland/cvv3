import * as attributeStyles from "../styles/Attributes.module.css";

export const attributes = [
  {
    text: "software engineering @ qub",
    isPrimary: true,
    styleClass: attributeStyles.gridSE,
  },
  {
    text: "always learning",
    isPrimary: true,
    styleClass: attributeStyles.gridLearning,
  },
  {
    text: "security focused",
    isPrimary: true,
    styleClass: attributeStyles.gridSecurity,
  },
  {
    text: "events team @ qcs",
    isPrimary: true,
    styleClass: attributeStyles.gridQCS,
  },
  {
    text: "f1 fanatic",
    isPrimary: false,
    styleClass: attributeStyles.gridF1,
  },
  {
    text: "ui design",
    isPrimary: false,
    styleClass: attributeStyles.gridUI,
  },
  {
    text: "holistic approach",
    isPrimary: false,
    styleClass: attributeStyles.gridHolistic,
  },
  {
    text: "aerospace",
    isPrimary: false,
    styleClass: attributeStyles.gridAero,
  },
];

export const techskills = [
  {
    title: "C#/.NET",
    detail:
      "Experience at GCSE & A-Level, mainly building desktop apps with WPF. Some experience with using the new .NET Core platform in production projects for QCS",
  },
  {
    title: "HTML/CSS",
    detail:
      "Self taught alongside learning React, however this was also studied during Semester 2 of Level 1 of my SE degree. See the QCS website, events page and this site for some of my work",
  },
  {
    title: "javascript",
    detail:
      "Self taught alongside learning React, however this was also studied during Semester 2 of Level 1 of my SE degree. See the QCS Discord bot, new QCS Fixr member scraper and this very site for my work!",
  },
  {
    title: "react",
    detail:
      "Entirely self-taught in my own time, see my schedule project on GitHub, the QCS Events site (this used Next.js) and this site.",
  },
];
export const softskills = [
  {
    title: "teamwork",
    detail:
      "Working with others, understanding their points of view and acting with the best interests of the team",
  },
  {
    title: "leadership",
    detail:
      "Tackling challenges head on, not afraid to challenge the status quo, all whilst keeping everyone tightly knit and working well together. Within QCS I have taken lead of a number of projects, both internal and external",
  },
  {
    title: "events",
    detail:
      "Making sure things happen when and where they're meant to, liaising with suppliers, vendors and venues, and getting things done on the night. A notable example is the 2022 EEECS Formal",
  },
  {
    title: "learning",
    detail:
      "I'm always looking for the next challenge, the new technology or the latest releases, keeping myself ahead of the curve and widening my skillset.",
  },
];
export const volunteering = [
  {
    title: "QCS Committee",
    detail:
      "Joining in November 2021, I've immersed myself in the society and the team, working on projects such as our Minecraft Server, which helped bring student together during a University lockdown, and our hugely successful 2022 EEECS Formal, from which we raised £5400 for Pure Mental NI!",
  },
  {
    title: "scouts",
    detail:
      "I was a Young Leader from 2016 to 2019, where I helped adult leaders in running activities to further the development of young people, giving them new skills and experiences. This also involved understanding the thought process and needs of younger children and adapting my approach to solving problems with them accordingly. ",
  },
];
export const projects = [
  {
    title: "QCS Website",
    detail:
      "This involved working with multiple members of the QCS committee in order to first determine requirements, then propose designs, and finally implement and deploy the end product. In its current state (May 2022), the site currently utilises vanilla HTML, CSS and JS, and is deployed with GitHub pages and Cloudflare. ",
    link: "https://queenscomputingsociety.com",
  },
  {
    title: "QCS Events",
    detail:
      "Whilst not currently officially deployed as a part of QCS's technical solutions, this site was built to be a simple one-stop-shop for all of the societies upcoming events, providing information and links to purchase tickets. This was built using Next.js for the frontend, and Contentful as the Content Management System (CMS). It is deployed on Vercel and makes use of Webhooks in order to rebuild and redeploy the site whenever changes are made on either GitHub or Contentful. ",
    link: "https://events.queenscomputingsociety.com",
  },
];
