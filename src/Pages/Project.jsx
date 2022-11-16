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

const Project = () => {
  const projects = [
    {
      id: 1,
      src: anthropologie,
      link: "https://falgunbokde-ftweb18-constructweek1.netlify.app/",
      github: "https://github.com/falgunbokde23/ANTHROPOLOGIE-Project",
      desc: "This is information of orignal ANTHROPOLOGIE website so basically this is an E-commerce website in this website we can purchase various products like Beauty Products , Dresses , Women Clothes, Furniture and more. This was a collaborative project buit by team of 5 executed in 3 days ",
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
      desc: "BigBasket is an e-commerce website which primarily delivers grocery goods found in convenience stores, home essentials and food supplies to its customers. This was a collaborative project buit by team of 5 members in 5 days",
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
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };
  return (
    <div
      name="Projects"
      className="mt-10px bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <Slider {...settings} className="gap-x-2" >
        {projects.map(({ id, src, link, github,name,stack,desc }) => (
            <div key={id} className="shadow-md gap- shadow-gray-600 rounded-lg w-2/3" >
              
              <img
             
                src={src}
                alt=""
                className="h-80 rounded-md duration-200 hover:scale-105"
              />
              <div>
                <h3 className="font-bold text-green-800 p-2"  >{name}</h3>
                <p className=" text-black-800 p-2">{desc}</p>
                <h4 className="font-bold text-green-800 p-2">Tech Stack: {stack}</h4>
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
