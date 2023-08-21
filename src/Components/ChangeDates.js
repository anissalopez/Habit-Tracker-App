import React from "react";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Container, Row, Col} from "react-bootstrap";

export default function ChangeDates({ dateHandler }){
    return (
        <Container >
        <Row>
          <Col  className='mt-4'onClick={() => dateHandler("prev")}><FaArrowLeft /></Col>
          <Col  className='rightBtn mt-4' onClick={() => dateHandler("next")}><FaArrowRight/></Col>
        </Row>
        </Container>
    );
};