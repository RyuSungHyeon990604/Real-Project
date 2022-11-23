import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const [thema, setthema] = useState(null);
  
  useEffect(()=>{
    if(((monthIndex%12) +1)<1){
      switch ((monthIndex % 12) + 1) {
        case -11:
        case -10:
        case 0:
        case -1:
          setthema(4);
          break;
        case -2:
        case -3:
          setthema(3);
          break;
        case -4:
        case -5:
        case -6:
          setthema(2);
          console.log(monthIndex);
          break;
        case -7:
        case -8:
        case -9:
          setthema(1);
          console.log(monthIndex);
          break;
        default:
          break;
      }

    }
    else{
      switch ((monthIndex % 12) + 1) {
        case 12:
        case 11:
        case 1:
        case 2:
          setthema(4);
          console.log(monthIndex);
          break;
        case 3:
        case 4:
        case 5:
          setthema(1);
          console.log(monthIndex);
          break;
        case 6:
        case 7:
        case 8:
          setthema(2);
          console.log(monthIndex);
          break;
        case 9:
        case 10:
          setthema(3);
          console.log(monthIndex);
          break;
        default:
          break;
      }
    }
    }
   

  )

  function handlePrevMonth() {
    // if(monthIndex===0){
    //    setMonthIndex(monthIndex+11);
    // }
    // else{
      setMonthIndex(monthIndex - 1);
    // }
  }
  function handleNextMonth() {
    // if(monthIndex===12){
    //   setMonthIndex(monthIndex-11);
    // }
    // else{
      setMonthIndex(monthIndex + 1);
    // }
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex
        : dayjs().month()
    );
  }
  return (
    <header
      style={
        thema === 1  
          ? {
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/img/spring.png"
              })`,
            }
          : thema === 2
          ? {
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/img/summer.png"
              })`,
            }
          : thema === 3
          ? {
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/img/fall.png"
              })`,
            }
          : {
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/img/winter.png"
              })`,
            }  
      }
      //className={`py-8 flex justify-center items-center bg-blue-300 bg-theme_${thema}`}
      
      className="py-8 flex justify-center items-center bg-blue-300"
    >
      <img src={logo} alt="calendar" className="mr-3 w-30 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 fond-bold">Calendar</h1>
      <button
        onClick={() => {
          handleReset();
        }}
        className="border rounded py-2 px-4 mr-5"
      >
        Today
      </button>
      <button
        onClick={() => {
          handlePrevMonth();
        }}
      >
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 text-9xl">
          chevron_left
        </span>
      </button>
      <h2 className="mx-8 text-4xl text-gray-700 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
      <button
        onClick={() => {
          handleNextMonth();
        }}
      >
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 text-9xl">
          chevron_right
        </span>
        {/* <div className=" text-black text-9xl">{monthIndex%12 +1}</div> */}
      </button>
    </header>
  );
}
