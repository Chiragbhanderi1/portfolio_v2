import { HoverEffect } from "./card-hover-effect";
import React from "react";
const projects = [
  {
    title: "HTML 5",
    link: "/html.png",
  },
  {
    title: "CSS 3",
    link: "/css.png",
  },
  {
    title: "Javascript",
    link: "/javascript.png",
  },
  {
    title: "Bootstrap",
    link: "/bootstrap.png",
  },
  {
    title: "Tailwind",
    link: "/tailwind.png",
  },
  {
    title: "React Js",
    link: "/react.png",
  },
  {
    title: "Next Js",
    link: "/nextjs.png",
  },
  {
    title: "Vue Js",
    link: "/vue.png",
  },
  {
    title: "PHP",
    link: "/php.png",
  },
  {
    title: "Laravel",
    link: "/laravel.png",
  },
  {
    title: "APIs",
    link: "/apis.png",
  },
  {
    title: "Node Js",
    link: "/node.png",
  },
  {
    title: "MongoDB",
    link: "/mongodb.png",
  },
  {
    title: "My Sql",
    link: "/sql.png",
  },
  {
    title: "Firebase",
    link: "/firebase.png",
  },
  {
    title: "Python",
    link: "/python.png",
  },
];
const Skills = () => {
  return (
    <div className="w-full relative py-10 mt-[200px]" id="skills">
      <div className="stars"></div>
    <div className="max-w-7xl mx-auto px-8 relative ">
      <h2
        className="text-purple-500 md:text-5xl text-3xl sm:text-4xl font-bold text-center"
        style={{ textShadow: "0 0 10px rgba(150, 0, 255, 0.7)" }}
        >
        🌟 SKILLS 🌟
      </h2>

      <HoverEffect items={projects} />
    </div>
        </div>
  );
};
export default Skills;
