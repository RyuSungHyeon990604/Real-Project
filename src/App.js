import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";
import Snowfall from 'react-snowfall';

function App() {

  const snowflake1 = document.createElement('img')
  snowflake1.src = 'https://ifh.cc/g/VlpvWk.png'
  const snowflake2 = document.createElement('img')
  snowflake2.src = 'https://ifh.cc/g/VlpvWk.png'

  const images = [snowflake1, snowflake2]

  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currenMonth} />
          {
            monthIndex%12+1 === 11?
            <Snowfall snowflakeCount={200}/>
            :monthIndex%12+1 === 12?
            <Snowfall snowflakeCount={200} />
            :monthIndex%12+1 === 1?
            <Snowfall snowflakeCount={200} />
            :monthIndex%12+1 === 2?
            <Snowfall snowflakeCount={200} />
            :monthIndex%12+1 === -1?
            <Snowfall snowflakeCount={200}/>
            :monthIndex%12+1 === 0?
            <Snowfall snowflakeCount={200} />
            :monthIndex%12+1 === -10?
            <Snowfall snowflakeCount={200} />
            :monthIndex%12+1 === -11?
            <Snowfall snowflakeCount={200} />
            :monthIndex%12+1 === 3?
            <Snowfall color = "pink" snowflakeCount={200} />
            :monthIndex%12+1 === 4?
            <Snowfall color = "pink" snowflakeCount={200} />
            :monthIndex%12+1 === 5?
            <Snowfall color = "pink" snowflakeCount={200} />
            :monthIndex%12+1 === -7?
            <Snowfall color = "pink" snowflakeCount={200} />
            :monthIndex%12+1 === -8?
            <Snowfall color = "pink" snowflakeCount={200} />
            :monthIndex%12+1 === -9?
            <Snowfall color = "pink" snowflakeCount={200} />
            :null
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
