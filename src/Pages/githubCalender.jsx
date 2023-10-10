import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const GithubCalender = () => {
  return (
    <div
      className=" items-center p-8 pr-5 hover:scale-105 duration-300 pl-10 w-full bg-gradient-to-b
     from-gray-800
      to-gray-800 text-white"
    >
      <GitHubCalendar
        style={{ alignItems: "center" }}
        username="Adii1707"
        fontSize={18}
        blockSize={18}
      >
        <ReactTooltip delayShow={20} html />
      </GitHubCalendar>
    </div>
  );
};

export default GithubCalender;
