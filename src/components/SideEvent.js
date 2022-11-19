import React from "react";

export default function SideEvent() {
    const events = JSON.parse(localStorage.getItem('savedEvents'));

    function convertDate(day) {
        const data = new Date(day);
        const year = data.getFullYear();
        const month = data.getMonth() + 1;
        const date = data.getDate();
      
        return `${year}.${month}.${date}`;
    }

    return(
    <React.Fragment>
      <p className="text-gray-500 font-bold mt-10">Events</p>
      {events.map((evt, idx) => (
        
        <div
            key={idx}
            className={`p-1 mr-3 text-${evt.label}-400 rounded mb-1 truncate`}
        >
            <p className={`p-1 mr-3 text-gray-900 rounded mb-1`}>
                {convertDate(evt.day)}</p><hr></hr>
                To Do: {evt.title}<br></br>
                Memo: {evt.description}
        </div>
        ))}
    </React.Fragment>
    )
}