import React, { useState,useEffect } from 'react';
import { addMonths, subMonths } from 'date-fns';
import { RenderHeader } from './RenderHeader.js'
import { RenderDays } from './RenderDays.js';
import { RenderCells } from './RenderCells.js';
import '../style.css'
import MyTab from '../MyTab';

export const Calender = () => {

    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    useEffect(()=>{
        console.log(selectedDate)
    },[selectedDate])
    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const onDateClick = (day) => {
        setSelectedDate(day);
    };
    
    const [tabWidth,setTabWidth] =useState("0%")
    const [show,setShow]=useState(false)

    const [todoList,setTodoList]=useState([{
        year : "2022",
        month : "11",
        day : "3",
        startTime : "1900",
        endTime : "2000",
        title : "시험",
        todo : "웹프레임워크 프로젝트d"
      }
    ])

    return (
        <>
        <div className="calendar" style={{width: show ? "70%" : "100%", float:"left"}}>
            <RenderHeader
                currentMonth={currentMonth}
                prevMonth={prevMonth}
                nextMonth={nextMonth}
            />
            <RenderDays />
            <RenderCells
                currentMonth={currentMonth}
                selectedDate={selectedDate}
                onDateClick={onDateClick}
                setShow={setShow}
                show={show}
                setTabWidth={setTabWidth}
                todoList={todoList}
                setTodoList={setTodoList}
            />
             

        </div>
        {show ? <MyTab todoList={todoList} width={tabWidth}/> : null}
        </>
    );
};