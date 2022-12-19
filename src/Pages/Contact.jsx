import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";

// bg-gradient-to-b  from-purple-800 via-black to-cyan-800 p-4

const Contact = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/aditya-singh-ghosh-9a5a5b1b3/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Adii1707",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:adityasinghghosh36@gmail.com",
    },
    // {
    //   id: 4,
    //   child: (
    //     <>
    //       Resume <BsFillPersonLinesFill size={30} />
    //     </>
    //   ),
    //   href: "/AdityaResume.pdf",
    //   style: "rounded-br-md",
    //   download: true,
    // },
  ];

  return (
    <div
      name="Contact"
      className="w-full h-full bg-gray-500 text-black"
    >
      
      <div className="flex flex-col w-full p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-gray-500">
            Contact
          </p>
          <p className="py-6 text-black text-xl">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex pb-10 flex-col lg:flex-row gap-6 justify-center items-center">
        <div className="w-80 mt-[-90px] p-10">
      <ul>
        <h3 className="text-2xl font-bold inline border-b-4 border-gray-500" >Connect with me</h3>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center p-4 mt-4 w-60 h-14 px-4 duration-300 hover:scale-110 bg-gradient-to-r from-gray-700 via-gray-700 to-red-600" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div>
          <form
            action="https://getform.io/f/8e10502d-bee0-4ab1-a5d8-518457a18bc0"
            method="POST"
            className=" flex flex-col w-80"
          >
            <input

              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 bg-transparent  text-white text-lg border-2 border-black rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 text-lg border-3 border-black p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 text-lg border-3 border-black bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-red-500 to-pink-600 px-11 py-3 my-8 mx-auto flex items-center text-2xl w-[150px] rounded-md hover:scale-110 duration-300">
              Send
            </button>
          </form></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
