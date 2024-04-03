import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import Gobnb_img from "@/public/Gobnb.png";
import Netion_img from "@/public/Netion.png";
import Blog_img from "@/public/Blog.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Learning ASP.NET Core",
    location: "Seft-studying",
    description: "I started to learn ASP.NET",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Learning ReactJS, NodeJS",
    location: "Seft-studying",
    description: "I started to learn ReactJS, NodeJS",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full-Stack with NextJS",
    location: "Seft-studying",
    description:
      "I've learned about Next.js and can work on full-stack development.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Gobnb",
    description:
      "A web application similar to Airbnb is a online marketplace that connects people who want to rent out their homes with people looking for accomodations in specific locales.",
    tags: ["React", "Next.js", "TypeScript", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: Gobnb_img,
  },
  {
    title: "Netion",
    description:
      "A web application similar to Notion is a note-taking web app where users can take notes, track progress, plan schedules, and organize project details.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Convex"],
    imageUrl: Netion_img,
  },
  {
    title: "Blog Coffee",
    description:
      "Coffee Blog is a dynamic platform designed for users to exchange information, knowledge, and news.",
    tags: ["Bootstrap", "Ajax", "Jquery", ".NET CORE 7.0", "Azure"],
    imageUrl: Blog_img,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "ASP.NET Core",
] as const;
