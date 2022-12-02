import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from "react-tooltip";


export const GithubCalender = () => {

  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 10;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };


  return (
    <div
    className=" items-center pl-10 w-full bg-gradient-to-b
     from-gray-800
      to-gray-800 text-white"
      >
       
       <GitHubCalendar style={{alignItems: "center"}} 
       username="Adii1707" 
       fontSize={18}
       blockSize={18}
       transformData={selectLastHalfYear}
       >  
        <ReactTooltip delayShow={20} html />

      </GitHubCalendar>

    </div>
  )
}
