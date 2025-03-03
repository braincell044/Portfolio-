import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
// import Air from "./assesst/image/air.jpeg";
import Simle from "./assesst/image/smile.jpeg";
import WhatsAppButton  from './What'


const ConnectPage = () => {
  return (
    <div style={{ background: "linear-gradient(to bottom, #fce4ec, #fff)", minHeight: "70vh" }}>
      {/* Main Section */}
      <Container className="text-center text-md-start d-flex flex-column align-items-center py-5">
        <Row className="align-items-center w-100 ">
          {/* Text Section */}
          <Col md={7} className="mb-4 mb-md-0">
            <h1 className="fw-bold">Let's Connect.</h1>
            <p className="text-muted">
         
This website is here so you can easily reach out to me.  
Don’t hesitate—let’s collaborate and bring your business idea to life 💡!
            </p>
            <Button variant="dark" 
            href="mailto:Ugochukwumeshach5@gmail.com?subject=Let's Work Together"
            className="rounded-pill px-4 py-2 mt-3">
              Get In Touch ➜
            </Button>
               {/* Contact Section */}
      <Container className="text-center mt-5">
        <h4 className="fw-bold">Visit Us</h4>
        <p>
          <strong>4B, Toyin Street (Trapazium House Ikeja), LGA, Lagos 100212</strong> <br />
          <small className="text-muted">* No mail accepted</small>
        </p>

        <h4 className="fw-bold mt-4">Call Us</h4>
        <p>
          <strong>+234(0)7039987705</strong> <br />
    <div className=" mx-5">
    <WhatsAppButton/>
    </div>
          
          <small className="text-muted">Mon-Fri 09:00 - 17:00</small>
        </p>
      </Container>
          </Col>

          {/* Image Section */}
          <Col md={5} className="text-center ">
            <img
              src={Simle}
              alt="Ugobueze"
              className="img-fluid ugo rounded w-100"
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </Col>
        </Row>
      </Container>

  
    </div>
  );
};

export default ConnectPage;
