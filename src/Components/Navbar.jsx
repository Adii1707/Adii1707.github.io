import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "AboutMe",
    },
    {
      id: 3,
      link: "Skills",
    },
    {
      id: 4,
      link: "Projects",
    },
    {
      id: 5,
      link: "Contact",
    },
    // {
    //   id: 6,
    //   link: (
    //     <>
    //     <a
    //   href= "/AdityaResume.pdf"
    //   //style= "rounded-br-md"
    //   download= {true}>Resume</a>
    //     </>
    //   )
    // },
  ];

  return (
    <div
      id="nav"
      className="flex justify-between items-center w-full h-20 px-4 text-black
     bg-white fixed "
    >
      <div>
        <h1 className="text-5xl hover:text-pink-500 font-signature ml-2">
          Aditya
        </h1>
      </div>

      <ul className="hidden md:flex mr-10">
        {links.map(({ id, link }) => (
          <li
            id="li"
            key={id}
            className="px-4 cursor-pointer  capitalize font-medium text-black hover:scale-105 duration-200 "
          >
            <Link
              to={link}
              className="hover:text-pink-500 text-black"
              smooth-duration={500}
            >
              {link}
            </Link>
          </li>
        ))}
        <a
          className="px-4 pt-0 hover:text-pink-500 font-medium cursor-pointer capitalize text-2xl text-white-500
           hover:scale-105 duration-200"
          href="/fw17_1062-Aditya-Ghosh-Resume.pdf"
          download={true}
        >
          <h3
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1x-bmq7C-Qo91-5O4TjBSwuJuzObIx_pa/view?usp=sharing",
                "_blank",
                "noreferrer"
              )
            }
          >
            Resume
          </h3>
        </a>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-800 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <a
            className="px-4 cursor-pointer capitalize py-6 text-4xl"
            href="/fw17_1062-Aditya-Ghosh-Resume.pdf"
            download={true}
          >
            <h3
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1x-bmq7C-Qo91-5O4TjBSwuJuzObIx_pa/view?usp=sharing",
                  "_blank",
                  "noreferrer"
                )
              }
            >
              Resume
            </h3>
          </a>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
