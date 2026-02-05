import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  BiHeart,
  BiCopyright,
  BiEnvelope,
  BiMap,
  BiCodeAlt,
  BiCoffee,
} from "react-icons/bi";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Use the same function as the navbar
  const handleHireMe = () => {
    const subject = encodeURIComponent("Hire from Portfolio");
    const body = encodeURIComponent(
      "Hii Warish,\n\nI want to hire you and discuss potential opportunities."
    );
    window.location.href = `https://mail.google.com/mail/?view=cm&to=warishansari018@gmail.com&su=${subject}&body=${body}`;
  };

  return (
    <footer className="bg-black text-white py-5 position-relative overflow-hidden">
      {/* Removed problematic circles - replaced with CSS-only solution */}

      <Container className="position-relative">
        <Row className="g-4">
          {/* Contact Information */}
          <Col md={4} className="pe-lg-5">
            <h4 className="text-primary mb-4">Get In Touch</h4>
            <div className="d-flex mb-3">
              <BiEnvelope className="text-primary fs-5 me-3 mt-1" />
              <div>
                <p className="mb-0">Email</p>
                <a
                  href="mailto:warishansari018@gmail.com"
                  className="text-white text-decoration-none"
                >
                  warishansari018@gmail.com
                </a>
              </div>
            </div>
            <div className="d-flex">
              <BiMap className="text-primary fs-5 me-3 mt-1" />
              <div>
                <p className="mb-0">Location</p>
                <p className="text-white mb-0">Ranchi Jharkhand, India</p>
              </div>
            </div>

            <Button
              variant="outline-primary"
              className="mt-4 d-flex align-items-center"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Back to Top
            </Button>
          </Col>

          {/* Development Stats */}
          <Col md={4}>
            <h4 className="text-primary mb-4">Development Journey</h4>
            <div className="mb-4">
              <div className="d-flex justify-content-between mb-2">
                <span>Coding Hours</span>
                <span>5,000+</span>
              </div>
              <div className="progress bg-dark" style={{ height: "8px" }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between mb-2">
                <span>Projects Completed</span>
                <span>5+</span>
              </div>
              <div className="progress bg-dark" style={{ height: "8px" }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "55%" }}
                ></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between mb-2">
                <span>Technologies Mastered</span>
                <span>30+</span>
              </div>
              <div className="progress bg-dark" style={{ height: "8px" }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div className="d-flex align-items-center text-light mt-4">
              <BiCoffee className="text-primary me-2 fs-4" />
              <span className="small">Fueled by countless cups of coffee</span>
            </div>
          </Col>

          {/* Coding Philosophy */}
          <Col md={4}>
            <div className="border-start border-primary ps-4 h-100">
              <h4 className="text-primary mb-4">Development Philosophy</h4>
              <blockquote className="fst-italic text-light mb-4">
                "Clean code is not just efficient, it's an art form that
                communicates ideas beyond functionality."
              </blockquote>

              <div className="d-flex align-items-center mb-4">
                <BiCodeAlt className="text-primary fs-1 me-3" />
                <p className="mb-0 text-light">
                  Every line of code tells a story of problem-solving and
                  innovation
                </p>
              </div>

              {/* Use the same hire button as navbar */}
              <Button
                variant="primary"
                className="w-100 d-flex align-items-center justify-content-center mt-4 hire-btn"
                onClick={handleHireMe}
              >
                <BiEnvelope className="me-2" />
                Hire Me
              </Button>
            </div>
          </Col>
        </Row>

        {/* Copyright with Spline credit */}
        <Row className="mt-5 pt-3 border-top border-secondary">
          <Col className="text-center">
            <p className="mb-0 d-flex align-items-center justify-content-center">
              <BiCopyright className="me-2" />
              {currentYear}&nbsp;
              <span className="text-primary">Md Warish Ansari</span>.&nbsp;All
              rights reserved
            </p>
            <p className="mb-0 mt-2">
              Crafted with <BiHeart className="text-danger mx-1" /> using React,
              Bootstrap & {" "}
              <a
                href="https://app.spline.design/community/file/8cfb6748-f3dd-44dd-89fb-f46c7ab4186e"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                Spline
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
