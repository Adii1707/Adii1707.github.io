import GithubCalender from "./githubCalender";
import Stats from "./Stats";

const About = () => {
  return (
    <div name="AboutMe" className="w-full  bg-gray-500  text-black">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline ">About Me</p>
        </div>

        <p className="text-xl mt-10">
          A dynamic, aspiring Full Stack Web developer. Cooperative team
          participant skilled in working with interdisciplinary teams and
          executing goal-oriented projects. Intensely interested in obtaining a
          Software Developer position to work on enhancing the product
          experience.
        </p>
      </div>
      <div className="max-w-screen-lg pb-8 p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline ">Github Calender & Stats</p>
        </div>
        <GithubCalender />
        <Stats />
      </div>
    </div>
  );
};
export default About;
