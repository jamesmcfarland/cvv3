import * as attributeStyles from "../styles/Attributes.module.css";
import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaCloudflare, FaDiscord, FaReact } from "react-icons/fa";
import {  SiCsharp, SiGooglesheets, SiMinecraft, SiPm2 } from "react-icons/si";
import {  TbBrandNextjs } from "react-icons/tb";

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
    text: "secretary @ qcs",
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
      icon: SiCsharp
  },
  {
    title: "HTML/CSS",
    detail:
      "Self taught alongside learning React, however this was also studied during Semester 2 of Level 1 of my SE degree. See the QCS website, events page and this site for some of my work",
      icon: FaHtml5
  },
  {
    title: "javascript",
    detail:
      "Self taught alongside learning React, however this was also studied during Semester 2 of Level 1 of my SE degree. See the QCS Discord bot, new QCS Fixr member scraper and this very site for my work!",
      icon: FaJs
  },
  {
    title: "react",
    detail:
      "Entirely self-taught in my own time, see my schedule project on GitHub, the QCS Events site (this used Next.js) and this site.",
      icon:FaReact
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
      "Joining in November 2021, I've immersed myself in the society and the team, working on projects such as our Minecraft Server, which helped bring student together during a University lockdown, and our hugely successful 2022 EEECS Formal, from which we raised £5400 for Pure Mental NI! As of August 2023, I also sit on the Executive Committee as Secretary, managing emails, meetings and overall back-of-house running of the committee.",
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
      "This involved working with multiple members of the QCS committee in order to first determine requirements, then propose designs, and finally implement and deploy the end product. In its current state (May 2022), the site currently utilises vanilla HTML, CSS and JS, and is deployed with Netlify and Cloudflare. I also was able to integrate with our ticketing platform to show current and upcoming events on a custom page, driving ticket sales and engagement. Cloudflare is also used to redirect URLs using Page Rules and secure the site.",
    link: "https://queenscomputingsociety.com",
    icons: [FaHtml5, FaCss3, FaJs, FaCloudflare],
    status: "complete"
  },
  {
    title: "QCS Member management",
    detail:
      "A society such as QCS has many unique requirements, one of which is an efficient way to manage our 250+ strong member information. I built and maintain a custom solution to pull our data down from our ticketing provider, transform it and publish it to a Google Sheet, accessible by all of our team as and when needed. This helps us when quickly trying to track down people, gaining insights into trends and demographics within our membership, and when coordinating with the Students Union",
    link: "https://github.com/queenscomputingsociety/qcs-fixr-scraper",
    icons:[FaNodeJs, SiGooglesheets, SiPm2]
  },
  {
    title: "QCS Verification & Minecraft integration",
    detail:
      "Using Discord's Bot API, I built a custom Bot which our members can interact with on our 1000+ member server, allowing them to verify their membership and gain access to exclusive channels. Additionally, for our Minecraft server, we needed a way to whitelist members based on data they provided at signup, so I was able to build a system that achieves this with zero management needed.",
    link: "https://github.com/queenscomputingsociety",
    icons:[FaNodeJs, FaDiscord, SiPm2, SiMinecraft],
  },
  {
    title:"This website",
    detail: "Built using Next.JS, following industry practice and deployed onto vercel, it is configured with a CD pipeline to deploy on each commit to the appropriate branch. Secured by Cloudflare Page Rules.",
    link:"https://github.com/jamesmcfarland/cvv3",
    icons:[TbBrandNextjs, FaHtml5, FaCss3, FaJs, FaCloudflare]
  }
];
