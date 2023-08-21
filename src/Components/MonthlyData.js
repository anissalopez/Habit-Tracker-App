import React from "react";
import { Table, Container } from "react-bootstrap";
import { subMonths, addMonths, getDaysInMonth, format, addDays, startOfMonth, endOfMonth } from "date-fns";
import DateHeader from "./Header";
import ChangeDates from "./ChangeDates";

function MonthlyData({ activeDate, setActiveDate, habits}){
    const endOfTheSelectedMonth = endOfMonth(activeDate);
    const startOfTheSelectedMonth = startOfMonth(activeDate);
   
  

    const handleButtons = (habit) => {
      const buttons = [];
          for (let i = 0; i < getDaysInMonth(activeDate); i++) {
              const currentDate = addDays(startOfTheSelectedMonth, i);
              const formattedDate = format(addDays(startOfTheSelectedMonth, i), "MM dd yyyy");
                  buttons.push(
                    <td key={currentDate}>
                      <button 
                        className={habit.datesCompleted.includes(formattedDate) ? "monthBtn btn btn-success" :
                        "monthBtn btn btn-outline-primary custom"
                        }>
                      </button>
                    </td>
                  );
          };
          return buttons;
    };
      
    const habitDisplay = habits.map((habit) => (
        <tr key={habit.habitName}>
          <td>{habit.habitName}</td>
          {handleButtons(habit)}
        </tr>
      ));
      
    const generateDatesForCurrentMonth = () => {
        let currentDate = startOfTheSelectedMonth;
        const monthDays = [];
             while (currentDate <= endOfTheSelectedMonth)  {
                monthDays.push(
                <td key={currentDate}>
                {format(currentDate, "d")}
                </td>
            );
        currentDate = addDays(currentDate, 1);
        };
        return <>{monthDays}</>
      };
     
    
    const dateHandler = (btnName) => {
        if (btnName === "prev") {
            setActiveDate(subMonths(activeDate, 1));
          };
        if (btnName === "next") {
            setActiveDate(addMonths(activeDate, 1));
          };
    };


    return(
        <>
        <DateHeader activeDay={activeDate}></DateHeader>
        <Container  className="d-grid pt-5">
        <Table size="sm" >
            <thead>
                 <tr>
                    <th>Habits</th>
                    {generateDatesForCurrentMonth()}
                 </tr>
            </thead>
                <tbody>
                    {habitDisplay}
                </tbody>
        </Table>
        <ChangeDates dateHandler={dateHandler}/>
        </Container> 
        </>
    );
};

export default MonthlyData;