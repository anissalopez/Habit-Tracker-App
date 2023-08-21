import React, { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import MonthlyData from "./MonthlyData";
import Navigation from "./NavBar";
import HabitForm from "./AddHabit";
import HabitContainer from "./HabitContainer";

function App() {
    const [activeDay, setActiveDay] = useState(new Date());
    const [habits, setHabits] = useState([])

    useEffect(()=> {
      fetch(`http://localhost:3000/habits`)
      .then(resp => resp.json())
      .then(data => setHabits(data))
    }, [])



  return (
    <div>
    <Navigation />
    <Routes>
          <Route exact path="/habits" element ={<HabitContainer habits={habits} activeDay={activeDay} setActiveDay={setActiveDay} />} />
      </Routes>
    </div>
  );
};

export default App;

