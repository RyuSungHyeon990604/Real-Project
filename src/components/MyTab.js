import "../App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TodoContainer from "./TodoContainer";
import TodoGraphic from "./TodoGraphic";
import { useEffect } from "react";
import {
  getYear,
  getMonth,
  getDate,
} from "date-fns";

function MyTab({ todoList, width,day }) {
  useEffect(() => {console.log(width);}, []);
  let arr=todoList.filter(c=>c.day==getDate(day) && c.month==getMonth(day) && c.year==getYear(day))


  return (
    <div>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab
          eventKey="concat"
          title={ arr[0] ? `${arr[0].day}일` : "일정이 없습니다"}
          disabled
        ></Tab>
        <Tab eventKey="home" title="일정">
          <TodoContainer todoList={todoList} day={day}/>
        </Tab>
        <Tab eventKey="profile" title="그림으로보기" style={{float : "none"}}>
          <TodoGraphic todoList={todoList} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default MyTab;
