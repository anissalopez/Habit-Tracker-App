import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function HomePage () {

    const navigate = useNavigate();

    const handleClick = () => navigate('/habits')
    return(
        <Container className="d-grid align-items-center justify-content-center text-center mt-5">
            <h1 className="mt-5">Welcome to Habit Tracker</h1>
                <div>
                    <Button onClick={handleClick} type="submit" variant="primary" className="mt-3 mb-2">
                        View Weekly Habits
                    </Button>
                </div>
       </Container>
    )

}

    
  

export default HomePage;
