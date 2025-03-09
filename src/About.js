import React from 'react';
import Star from './assesst/image/image copy.png';
import { Col, Row, Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
AOS.init({
  offset: 120,
  delay: 0,
  duration: 400,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

const About = () => {
  return (
    <Container className='over-now' id='About'>
      <div className="text-center my-5">
        <button className="mx-5 my-5 btn btn-1">About me</button>
      </div>

      <Row className="align-items-center flex-lg-row flex-column-reverse">
        {/* Image Section */}
        <Col lg={6} className="text-center" data-aos="fade-right">
          <img
            src={Star}
            alt="Ugobueze"
            className="img-fluid w-75 rounded about-image"
          />
        </Col>

        {/* Text Section */}
        <Col lg={6} data-aos="fade-left">
          <h3 className='my-2 text-center'>Want to learn more about me? Here’s a glimpse into my world 🌕</h3>
          <p className='text-center'>
          I'm a results-driven Full-Stack Developer with a passion for building high-performance, scalable web applications that drive business growth 🚀. Leveraging modern technologies like React, Node.js, MongoDB, and AWS, I've successfully delivered over 30+ production-grade websites for startups, businesses, and investors 💼. Whether you're launching a new product or optimizing an existing one, I’m here to help bring your vision to life! 💡
          <br/><br/>
My journey in web development began in 2023, fueled by independent learning on platforms like SoloLearn, Khan Academy, and W3Schools. I later honed my expertise through formal training at Pluralcode Academy, specializing in software development and DevOps on AWS. Over time, I’ve built a strong foundation in Next.js, React, Bootstrap, CSS, and Node.js, allowing me to create seamless, scalable, and efficient digital solutions.
<br/><br/>
Beyond development, I thrive on solving complex problems, optimizing system performance, and ensuring smooth user interactions. I take a detail-oriented and innovative approach to every project, ensuring that the end product not only meets but exceeds expectations.
<br/><br/>
When I’m not coding, you’ll likely find me exploring and learning new technologies or latest tech trends, engaging with developer communities, or playing online coding games. Let’s connect and build something impactful together! 🚀


          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
