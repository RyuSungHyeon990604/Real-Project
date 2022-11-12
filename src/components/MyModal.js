import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {
  getYear,
  getMonth,
  getDate,
} from "date-fns";
import "../assets/Modal.css";

const MyModal = ({ isOpen, setOpen, todoList, setTodoList,day }) => {

  const list = [];
  for(let i=0; i<48; i++){
      let k = i/2;
      k<10?
      list.unshift(`${k%1>0?`0${k-0.5}`:`0${k}`} : ${i%2===0?'00':'30'}`):list.unshift(`${k%1>0?`${k-0.5}`:`${k}`} : ${i%2===0?'00':'30'}`)
  }
  let [title, settitle] = useState('');
  let [context, setcontext] = useState('');
  const [stime, setstime] = useState("");
  const [etime, setetime] = useState("");

  const handleSelect = (e) => {
    setstime(e.target.value);
  };

  const handleSelect2 = (e) => {
    setetime(e.target.value);
  };

console.log('day',)
  const [제목, 셋제목] = useState("");
  const [내용, 셋내용] = useState("");
  
  const insertData = () => {
    let arr = [
      ...todoList,
      {
        year: getYear(day),
        month : getMonth(day),
        day: getDate(day),
        startTime: stime,
        endTime: etime,
        title: title,
        todo: context,
      },
    ];
    arr = arr.sort((a, b) => Number(a.startTime) - Number(b.startTime));
    setTodoList(arr);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
          <div className="title">
          <input type="text" placeholder= "일정제목" onChange={(e)=>{settitle(e.target.value);}}/>
          </div>
          <div className="header">
          <Row>
              <Col>
              <FloatingLabel controlId="floatingSelect" label="시작시간">
        <Form.Select
          aria-label="Floating label select example"
          onChange={handleSelect}
          style={{float: "left"}}
          
        >
          {list.map((time) => (
            <option value={time}>
              {time}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
      </Col>
      <Col>
      <FloatingLabel controlId="floatingSelect" label="종료시간">
        <Form.Select
          aria-label="Floating label select example"
          onChange={handleSelect2}
          style={{float:"right"}}
        >
          {list.map((time) => (
            <option value={time}>
              {time}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
      </Col>
      </Row>
      </div>

      <div className="body">
              
      <Form.Group className="textarea" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} onChange={(e)=>{setcontext(e.target.value);}}/>
      </Form.Group>
      
      </div>
              <div className="footer">
              <button onClick={()=> {
                    setOpen(!isOpen)
                    insertData()
                    console.log(todoList)
                }}>저장</button>
                <button onClick={()=>setOpen(!isOpen)}>취소</button>
                

              </div>  
            </div>
        </div>
  );
};

export default MyModal;