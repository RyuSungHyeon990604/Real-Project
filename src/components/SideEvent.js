import dayjs from "dayjs";
import React from "react";
import SideEventsList from "./SideEventsList";
export default function SideEvent() {
  const events = JSON.parse(localStorage.getItem("savedEvents"));
  //이벤트목록 오름차순으로 정렬
  function sortEvent() {
    let arr = [];
    if (events) {
      arr = events.sort(function (a, b) {
        return a.day - b.day;
      });
    }
    return arr;
  }

  return (
    <React.Fragment>
      <p className="text-gray-500 font-bold mt-3">Events</p>
      <div className="h-event-box-size overflow-auto">
        {sortEvent().map((cur,i) => {
            if(dayjs().valueOf() - 86400000 < cur.day){
                return <SideEventsList event={cur} index={i}/>
            }
        })}
      </div>
    </React.Fragment>
  );
}
