import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";

import AdityaImage from "./Adityaimage.png";

const Home = ()=>{
    return (
      <div
      name="home"
      className="h-full pt-20 w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full  ">
          <h3 className="pt-10 text-2xl w-96 sm:text-3xl font-bold text-white md:flex-row">
           Hey, I'm Aditya Singh Ghosh
          </h3>
          <h5 className="pt-4 w-96 text-xl sm:text-3xl font-bold text-teal-500 md:flex-row">
          Full stack Web Developer
          </h5>

          <div>
            <a
              // to="Projects"
              href= "/AdityaResume.pdf"
              download={true}
              smooth
              duration={500}
              className="group mt-1 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
              bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-16">
          <img
          // style={{height: "350px", width: "300px"} }
            src={AdityaImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 md:w-1/2 "
          />
        </div>
      </div>
    </div>       

    )
}
export {Home}