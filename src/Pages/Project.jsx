import React from "react";
import anthropologie from "../assets/portfolio/Anthropologie.png";
import Bigbasket from "../assets/portfolio/Bigbasket.png";
import zara from "../assets/portfolio/Zara.png";
import Unsplash from "../assets/portfolio/Unsplash.png";


const Project = () => {
  const projects = [
    {
      id: 1,
      src: anthropologie,
      link: "https://falgunbokde-ftweb18-constructweek1.netlify.app/",
      github: "https://github.com/falgunbokde23/ANTHROPOLOGIE-Project",
    },
    {
      id: 2,
      src: zara,
      link: "https://fabulous-brioche-d464ac.netlify.app/",
      github: "https://github.com/Adii1707/moldy-care-8778",
    },
    {
      id: 3,
      src: Bigbasket,
      link: "https://venerable-basbousa-4536f8.netlify.app/",
      github: "https://github.com/Vaibhav2416/BigBasket-Clone",
    },
    {
      id: 4,
      src: Unsplash,
      link: "https://comfy-palmier-30bd29.netlify.app/",
      github: "https://github.com/sauravugi/Recondite-force-2920",
    },
    
  ];
  

  return (
    <div
      name="Projects"
      className="mt-10px bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, link, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
              style={{hight: "400px"}}
                src={src}
                alt=""
                className="h-48 rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 " >
                <a href={link}>Demo</a>
                </button>
                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 <a href={github}>Code</a>  
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
