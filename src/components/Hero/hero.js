import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import "./hero.css";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  const [showRoleAnimation, setShowRoleAnimation] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const handleHireMe = () => {
    const subject = encodeURIComponent("Hire from Portfolio");
    const body = encodeURIComponent(
      "Hii Warish,\n\nI want to hire you and discuss potential opportunities."
    );
    window.location.href = `https://mail.google.com/mail/?view=cm&to=warishansari018@gmail.com&su=${subject}&body=${body}`;
  };

  useEffect(() => {
    if (showRoleAnimation) {
      setCursorVisible(false);
      const timer = setTimeout(() => setCursorVisible(true), 300);
      return () => clearTimeout(timer);
    }
  }, [showRoleAnimation]);

  return (
    <section id="hero" className="py-5">
      <Container>
        <Row className="align-items-center">
          {/* Text Content Column */}
          <Col lg={6} className="hero-text mb-5 mb-lg-0">
            <h2 className="text-primary mb-0">Hello!</h2>
            <h1 className="display-3 fw-bold text-white mt-0">
              <TypeAnimation
                sequence={[
                  "I",
                  500,
                  "I am",
                  1000,
                  () => setShowRoleAnimation(true),
                ]}
                wrapper="span"
                speed={30}
                style={{ display: "inline-block", color: "#ffffff" }}
                cursor={false}
                repeat={0}
              />
              {showRoleAnimation ? (
                <>
                  <br />
                  <TypeAnimation
                    sequence={[
                      "Warish",
                      1500,
                      "Web Developer",
                      1500,
                      "CSE Student",
                      1500,
                      "Full Stack Learner",
                      1500,
                      "AI & Cybersecurity Enthusiast",
                      1500,
                      "Mohammad Warish Ansari",
                    ]}
                    wrapper="span"
                    speed={30}
                    deletionSpeed={70}
                    style={{
                      display: "inline-block",
                      color: "#0d6efd",
                      position: "relative",
                      fontWeight: "800",
                    }}
                    repeat={0}
                    cursor={cursorVisible}
                  />
                </>
              ) : (
                <span className="blinking-cursor" style={{ color: "#0d6efd" }}>|</span>
              )}
            </h1>
            <p className="lead text-light mb-4">
              As a CSE student with a passion for tech, I build clean,
              responsive websites and explore cutting-edge fields like AI and
              cybersecurity. I'm always learning, always building—and ready to
              take on the next challenge.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button
                variant="primary"
                size="lg"
                className="px-4 py-2 hire-btn"
                onClick={handleHireMe}
              >
                <i className="bi bi-envelope-arrow-up me-2"></i>
                Hire Me
              </Button>
              <Button
                variant="outline-primary"
                size="lg"
                className="px-4 py-2"
                href="#projects"
              >
                <i className="bi bi-rocket-takeoff me-2"></i>
                See What I’ve Built
              </Button>
            </div>
          </Col>

          {/* Spline Column */}
          <Col lg={6} className="spline-col">
            <div className="spline-container">
              <Spline
                scene="https://prod.spline.design/9jQjS9lHCqJMjgSL/scene.splinecode"
                className="spline-scene"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
