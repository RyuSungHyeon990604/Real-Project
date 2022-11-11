import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./todoTable.css"
function Todo({ context }) {
  return (
    <div>
      <Table striped className="todoTable" onClick={()=>console.log(context)}>
        <tbody>
          <tr id="date">
            <td>00~11</td>
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
