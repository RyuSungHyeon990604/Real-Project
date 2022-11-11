import React from "react";
import "../assets/TodoGraphic.css"

function TodoGraphic({todoList}){
    return(
       <div className="graphicContainer" style={{width:"25%"}}>
        {todoList.map(cur=>
            <div id='good' style={{border: "1px solid",height:`${cur.endTime-cur.startTime}px`,}}>{cur.startTime}</div>
        )}
       </div>
    );
}

export default TodoGraphic;