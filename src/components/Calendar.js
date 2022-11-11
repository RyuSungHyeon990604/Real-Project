import React, { useState, useEffect } from 'react';
import { addMonths, subMonths } from 'date-fns';
import { SetMonth } from './SetMonth'
import { SetWeek } from './SetWeek';
import { SetDays } from './SetDays';
import '../assets/style.css'
import MyTab from './MyTab';

export const Calender = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    
    useEffect(()=>{console.log(selectedDate)}, [selectedDate])

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const onDateClick = (day) => {
        setSelectedDate(day);
    };

    const [calenderWidth,setCalenderWidth]=useState("100%")
    const [tabWidth,setTabWidth] =useState("0%")
    const [show,setShow]=useState(false)

    const [todoList,setTodoList]=useState([{
        year : "2022",
        month : "11",
        day : "3",
        startTime : "1900",
        endTime : "2000",
        title : "제목",
        todo : "웹프레임워크 프로젝트"
      }
    ])

    return (
        <>
        <div className="calendar" style={{width:calenderWidth, float:"left",transition :".35s"}}>
            <SetMonth
                currentMonth={currentMonth}
                prevMonth={prevMonth}
                nextMonth={nextMonth}
            />
            <SetWeek />
            <SetDays
                currentMonth={currentMonth}
                selectedDate={selectedDate}
                onDateClick={onDateClick}
                setShow={setShow}
                show={show}
                setCalenderWidth={setCalenderWidth}
                setTabWidth={setTabWidth}
                todoList={todoList}
                setTodoList={setTodoList}
            />
        </div>
        {show ? <MyTab todoList={todoList} width={tabWidth}/> : null}
        </>
    );
};