import React, { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import MonthlyData from "./MonthlyData";
import Navigation from "./NavBar";
import HabitContainer from "./HabitContainer";
import AddHabit from "./AddHabit";

function App() {
    const [activeDay, setActiveDay] = useState(new Date());
    const [habits, setHabits] = useState([])

    useEffect(()=> {
      fetch(`http://localhost:3000/habits`)
      .then(resp => resp.json())
      .then(data => setHabits(data))
    }, [])

    const updateCompletedHabits = (updatedHabit) => {
      const newHabitArray = habits.map((habit) => {
        if (habit.id === updatedHabit.id) {
          return {
            ...habit,
            ...updatedHabit 
          };
        } else {
          return habit;
        };
      });
      setHabits(newHabitArray);
    };

    const updateHabitList = (newHabit) => {
      const newHabitArray = [...habits, newHabit];
      setHabits(newHabitArray);
    };

    const deleteHabit = (habitId) => {
      const newHabits = habits.filter((habit) => habit.id !== habitId);
      setHabits(newHabits);
    };


  return (
    <div>
    <Navigation />
    <Routes>
          <Route exact path="/monthlydata" element ={<MonthlyData habits={habits} setActiveDate={setActiveDay} activeDate={activeDay}/>} />
          <Route exact path="/addhabit" element ={<AddHabit updateHabitList={updateHabitList} />} />
          <Route exact path="/habits" element ={<HabitContainer updateCompletedHabits={updateCompletedHabits} habits={habits} activeDay={activeDay} setActiveDay={setActiveDay} deleteHabit={deleteHabit} />} />
      </Routes>
    </div>
  );
};

export default App;

