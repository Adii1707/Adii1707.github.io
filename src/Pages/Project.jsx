import React from "react";
import anthropologie from "../assets/portfolio/Anthropologie.png";
import Bigbasket from "../assets/portfolio/Bigbasket.png";
import zara from "../assets/portfolio/Zara.png";
import Unsplash from "../assets/portfolio/Unsplash.png";
// import {Slide} from "react-slideshow-image";
// import { Carousel } from "@trendyol-js/react-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stats from "./Stats";
import Nykaa from "../assets/portfolio/Nykaa.png";
import Slider from "react-slick";
import "./Project.css";

// from-cyan-800 via-black to-purple-800 w-full

const Project = () => {
  const projects = [
    {
      id: 5,
      src: Nykaa,
      link: "https://frontend-three-coral.vercel.app/",
      github: "https://github.com/Saurav02022/Nykaa-Clone",
      desc: "Mars Beauty is an e-commerce website where we could purchase products like Beauty Products and Home products. It was a collaborative project built by a team of five developers and executed in five days.",
      stack: "MongoDB | ExpressJS | ReactJS | NodeJS",
      name: "Mars Beauty",
    },
    {
      id: 1,
      src: anthropologie,
      link: "https://falgunbokde-ftweb18-constructweek1.netlify.app/",
      github: "https://github.com/falgunbokde23/ANTHROPOLOGIE-Project",
      desc: "It was an e-commerce website where we could purchase products like Beauty Products and Home products. It was a collaborative project built by a team of five developers and executed in five days.",
      stack: "HTML | CSS | JavaScript",
      name: "Clone of Anthropologie",
    },
    {
      id: 2,
      src: zara,
      link: "https://fabulous-brioche-d464ac.netlify.app/",
      github: "https://github.com/Adii1707/moldy-care-8778",
      desc: "ZARA is an e-commerce website which primarily sells Products. It is the largest company in the Inditex group. This was a collaborative project built by team of 4 members executed in 5 days",
      stack: "HTML | CSS | JavaScript",
      name: "Clone of Zara",

    },
    {
      id: 3,
      src: Bigbasket,
      link: "https://venerable-basbousa-4536f8.netlify.app/",
      github: "https://github.com/Vaibhav2416/BigBasket-Clone",
      desc: "Big-Basket is india's largest online food and grocery store. With over 18000 products and over a 1000 brands in their catalogue. It was a collaborative project built by a team of six developers and  executed in five days.",
      stack: "HTML | CSS | JavaScript",
      name: "Clone of BigBasket",
    },
    // {
    //   id: 4,
    //   src: Unsplash,
    //   link: "https://comfy-palmier-30bd29.netlify.app/",
    //   github: "https://github.com/sauravugi/Recondite-force-2920",
    //   desc: "Unsplash.com is a popular website that offers hundreds of thousands of creative photos around the world. This was a collaborative project built by team of 4 members executed in 5 days",
    //   stack: "HTML | CSS | JavaScript",
    //   name: "Clone of Unsplash",
    // },
    
  ];
  
  
  
  return (
    <div
      name="Projects"
      className="mt-10px bg-gradient-to-b bg-gray-500 text-black md:h-full"
    >
      <div className="max-w-screen-lg pb-10 p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline ">
            Projects
          </p>
          <p className="py-6 text-black text-xl">Check out some of my work right here</p>
        </div>

        <div className="gap-x-2 w-full grid justify-center items-center text-center grid-cols-1 lg:grid-cols-2  grid-rows-1 gap-5 shadow-md " >
        {projects.map(({ id, src, link, github,name,stack,desc }) => (
            <div key={id}  className=" border-red-500  h-[700px]  rounded-lg  p-3" >
              
              <img
             
                src={src}
                alt=""
                className="h-80 rounded-md duration-200 hover:scale-105"
              />
              <div>
                <h3 className="font-bold text-yellow-300 text-2xl pl-6 p-2 hover:scale-105"  >{name}</h3>
                <p className=" text-black-800 p-2">{desc}</p>
                <h4 className="font-bold text-cyan-400 text-lg hover:scale-105 duration-200 pl-3 p-2">Tech Stack: {stack}</h4>
              </div>
              <div className="flex items-center justify-center">
               <div className="flex items-center justify-center">
               <button onClick={()=> window.open(`${link}`, "_blank", "noreferrer")} className="bg-pink-400 rounded-xl w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 " >
              Demo
                </button>
                 <button onClick={()=> window.open(`${github}`, "_blank", "noreferrer")} className="bg-cyan-600 rounded-xl w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 Code  
                </button>
               </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
      {/* <Stats /> */}
    </div>
  );
};

export default Project;
