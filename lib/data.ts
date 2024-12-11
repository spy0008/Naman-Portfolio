import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Graduated udemy bootcamp",
    location: "sagwara, india",
    description:
      " 6 months of studying",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Front-End Developer",
    location: "sagwara, india",
    description:
      "front-end developer fresher.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Full-Stack Developer",
    location: "sagwara, india",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Animated site",
    description:
      "Nodejs and Express Js for APIs creating and Signaling server implemented with NodeJs and Socket.io for Real Time Messages sending functionality and Zustand for managing states",
    tags: ["React", "GSAP", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Real Time chat site",
    description:
      "real time chat used socket  io which provide real time responses to user also give image sharing functionality.",
    tags: ["React.js", "Node.js", "Express.js", "Tailwind", "Redux","MongoDB", "Socket.io","Zustand"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Blog site",
    description:
      "Created a personal blog site using MERN Stack or made designed and build responsive user Friendly interface for mobile and desktop and implemented admin panel also and dark mode.",
    tags: ["React.js", "Node.js", "Express.js", "Tailwind", "Redux","MongoDB"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Figma",
  "Bootstrap",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;