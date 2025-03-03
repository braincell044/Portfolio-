import React from "react";
import { Button, Container } from "react-bootstrap";

const ResumeSection = () => {
  return (
    <Container className="text-center my-5">
      <h2>Let's Connect</h2>
      <p>Download my resume or reach out via email!</p>

      {/* Download Resume Button */}
      <Button
        variant="primary"
        className="mx-2"
        href="/My Resume.pdf"  // Ensure your file is in the public folder
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </Button>

      {/* Email Me Button */}
      <Button
        variant="success"
        className="mx-2"
        href="mailto:Ugochukwumeshach5@gmail.com?subject=Let's Work Together"
      >
        Email Me
      </Button>
    </Container>
  );
};

export default ResumeSection;
