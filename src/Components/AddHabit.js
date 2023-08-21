import { Button, Container, Form }from 'react-bootstrap';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddHabit({ updateHabitList }){
    const [habitName, setHabitName] = useState("");
    const navigate = useNavigate();
   
    const handleSubmit = (e) => {

        const newHabit = {
            habitName,
            "datesCompleted": []
        }
        e.preventDefault();
        fetch(`http://localhost:3000/habits`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "accept": "application/json"
            },
            body: JSON.stringify(newHabit)
          })
            .then(resp => resp.json())
            .then(data => updateHabitList(data))

        navigate("/habits");
     };

  

    return(
        <Container className="d-grid align-items-center justify-content-center text-center">
        <h2 className="mt-5 mb-4">Add Habit</h2> 
        <Form id="habitForm" className="text-center" onSubmit={handleSubmit} >
            <Form.Group>
            <Form.Control className="mb-4" type="text" placeholder="please enter a habit" onChange={(e)=>setHabitName(e.target.value)}/>
            <Button variant="primary" type="submit">
            Submit
            </Button>
         </Form.Group>
        </Form>
        </Container>
    );
};

export default AddHabit;