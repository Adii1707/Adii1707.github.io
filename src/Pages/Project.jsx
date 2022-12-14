import React from "react";
import anthropologie from "../assets/portfolio/Anthropologie.png";
import Bigbasket from "../assets/portfolio/Bigbasket.png";
import zara from "../assets/portfolio/Zara.png";
import Unsplash from "../assets/portfolio/Unsplash.png";
// import {Slide} from "react-slideshow-image";
// import { Carousel } from "@trendyol-js/react-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Project.css";

const Project = () => {
  const projects = [
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
      desc: "ZARA is an e-commerce website which primarily sells clothes, shoes, accessories, swimwear, beauty, and perfumes. It is the largest company in the Inditex group, the world's largest apparel retailer. This was a collaborative project built by team of 4 members executed in 5 days",
      stack: "HTML | CSS | JavaScript",
      name: "Clone of Zara",

    },
    {
      id: 3,
      src: Bigbasket,
      link: "https://venerable-basbousa-4536f8.netlify.app/",
      github: "https://github.com/Vaibhav2416/BigBasket-Clone",
      desc: "Big-Basket was an e-commerce website that sold and delivered groceries and fruits. It was a collaborative project built by a team of six developers and  executed in five days.",
      stack: "HTML | CSS | JavaScript",
      name: "Clone of BigBasket",
    },
    {
      id: 4,
      src: Unsplash,
      link: "https://comfy-palmier-30bd29.netlify.app/",
      github: "https://github.com/sauravugi/Recondite-force-2920",
      desc: "Unsplash.com is a popular website that offers hundreds of thousands of creative photos around the world. This was a collaborative project built by team of 4 members executed in 5 days",
      stack: "HTML | CSS | JavaScript",
      name: "Clone of Unsplash",
    },
    
  ];
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div
      name="Projects"
      className="mt-10px bg-gradient-to-b  from-cyan-800 via-black to-purple-800 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg pb-10 p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline ">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <Slider width="400px" {...settings} className="gap-x-2 shadow-md" >
        {projects.map(({ id, src, link, github,name,stack,desc }) => (
            <div key={id} className="  rounded-lg w-60 p-3" >
              
              <img
             
                src={src}
                alt=""
                className="h-80 rounded-md duration-200 hover:scale-105"
              />
              <div>
                <h3 className="font-bold text-yellow-200 text-2xl pl-6 p-2 hover:scale-105"  >{name}</h3>
                <p className=" text-black-800 p-2">{desc}</p>
                <h4 className="font-bold text-cyan-400 text-xl hover:scale-105 duration-200 pl-3 p-2">Tech Stack: {stack}</h4>
              </div>
              <div className="flex items-center justify-center">
               <div className="flex items-center justify-center">
               <button className="bg-pink-400 rounded-xl w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 " >
                <a href={link}>Demo</a>
                </button>
                 <button className="bg-cyan-600 rounded-xl w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 <a href={github}>Code</a>  
                </button>
               </div>
              </div>
              
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Project;
