import React from "react";
// import styled from "styled-components";
// import "../App.css";
const Stats = () => {
  return (
    // streak 
    <div className="flex flex-col justify-center items-center ">
      {/* <div className="mb-2 mt-4 item-center " > */}
       
        <div className="mt-5 ml-16 hover:scale-110 duration-300 place-items-center content-center">
        <a href="https://github.com/Adii1707" className="mt-6" >  
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Adii1707&layout=compact&theme=tokyonight"  //launguages
             alt="language card" />
        </a>
        </div>
        <br />
        <div className="ml-5 content-center hover:scale-110 duration-300">
        <a href="https://github.com/Adii1707" className="mt-4">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=Adii1707&show_icons=true&theme=tokyonight" //stats
         alt="stats card" />
        </a>
        </div>
       <br />
        <div className="ml-5 items-center hover:scale-110 duration-300">
       <a href="https://github.com/Adii1707" className="mt-4">
          <img
            //align="center"
            className="items-center"
            src="https://github-readme-streak-stats.herokuapp.com?user=Adii1707&theme=tokyonight&border_radius=6.5&date_format=j%20M%5B%20Y%5D"
        alt="streak"  />
        </a>
       </div>
        {/* </div> */}
    </div>
  );
};

export default Stats;