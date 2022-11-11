import "../App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TodoContainer from "./TodoContainer";
import TodoGraphic from "./TodoGraphic";
import { useEffect } from "react";

function MyTab({ todoList, width }) {
  useEffect(() => {console.log(width);}, []);

  return (
    <div>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab
          eventKey="concat"
          title={todoList[0] ? `${todoList[0].day}일` : "일정이 없습니다"}
          disabled
        ></Tab>
        <Tab eventKey="home" title="일정">
          <TodoContainer todoList={todoList} />
        </Tab>
        <Tab eventKey="profile" title="그림으로보기" style={{float : "none"}}>
          <TodoGraphic todoList={todoList} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default MyTab;
