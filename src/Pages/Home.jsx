import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";

import AdityaImage from "./Adityaimage.png";

const Home = ()=>{
    return (
      <div
      name="home"
      className="h-full pb-10 pt-20 w-full bg-gradient-to-b from-purple-800 via-black to-cyan-800 "
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col  justify-center h-full  ">
          <h3 className="pt-10 text-2xl hover:scale-105 duration-200 w-96 sm:text-3xl font-bold text-white md:flex-row">
           Hey, I'm Aditya Singh 
          </h3>
          <h5 className="pt-4 w-96 text-xl sm:text-3xl font-bold text-teal-500 md:flex-row">
          Full Stack Web Developer
          </h5>

          <div>
            <a
              // to="Projects"
              href= "/AdityaResume.pdf"
              download={true}
              smooth
              duration={500}
              className="group mt-4 text-white w-fit w-300 px-6 py-3 my-2 flex items-center text-xl rounded-md 
              bg-gradient-to-r hover:scale-105 from-gray-500 to-gray-500 cursor-pointer"
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div className="m-16">
          <img
          
            src={AdityaImage}
            alt="my profile"
            className="h-[300px] rounded-xl hover:scale-105 duration-300  w-[300px]"
          />
        </div>
      </div>
    </div>       

    )
}
export {Home}
