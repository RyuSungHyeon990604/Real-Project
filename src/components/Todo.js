import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/TodoTable.css"

function Todo({ context }) {
  return (
    <div>
      <Table striped className="todoTable" onClick={()=>console.log(context)}>
        <tbody>
          <tr id="date">
            <td>{context.title} {context.startTime.substring(0,2)}:{context.startTime.substring(2,4)} ~ {context.endTime.substring(0,2)}:{context.endTime.substring(2,4)}</td>
          </tr>
          <tr>
            <td id="todo">{context.todo}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Todo;
