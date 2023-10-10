import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";


import Aditya from "../assets/Aditya.png";
const Home = () => {
  return (
    <div name="home" className="h-full pb-10 pt-20 w-full bg-gray-500 ">
      <div className="max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col  justify-center h-full  ">
          <h3 className="pt-10 pl-4 hover:text-pink-400 text-2xl hover:scale-105 duration-200 w-96 sm:text-3xl font-bold text-white md:flex-row">
            Hey, I'm Aditya Singh
          </h3>
          <h5 className="pt-4 pl-4 w-96 text-xl sm:text-3xl font-bold text-teal-500 md:flex-row">
            <TypeAnimation
              
              sequence={[
                "",
                500,
                "Full Stack Web Developers!",
                1000,
                "",
                500,
                "Frontend Web Developer!",
                2000,
                "Full Stack Web Developers!",
                1000,
                "Frontend Web Developer!",
                2000,
                "",

                () => {
                  // console.log("Done typing!");
                },
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              
            />
          </h5>

          <div>
            <a
              
              href="/fw17_1062-Aditya-Ghosh-Resume.pdf"
              download={true}
              smooth
              duration={500}
              className="group ml-4 mt-4 text-white w-fit w-300 px-6 py-3 my-2 flex items-center text-xl rounded-md 
              bg-gradient-to-r hover:scale-105 from-gray-700 to-black cursor-pointer"
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
            src={Aditya}
            alt="my profile"
            className="h-[350px] rounded-xl hover:scale-105 duration-300  w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};
export { Home };
