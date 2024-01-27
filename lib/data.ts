import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cleanCollectiveImg from "@/public/clean-collective.png";
import keeperAppImg from "@/public/keeper-app.png";
import simonImg from "@/public/simon.png";

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
    title: "Graduated Univerity",
    location: "Calgary, AB",
    description:
      "I graduated with a Diploma after 4 semesters of studying. I found a job as a software developer 3 months later.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Calgary, AB",
    description:
      "I was a front-end developer working with a real world client for a project called Clean Collective. My stack included React, Node.js, Express, MUI, and MongoDB.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Software Developer",
    location: "Edmonton, AB (Remote)",
    description:
      "I worked as a software developer for about a year with Monogram LP. I am currently open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Clean Collective",
    description: "Tinder for clean tech and oil & gas",
    tags: ["React", "Node.js", "Express", "MongoDB", "MUI"],
    imageUrl: cleanCollectiveImg,
  },
  {
    title: "Keeper App",
    description: "An app where you can create notes",
    tags: ["React", "Node.js", "TypeScript", "jQuery", "Bootstrap"],
    imageUrl: keeperAppImg,
  },
  {
    title: "Simon Game",
    description: "A web game based off the popular game called Simon",
    tags: ["React", "Node.js", "TypeScript", "jQuery", "Bootstrap"],
    imageUrl: simonImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Web Devlopement",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Django",
  "Git",
  "Tailwind",
  "Fluent UI",
  "Material UI",
  "MySQL",
  "Python",
  "Java",
  "Framer Motion",
] as const;
