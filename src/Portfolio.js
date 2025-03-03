import React from "react";
import {  Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Ugobueze from './assesst/image/Ugobueze.jpeg'
import Port from './Port'
import { Container, Navbar, Nav} from "react-bootstrap";
import Coursel from './Coursel'
import './App.css'
import Code from './assesst/image/PluralCode.jpg'
import About from "./About";
import Product from "./Product";
import Meth from "./Meth";
import Type from './Type'


const HeroSection = () => {
  return (
<div>
<Navbar bg="light" expand="lg" className="py-3 px-4 fixed-top">
                <Navbar.Brand href="#" className="fw-bold fs-3">Ugobueze</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
               
                 <a href="#About" className="mx-2 nav-link my-4">About</a>
                 <a href="#Product" className="mx-2 nav-link my-4">Project</a>
                <a href="#Meth" className="mx-2 nav-link my-4">Methodology</a>
                <Button
                       variant="light"
                       className="mx-2 my-4 rounded-pill"
                       href="/My Resume.pdf"  // Ensure your file is in the public folder
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                        Resume
                     </Button>

  

<Button variant="dark" 
className="rounded-pill my-3 pt-3 "
href="mailto:Ugochukwumeshach5@gmail.com?subject=Let's Work Together">
              Get In Touch ➜
            </Button>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
<div style={{ background: "linear-gradient(to bottom, #EAF3FF, #fff)", minHeight: "100vh", padding: "50px 0" }}>
     
          
      <Container className="my-5 py-5">
        
        <Row className="align-items-center">
          {/* Left Side - Text */}
          <Col md={6} className="text-center text-md-start">
          <Type/>
            <h1 className="fw-bold">I develop dynamic and User-friendly Web Applications that drive Business growth 🚀</h1>
            <p>
              I specialize in full-stack web development, crafting high-performing solutions that deliver exceptional user experiences. Let's transform your ideas into impactful digital products and achieve your goals.
            </p>
            <Button variant="dark"
             href="mailto:Ugochukwumeshach5@gmail.com?subject=Let's Work Together"
             className="rounded-pill px-4 py-2 mt-3">
              Get In Touch ➜
            </Button>
            <div className="mt-4">
              <p className="fw-bold mb-2">♡ They trust me</p>
              <div className="d-flex gap-3">
                <img src={Code} alt="PluralCode" height="30" />
               
              </div>
            </div>
          </Col>
          
          {/* Right Side - Image */}
          <Col md={6} className="text-center">
            <img
              src={Ugobueze}
              alt="Ugobueze"
              className="img-fluid rounded"
              style={{ maxWidth: "50%", borderRadius: "10px" }}
            />
          </Col>
        </Row>
      </Container>
   
    
  <Coursel />

<About/>
<Product/>
<Meth/>
      <Port/>
    </div>
</div>
   
  );
};

export default HeroSection;
