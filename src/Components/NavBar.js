import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaCalendar, FaPlus } from 'react-icons/fa';
import { BsHouse, BsPersonCircle } from 'react-icons/bs';


export default function Navigation() {


  return (
      <Container fluid className="d-grid mb-5 pb-5">
            <Navbar fixed="top" bg="primary">
              <Navbar.Brand className="col text-white" href="/">
                 <BsHouse className="navIcon" size={30} style={{color: "#ffffff",}} />
              </Navbar.Brand>
                <Nav>
                  <Nav.Link  className="col-md-auto text-white"href="/addhabit">
                    <FaPlus size={15} className="navIcon"  style={{color: "#ffffff",}} />
                  </Nav.Link>
                  <Nav.Link  className=" col-md-auto text-white"href="/monthlydata">
                    <FaCalendar  size={15}className="navIcon" style={{color: "#ffffff",}} />
                  </Nav.Link>
                  <Nav.Link  className="col-md-auto text-white"href="/habits">
                    <BsPersonCircle size={20} className="navIcon"  style={{color: "#ffffff",}} />
                  </Nav.Link>
            
                </Nav>
            </Navbar>    
         
      </Container>
  )
};