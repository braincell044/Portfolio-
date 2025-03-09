import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Apple from './assesst/image/Screenshot 2025-03-02 at 23.07.53.png'
import './App.css'
import Crypto from './assesst/image/Screenshot 2025-03-03 at 00.02.58.png'
import boot from './assesst/image/Screenshot 2025-03-03 at 00.13.58.png'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


const Product = () => {
  return (
   <div className="over-now">
     <section id="Product" className="d-flex flex-column align-items-center justify-content-center py-5 ">
      {/* Work Button */}
      <div className="text-center my-5">
      <button className=" mx-5 mt-5 btn btn-1">My work</button>
      </div>

      <h3 className="text-center mb-4">
      Here are some of the standout projects I have developed:
      </h3>

      {/* Project Card */}
      <div data-aos="zoom-in-up"  >

      
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
          Apple E-commerce is a full-stack e-commerce application built with Next.js 
          for the frontend and Node.js for the backend. Users can sign up or log in, 
          browse products, add items to their cart, and complete the checkout process.
           They can also access support, add new products to the website, and test the site's performance in real time.
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
      </div>

      
    </section>
<div data-aos="zoom-in-right" >
    <div  className="container bg-white p-4 rounded shadow-lg d-flex flex-column flex-md-row align-items-center">
    <div className="w-100 w-md-50 mt-3 mt-md-0 ps-md-4">
          <h3 className="fw-bold">  Investment Platform</h3>
          <p className="text-muted">
         This investment platform designed to attract investors, showcase financial opportunities, and ensure secure user transactions. This full-stack application is built with cutting-edge technology for seamless performance, user authentication, also enabels users to deposit and real-time data integration.

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
      </div>


      <section className="my-5">
        <div data-aos="zoom-out-down">
      <div  className="container bg-white p-4 rounded shadow-lg d-flex flex-column flex-md-row align-items-center">
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
      </div>
      </section>
   </div>
  );
};

export default Product;
