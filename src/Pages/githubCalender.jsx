import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from "react-tooltip";
import Calendar from 'react-github-contribution-calendar';


const GithubCalender = () => {

//   var values = {
//   '2022-06-23': 1,
//   '2022-06-26': 2,
//   '2022-06-27': 3,
//   '2022-06-28': 4,
//   '2022-06-29': 4
// }
// var until = '2023-01-30';

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
    className=" items-center p-8 pr-5 hover:scale-105 duration-300 pl-10 w-full bg-gradient-to-b
     from-gray-800
      to-gray-800 text-white"
      >
       
       
       <GitHubCalendar style={{alignItems: "center"}} 
       username="Adii1707" 
       fontSize={18}
       blockSize={18}
      //  transformData={selectLastHalfYear}
       >  
        <ReactTooltip delayShow={20} html />

      </GitHubCalendar>
      {/* <Calendar values={values} until={until} username="Adii1707" /> */}

    </div>
  )
}

// import { Box, Image } from "@chakra-ui/react";
// import React from "react";
// // import Stats from "./Github";
// // import Styles from "../AllCss/Home.module.css";
// // import Styles1 from "../AllCss/tech.module.css";
// // import Styles2 from "../AllCss/About.module.css";
// import GitHubCalendar from "react-github-calendar";
// // import cx from "classnames";
// import ReactTooltip from "react-tooltip";
// const GithubCalender= () => {

//   const selectLastHalfYear = (contributions) => {
//     const currentYear = new Date().getFullYear();
//     const currentMonth = new Date().getMonth();
//     const shownMonths = 10;

//     return contributions.filter((day) => {
//       const date = new Date(day.date);
//       const monthOfDay = date.getMonth();

//       return (
//         date.getFullYear() === currentYear &&
//         monthOfDay > currentMonth - shownMonths &&
//         monthOfDay <= currentMonth
//       );
//     });
//   };

//   return (
//     <>
//       <Box
//         mt={{ sm: "196px", md: "196px", lg: "100px" }}
//         // className={Styles.github}
//         data-aos="fade-up"
//         // border="1px solid black"
//       >
//         <h1 
//         // className={Styles2.about}
//         >
//           {/* Github <span className={Styles1.color}>stats</span> */}
//         </h1>
//         <br />
//         <br />
//         <br />

//         <Box
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           // className={cx(Styles.calendarmobile, Styles.middlemainhome)}
//         >
//           {/* <h1>Contributers</h1> */}
//           <GitHubCalendar username="Adii1707"
//           blockSize={18}
//         //  transformData={selectLastHalfYear}
//           >
//             {" "}
//             <ReactTooltip delayShow={20} html />
//           </GitHubCalendar>
//         </Box>

//         <Box 
//         // className={cx(Styles.statsmobile)}
//         >
//           {/* <Stats /> */}
//         </Box>
//       </Box>
//     </>
//   );
// };

export default GithubCalender;
