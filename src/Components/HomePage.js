import React from "react";
import { Form, Container, Button, InputGroup  } from "react-bootstrap";


function HomePage () {
    return(
        <Container className="d-grid align-items-center justify-content-center text-center">
            <h1>Welcome to Habit Tracker</h1>
                <Button type="submit" variant="primary" className="mt-3 mb-2">
                View Weekly Habits
                </Button>
    
       </Container>
    )

}

    
  

export default HomePage;
