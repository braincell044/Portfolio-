import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Simle from "./assesst/image/smile.jpeg";
import WhatsAppButton from './What';
import "boxicons/css/boxicons.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Contact = () => {
  return (
    <div className='over-now'>
      <div className="contact-section">
        <Container className="text-center text-md-start d-flex flex-column align-items-center py-5">
          <Row className="align-items-center w-100">
            <Col md={7} className="mb-4 mb-md-0">
              <h1 className="fw-bold">Let's Connect.</h1>
              <p className="text-muted">
                This website is here so you can easily reach out to me. Don’t hesitate—let’s collaborate and bring your business idea to life 💡!
              </p>
              <Button variant="dark" 
                href="mailto:Ugochukwumeshach5@gmail.com?subject=Let's Work Together"
                className="rounded-pill px-4 py-2 mt-3">
                Get In Touch ➜
              </Button>
              <Container className="text-center mt-5">
                <h4 className="fw-bold">Visit Us</h4>
                <p>
                  <strong>4B, Toyin Street (Trapazium House Ikeja), LGA, Lagos 100212</strong> <br />
                  <small className="text-muted">* No mail accepted</small>
                </p>
                <h4 className="fw-bold mt-4">Call Us</h4>
                <strong>+234(0)7039987705</strong> <br />
                <WhatsAppButton/>
                <small className="text-muted">Mon-Fri 09:00 - 17:00</small>
              </Container>
            </Col>
            <Col md={5} className="text-center">
              <img src={Simle} alt="Ugobueze" className="img-fluid rounded w-100 contact-image" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="container contact-links text-center">
        <Row className="justify-content-center flex-wrap">
          <Col xs={6} md={2} className="mb-3">
            <Button variant="outline-primary" className="rounded-pill w-100" href="/My Resume.pdf" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-file-earmark-text me-2"></i> Resume
            </Button>
          </Col>
          <Col xs={6} md={2} className="mb-3">
            <Button variant="outline-info" className="rounded-pill w-100" href="https://www.linkedin.com/in/ugochukwu-meshach-69b830285" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-linkedin me-2"></i> LinkedIn
            </Button>
          </Col>
          <Col xs={6} md={2} className="mb-3">
            <Button variant="outline-dark" className="rounded-pill w-100" href="https://github.com/braincell044" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-github me-2"></i> GitHub
            </Button>
          </Col>
          <Col xs={6} md={2} className="mb-3">
            <Button variant="outline-danger" className="rounded-pill w-100" href="mailto:Ugochukwumeshach5@gmail.com?subject=Let's Work Together">
              <i className="bi bi-envelope-at me-2"></i> Gmail
            </Button>
          </Col>
          <Col xs={6} md={2} className="mb-3">
            <Button variant="outline-danger" className="rounded-pill w-100" href="https://www.instagram.com/meshachugochukwu?utm_source=qr" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-instagram me-2"></i> Instagram
            </Button>
          </Col>
        </Row>
      </div>

      <hr className='hr-1' />
      <div className="footer-text text-center"> 
        <p className="text-muted">© 2025 Ugochukwu</p>
      </div>
    </div>
  );
}

export default Contact;
