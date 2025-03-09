import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const expertiseData = [
  {
    id: "01",
    title: "Full-Stack Expertise",
    description:
      "I specialize in full-stack web development, leveraging React for dynamic front-end interfaces and Node.js/Express for powerful, scalable back-end services. This approach allows me to build robust web applications that can handle complex user interactions and large-scale data processing, ensuring smooth performance and scalability.",
  },
  {
    id: "02",
    title: "Component-Driven",
    description:
      "I implement a modular approach to web development, building reusable and maintainable components with React and Next.js. By structuring projects around these reusable pieces, I ensure faster development cycles and easier scalability. This approach also improves maintainability, making it simpler to update features or adjust designs without reworking the entire codebase.",
  },
  {
    id: "03",
    title: "UI/UX Design",
    description:
      "I design and develop user interfaces that prioritize intuitive user experiences across devices. Using Bootstrap CSS, I ensure that the design is responsive, visually appealing, and accessible. My focus on UI/UX ensures that users can easily navigate and interact with the site, leading to higher engagement and satisfaction.",
  },
  {
    id: "04",
    title: "API Development",
    description:
      "I develop secure and scalable APIs, both RESTful and GraphQL, using Node.js/Express. My API-first approach ensures efficient data exchange between the front-end and back-end, with a focus on scalability, security, and performance. This allows me to build applications that can handle complex workflows and integrate smoothly with other systems.",
  },
  {
    id: "05",
    title: "Database Efficiency",
    description:
      "I am proficient in managing databases using MongoDB, focusing on creating scalable architectures that can handle large volumes of data. My expertise includes optimizing queries for faster performance, securing sensitive information, and ensuring that the database is designed to support future growth without compromising speed or stability.",
  },
  {
    id: "06",
    title: "Agile Workflow",
    description:
      "I follow agile development methodologies, incorporating continuous integration and deployment (CI/CD) practices to deliver high-quality code. This iterative process allows me to quickly adapt to changes, fix bugs, and deliver updates efficiently. It also fosters better collaboration and faster delivery of features, ensuring that projects remain aligned with evolving client needs.",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="Meth" className="container py-5">
           <div className="text-center my-5">
      <button className=" mx-5  btn btn-1">Methodology</button>
      <h3>The core methodologies that shape my approach and expertise in web development:</h3>
      </div>

      <div className="row g-4" data-aos="fade-up"
     data-aos-duration="2000">
        {expertiseData.map((item, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="p-4 rounded-3 shadow-sm" style={{ background: "#fdf7f2" }}>
              <h5 className="text-muted fw-bold">{item.id}</h5>
              <h3 className="fw-bold">{item.title}</h3>
              <p className="text-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;