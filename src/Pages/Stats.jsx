import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="mt-5 ml-10 mr-4 hover:scale-110 duration-300 place-items-center content-center">
        <a href="https://github.com/Adii1707" className="mt-6">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=adii1707&layout=compact&theme=tokyonight&show_icons=true" //launguages
            alt="language card"
          />
        </a>
      </div>
      <br />
      <div className="ml-5 mr-4 content-center hover:scale-110 duration-300">
        <a href="https://github.com/Adii1707" className="mt-4">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=adii1707&show_icons=true&theme=tokyonight" //stats
            alt="stats card"
          />
        </a>
      </div>
      <br />
      <div className="ml-5 mr-4 pb-2 items-center hover:scale-110 duration-300">
        <a href="https://github.com/Adii1707" className="mt-4">
          <img
            
            className="items-center"
            src="https://github-readme-streak-stats.herokuapp.com?user=Adii1707&theme=tokyonight&border_radius=6.5&date_format=j%20M%5B%20Y%5D"
            alt="streak"
          />
        </a>
      </div>
     
    </div>
  );
};

export default Stats;
