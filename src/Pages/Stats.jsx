import React from "react";
// import styled from "styled-components";
// import "../App.css";
const Stats = () => {
  return (
    // streak 
    <div>
      <div style={{ width: "40%", margin: "auto", display:"flex" }} className="flex  " >
        <a href="https://github.com/Adii1707">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com?user=Adii1707&theme=tokyonight&border_radius=6.5&date_format=j%20M%5B%20Y%5D"
        alt="streak"  />
        </a>
      </div>
 
      <div>
        <a href="https://github.com/Adii1707" >  
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Adii1707&layout=compact&theme=tokyonight"  //launguages
             alt="language card" />
        </a>
        <a href="https://github.com/Adii1707">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=Adii1707&show_icons=true&theme=tokyonight" //stats
         alt="stats card" />
        </a>
      </div>
    </div>
  );
};

export default Stats;