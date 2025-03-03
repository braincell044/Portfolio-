import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Apple from './assesst/image/Screenshot 2025-03-02 at 23.07.53.png'
import './App.css'
import Crypto from './assesst/image/Screenshot 2025-03-03 at 00.02.58.png'
import boot from './assesst/image/Screenshot 2025-03-03 at 00.13.58.png'

const Product = () => {
  return (
   <div>
     <section id="Product" className="d-flex flex-column align-items-center justify-content-center py-5 ">
      {/* Work Button */}
      <div className="text-center my-5">
      <button className=" mx-5 mt-5 btn btn-1">My work</button>
      </div>

      <h3 className="text-center mb-4">
      Here are some of the standout projects I have developed:
      </h3>

      {/* Project Card */}
      <div className="container bg-white p-4 rounded shadow-lg d-flex flex-column flex-md-row align-items-center">
        {/* Project Image */}
        <div className="w-100 w-md-50 text-center">
          <img
            src={Apple}
            alt=" apple e commerce"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Project Details */}
        <div className="w-100 w-md-50 mt-3 mt-md-0 ps-md-4">
          <h3 className="fw-bold"> Apple E-commerce</h3>
          <p className="text-muted">
          Apple E-commerce is an ecommerce fullstack application built using
            Nextjs for the frontend and Node.js for the backend. Users can browse
            products, add them to their cart, and proceed to checkout.
          </p>

          {/* Tech Stack */}
          <div className="d-flex gap-2 mt-3">
  {[
    { name: "bi bi-box-arrow-in-right", color: "#000000" }, // React (Blue)
    { name: "bxl-nodejs", color: "#8CC84B" }, // Node.js (Green)
    { name: "bxl-mongodb", color: "#47A248" }, // MongoDB (Dark Green)
    { name: "bxl-bootstrap", color: "#7952B3" }, // Bootstrap (Purple)
    { name: "bxl-git", color: "#F05032" }, // Git (Red)
  ].map((tech, index) => (
    <i
      key={index}
      className={`bx ${tech.name} fs-3`}
      style={{ color: tech.color }}
    ></i>
  ))}
</div>


          {/* External Link (Fixed ESLint Warning) */}
          <a
            href="https://apple-nx.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-inline-block mt-3 text-primary text-decoration-none"
          >
            <i className="bx bx-link-external"></i> View Project
          </a>
        </div>
      </div>

      
    </section>

    <div className="container bg-white p-4 rounded shadow-lg d-flex flex-column flex-md-row align-items-center">
    <div className="w-100 w-md-50 mt-3 mt-md-0 ps-md-4">
          <h3 className="fw-bold">  Investment Platform</h3>
          <p className="text-muted">
         This investment platform designed to attract investors, showcase financial opportunities, and ensure secure user transactions. This full-stack application is built with cutting-edge technology for seamless performance, user authentication, and real-time data integration.

          </p>

          {/* Tech Stack */}
          <div className="d-flex gap-2 mt-3">
  {[
    { name: "bxl-react", color: "#61DBFB" }, // React (Blue)
    { name: "bxl-nodejs", color: "#8CC84B" }, // Node.js (Green)
    { name: "bxl-mongodb", color: "#47A248" }, // MongoDB (Dark Green)
    { name: "bxl-bootstrap", color: "#7952B3" }, // Bootstrap (Purple)
    { name:  "bx bxl-github", color: "#181717" }, 
    { name: "bx bxl-html5", color: "#E34F26" },
    { name: "bx bxl-css3",  color: "#1572B6" },
  ].map((tech, index) => (
    <i
      key={index}
      className={`bx ${tech.name} fs-3`}
      style={{ color: tech.color }}
    ></i>
  ))}
</div>


          {/* External Link (Fixed ESLint Warning) */}
          <a
            href="https://cryptolite.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-inline-block mt-3 text-primary text-decoration-none"
          >
            <i className="bx bx-link-external"></i> View Project
          </a>
        </div>
        {/* Project Image */}
        <div className="w-100 w-md-50 text-center">
          <img
            src={Crypto}
            alt=" apple e commerce"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Project Details */}
 
      </div>


      <section className="my-5">
      <div className="container bg-white p-4 rounded shadow-lg d-flex flex-column flex-md-row align-items-center">
        {/* Project Image */}
        <div className="w-100 w-md-50 text-center">
          <img
            src={boot}
            alt=" apple e commerce"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Project Details */}
        <div className="w-100 w-md-50 mt-3 mt-md-0 ps-md-4">
          <h3 className="fw-bold"> Brainwave.io </h3>
          <p className="text-muted">
          Brainwave.io is a showcase landing page highlighting my design skills using vanilla HTML, CSS, and Bootstrap.

Accelerate your business growth with Brainwave a variety of unique blocks, allowing you to build stunning pages effortlessly, without any coding. Create your next consultancy website in just minutes!
          </p>

          {/* Tech Stack */}
          <div className="d-flex gap-2 mt-3">
  {[
   // MongoDB (Dark Green)
    { name: "bxl-bootstrap", color: "#7952B3" }, // Bootstrap (Purple)
    { name:  "bx bxl-github", color: "#181717" }, 
    { name: "bx bxl-html5", color: "#E34F26" },
    { name: "bx bxl-css3",  color: "#1572B6" }, // Git (Red)
  ].map((tech, index) => (
    <i
      key={index}
      className={`bx ${tech.name} fs-3`}
      style={{ color: tech.color }}
    ></i>
  ))}
</div>


          {/* External Link (Fixed ESLint Warning) */}
          <a
            href="https://bootstrap-eight-lac.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-inline-block mt-3 text-primary text-decoration-none"
          >
            <i className="bx bx-link-external"></i> View Project
          </a>
        </div>
      </div>
      </section>
   </div>
  );
};

export default Product;
