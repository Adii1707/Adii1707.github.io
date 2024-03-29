import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import npm from "../assets/npm.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import Chakra from "../assets/Chakra.png";
import node from "../assets/node.png";
import git from "../assets/git.png";
import cyclic from "../assets/cyclic.png";
import mongo from "../assets/mongo.png";
import netlify from "../assets/netlify.png";
import postman from "../assets/postman.png";
import vercel from "../assets/vercel.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: npm,
      title: "npm",
      style: "shadow-red-400",
    },
    {
      id: 7,
      src: Chakra,
      title: "Chakra UI",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: node,
      title: "Node",
      style: "shadow-green-400",
    },
  ];

  const tools = [
    {
      id: 1,
      src: git,
      title: "Git",
      style: "shadow-orange-600",
    },
    {
      id: 2,
      src: cyclic,
      title: "Cyclic",
      style: "shadow-white",
    },
    {
      id: 3,
      src: postman,
      title: "Postman",
      style: "shadow-orange-400",
    },
    {
      id: 4,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 5,
      src: vercel,
      title: "Vercel",
      style: "shadow-black",
    },
    {
      id: 6,
      src: netlify,
      title: "Netlify",
      style: "shadow-green-300",
    },
  ];

  return (
    <div name="Skills" className="bg-gray-500 w-full h-full">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div>
          <p className="text-4xl font-bold border-purple-500 p-2 inline">
            Skills
          </p>
          <p className="py-6 text-black text-xl">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div>
          <p className="text-4xl font-bold border-purple-500 p-2 inline">
            Tools
          </p>
          <p className="py-6 text-black text-xl">
            These are the tools I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tools.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
