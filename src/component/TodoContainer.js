import React,{useState} from "react";
import Todo from "./Todo";
import "./todoTable.css"
function TodoContainer({todoList}){
    return(
        <div className="todoContainer" >
            {todoList.map(context=>
                <Todo context={context}/>
            )}
        </div>

    );
}
export default TodoContainer;