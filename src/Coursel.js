import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "boxicons/css/boxicons.min.css";
import { Container } from "react-bootstrap";
import './Coursel.css'

const skills = [
  { name: "React", icon: "bx bxl-react", color: "#61DBFB" },
  { name: "Next.js", icon: "bi bi-box-arrow-in-right", color: "#000000" },
  { name: "TypeScript", icon: "bi bi-code-slash", color: "#3178C6" },
  { name: "MongoDB", icon: "bi bi-database", color: "#47A248" },
  { name: "PostgreSQL", icon: "bi bi-hdd-network", color: "#336791" },
  { name: "Prisma", icon: "bi bi-diagram-3", color: "#2D3748" },
  { name: "Tailwind CSS", icon: "bi bi-palette", color: "#06B6D4" },
  { name: "Bootstrap", icon: "bi bi-bootstrap", color: "#7952B3" },
  { name: "Nest.js", icon: "bi bi-houses", color: "#E0234E" },
  { name: "Git", icon: "bi bi-git", color: "#F05032" },
  { name: "Firebase", icon: "bi bi-fire", color: "#FFCA28" },
  { name: "Supabase", icon: "bi bi-cloud", color: "#3ECF8E" },
  { name: "Postman", icon: "bx bi-tools", color: "#FF6C37" },
  { name: "Node.js", icon: "bx bxl-nodejs", color: "#8CC84B" },
  { name: "AWS", icon: "bx bxl-aws", color: "#FF9900" },
  { name: "HTML", icon: "bx bxl-html5", color: "#E34F26" },
  { name: "CSS", icon: "bx bxl-css3", color: "#1572B6" },
  { name: "JavaScript", icon: "bx bxl-javascript", color: "#F7DF1E" },
  { name: "Express.js", icon: "bx bx-server", color: "#68A063" },
  { name: "GitHub", icon: "bx bxl-github", color: "#181717" },
];

const shuffledSkills = (arr) => arr.sort(() => Math.random() - 0.5);

const SkillsCarousel = () => {
  const trackRefs = [useRef(null), useRef(null), useRef(null)];

  const handleMouseEnter = (index) => {
    if (trackRefs[index].current) {
      trackRefs[index].current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = (index) => {
    if (trackRefs[index].current) {
      trackRefs[index].current.style.animationPlayState = "running";
    }
  };

  return (
    <div>
         <Container>

         <div className="text-center">
            <button className=" mx-5 btn btn-1">Skills</button>
          <p className="fs-5">The skills, tools and technologies I am really good at:</p>
          </div>
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="skills-carousel-container "
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div className="skills-carousel  ">
            <div className="carousel-track" ref={trackRefs[index]}>
              {[...shuffledSkills(skills), ...shuffledSkills(skills)].map((skill, skillIndex) => (
                <div key={skillIndex} className="carousel-item">
                  <i className={skill.icon} style={{ color: skill.color }}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
         </Container>
    </div>
  );
};

export default SkillsCarousel;
