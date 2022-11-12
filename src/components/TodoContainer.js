import React,{useState} from "react";
import Todo from "./Todo";
import "../assets/TodoTable.css"
import {
    getYear,
    getMonth,
    getDate,
    
  } from "date-fns";

function TodoContainer({todoList,day}){
    let arr=todoList.filter(c=>c.day==getDate(day) && c.month==getMonth(day) && c.year==getYear(day))
    return(
        <div className="todoContainer">
            {arr.map(context=>
                <Todo context={context}/>
            )}
        </div>
    );
}

export default TodoContainer;