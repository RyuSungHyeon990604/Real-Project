import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function SideEventsList({ event, index }) {
  const {dispatchCalEvent} = useContext(GlobalContext);
  function convertDate(day) {
    const data = new Date(day);
    const year = data.getFullYear();
    const month = data.getMonth() + 1;
    const date = data.getDate();

    return `${year}.${month}.${date}`;
  }
  
  return (
    <div
      key={index}
      className={`p-1 mr-3 text-${event.label}-400 rounded mb-1 truncate h-50 border-4 hover:bg-gray-200`}
    >
      <p className={`p-1 mr-3 text-gray-900 rounded mb-1 flex justify-between`}>
        <p>{convertDate(event.day)}</p>{" "}
        <p className="material-icons cursor-pointer text-gray-500" onClick={()=>dispatchCalEvent({type : 'delete',payload : event})}>
          delete
        </p>
      </p>
      <hr></hr>
      To Do: {event.title}
      <br></br>
      <p className="truncate">Memo: {event.description}</p>
    </div>
  );
}
