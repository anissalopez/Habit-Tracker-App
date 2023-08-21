import React, { useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import {format, startOfWeek, addDays, addWeeks, subWeeks } from "date-fns";
import DateHeader from "./Header";
import { FaCheck, FaTrash } from 'react-icons/fa';
import ChangeDates from "./ChangeDates";

function HabitContainer({ setActiveDay, activeDay, habits, updateCompletedHabits, deleteHabit}){
 
    const handleDelete = (id) => {
      if (window.confirm("Are you sure?")) {
        fetch(`http://localhost:3000/habits/${id}`, {
            method: "DELETE"
          })
            .then(resp => resp.json())
            .then(() => deleteHabit(id))
      };
    };

    const renderWeekDays = () => {
      let week = [];
      const startDate = startOfWeek(activeDay, { weekStartsOn: 1 });
      let currentDay = startDate;
        for(let day = 0; day < 7; day++){
          week.push(<th key={day}>{format(addDays(currentDay, day), "E")} {format(addDays(currentDay, day), "d")}</th>);
        };
      return <>{week}</> 
    };

    const handleClick = (habit, date) => {
        habit.datesCompleted.push(date);

        fetch(`http://localhost:3000/habits/${habit.id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            "accept": "application/json"
          },
          body: JSON.stringify(habit)
        })
          .then(resp => resp.json())
          .then(data => updateCompletedHabits(data))
      };


    const renderButtons = (habit) => {
      let weekButtons = [];
      const startDate = startOfWeek(activeDay, {weekStartsOn:1});
      let currentDate = startDate;
      
      for(let day = 0; day < 7; day++){
        const formattedDate = format(addDays(currentDate, day), "MM dd yyyy");
        weekButtons.push(
            <td key={addDays(currentDate, day)}>
              <button 
                  className={ 
                    habit.datesCompleted.includes(formattedDate) ?
                    "btn btn-success" :
                      "btn btn-outline-primary weekBtn"
                  }   
                  onClick={()=>handleClick(habit, format(addDays(currentDate, day), "MM dd yyyy"))}>
                {habit.datesCompleted.includes(formattedDate) ?  <FaCheck /> : null }
              </button>
            </td>);
      };
        return <>{weekButtons}</> 
    };

    const dateHandler = (btnName) => {
      if (btnName === "prev") {
        setActiveDay(subWeeks(activeDay, 1))
      };
      if(btnName === "next"){
        setActiveDay(addWeeks(activeDay, 1))
     };
    };
      
  return(
      <>
        <DateHeader activeDay={activeDay} isDate={false} text={null}/>
        <Container className="d-grid pt-5">
            <Table responsive>
                <thead>
                    <tr>
                        <th>Habits</th>
                        {renderWeekDays()}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {habits.map((habit) => {
                    return(
                      <tr key={habit.habitName}>
                      <td>{habit.habitName}</td>
                      {renderButtons(habit)}
                      <td><button onClick={()=>handleDelete(habit.id)} className="btn btn-danger"><FaTrash  /></button></td>
                     </tr>)})}
                </tbody>
             </Table>
        </Container>   
        <ChangeDates dateHandler={dateHandler}/>
      </>
    );
};

export default HabitContainer;