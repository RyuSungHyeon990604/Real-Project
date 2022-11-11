import ReactModal from "react-modal";
import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const MyModal = ({ isOpen, setOpen, todoList, setTodoList }) => {
  const list = ["오후 01:00", "2", "3", "4", "5", "6"];
  const [stime, setstime] = useState("");
  const [etime, setetime] = useState("");

  const handleSelect = (e) => {
    setstime(e.target.value);
  };

  const handleSelect2 = (e) => {
    setetime(e.target.value);
  };

  const [제목, 셋제목] = useState("");
  const [내용, 셋내용] = useState("");
  const insertData = () => {
    let arr = [
      ...todoList,
      {
        year: "2022",
        day: "2",
        startTime: "1800",
        endTime: "2000",
        title: 제목,
        todo: 내용,
      },
    ];
    arr = arr.sort((a, b) => Number(a.startTime) - Number(b.startTime));
    setTodoList(arr);
  };
  return (
    <div
      style={{
        width: "600px",
        height: "600px",
        position: "absolute",
        background: "white",
      }}
    >
      <FloatingLabel controlId="floatingSelect" label="시작시간">
        <Form.Select
          aria-label="Floating label select example"
          onChange={handleSelect}
          style={{width : "150px",float: "left"}}
          
        >
          {list.map((time) => (
            <option value={time} key={time}>
              {time}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="종료시간">
        <Form.Select
          aria-label="Floating label select example"
          onChange={handleSelect2}
          style={{width : "150px",marginLeft:"100px"}}
          
        >
          {list.map((time) => (
            <option value={time} key={time}>
              {time}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
      
      <button
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        확인
      </button>
      <button onClick={() => setOpen(!isOpen)}>취소</button>
    </div>
  );
};

export default MyModal;
