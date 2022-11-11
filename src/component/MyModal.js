import React from "react";
import { useState } from "react";
const MyModal = ({ isOpen, setOpen, todoList, setTodoList }) => {
  const [제목, 셋제목] = useState("");
  const [내용, 셋내용] = useState("");
  const insertData = () => {
    let arr=[...todoList,{
        year : "2022",
        day : "2",
        startTime : "1800",
        endTime : "2000",
        title : 제목,
        todo : 내용
    }]
    arr=arr.sort((a,b)=>
        Number(a.startTime)-Number(b.startTime)
    )
    setTodoList(arr)
  };
  /*
   year : "2022",
        month : "11",
        day : "3",
        startTime : "1900",
        endTime : "2000",
        title : "시험",
        todo : "웹프레임워크 프로젝트d"
  */

  return (
    <div
      style={{
        width: "600px",
        height: "600px",
        position: "absolute",
        background: "white",
      }}
    >
      <div>
        <span>OOOO 년 OO월 OO일 </span>
        <span>
          제목
          <br />
        </span>
        <span>00 : 00</span> <span>부터</span> <span>00 : 00</span>{" "}
        <span>까지</span>
        <span>
          <br />
          제목 :{" "}
        </span>
        <input type="text" onChange={(e) => 셋제목(e.target.value)}></input>
        <span>
          <br />
          내용
          <br />
        </span>
        <textarea
          rows="10"
          cols="50"
          onChange={(e) => 셋내용(e.target.value)}
        />
      </div>
      <div>
        <button onClick={()=>insertData()}>확인</button>
        <button onClick={()=>setOpen(!isOpen)}>취소</button>
      </div>
    </div>
  );
};

export default MyModal;
