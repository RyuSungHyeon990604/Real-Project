import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, format } from 'date-fns';
import MyModal from "./MyModal";
import { useState } from "react";

export const SetDays = ({ currentMonth, selectedDate, onDateClick, setShow, show, setCalenderWidth, setTabWidth,todoList,setTodoList }) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const [isOpen, setOpen] = useState(false);
    
    const handleClick = () =>{
        setOpen(true);
    };
    
    const handleClickSubmit = () =>{
        setOpen(false);
    };
      
    const handleClickCancel = () =>{
        setOpen(false);
    };

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, 'd');
            const cloneDay = day;
            days.push(
                <div
                    className={`columns date ${
                        !isSameMonth(day, monthStart)
                            ? 'disabled'
                            : isSameDay(day, selectedDate)
                            ? 'selected'
                            : format(currentMonth, 'M') !== format(day, 'M')
                            ? 'previous'
                            : 'current'
                    }`}
                    key={day}
                    onClick={() => {
                        setShow(true)
                        setCalenderWidth("70%")
                        isOpen ?  console.log(null) : handleClick()
                        isOpen ?  console.log(null) : onDateClick(cloneDay)}
                    }> 
                    <span
                        className={
                            format(currentMonth, 'M') !== format(day, 'M')
                                ? 'text previous'
                                : ''
                        }>
                        {formattedDate}
                    </span>
                </div>,
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className="rows" key={day}>
                {days}
            </div>,
        );
        days = [];
    }
    console.log(isOpen)
    return <div className="body">
                    {rows}
                    {isOpen ? <MyModal
                       isOpen={isOpen}
                       onSubmit={handleClickSubmit}
                       onCancel={handleClickCancel}
                       setOpen={setOpen}
                       todoList={todoList}
                       setTodoList={setTodoList}
                       day={selectedDate}
                    /> : null}
                    </div>;
};