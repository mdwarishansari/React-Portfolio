import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./about.css";
import profileImage from "./img/dp.jpeg"; // Import your profile image

const About = () => {
  useEffect(() => {
    // Initialize animation effects
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".about-content, .about-photo-container")
      .forEach((el) => {
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="about-photo-col">
            <div className="about-photo-container">
              <div className="photo-frame">
                <div className="photo-img">
                  <div
                    className="profile-image"
                    style={{ backgroundImage: `url(${profileImage})` }}
                  ></div>
                  <div className="decoration-circle blue"></div>
                  <div className="decoration-circle purple"></div>
                  <div className="decoration-ring"></div>
                  <div className="tech-dot dot1"></div>
                  <div className="tech-dot dot2"></div>
                  <div className="tech-dot dot3"></div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} className="about-content">
            <div className="content-wrapper">
              <div className="greeting-text">Hello!</div>
              <h1 className="name-title">
                I am <span className="highlight">Mohammad Warish Ansari</span>
              </h1>

              <p className="about-text">
                I'm a B.Tech Computer Science & Engineering student who loves
                solving problems through code. I specialize in creating clean,
                responsive websites and continuously explore emerging tech like
                AI, cybersecurity, and ethical hacking. With multiple
                certifications, self-initiated projects, and an eagerness to
                grow, I’m actively building my path in the tech world.
              </p>

              <div className="cta-container">
                <Button
                  href="https://drive.google.com/drive/folders/1oAuFxm0ZOHpSErySDUs6sjHubDo0Wxi-?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-resume-btn"
                >
                  <i className="bi bi-file-earmark-pdf me-2"></i>
                  View Resume
                </Button>
                <Button variant="outline-primary" href="#projects">
                  <i className="bi bi-code-slash me-2"></i>
                  See What I've Built
                </Button>
              </div>

              <div className="experience-container">
                <div className="experience-item">
                  <div className="exp-icon">
                    <i className="bi bi-code-square"></i>
                  </div>
                  <div className="exp-details">
                    <div className="exp-count">5+</div>
                    <div className="exp-title">Projects</div>
                  </div>
                </div>

                <div className="experience-item">
                  <div className="exp-icon">
                    <i className="bi bi-lightning-charge"></i>
                  </div>
                  <div className="exp-details">
                    <div className="exp-count">2+</div>
                    <div className="exp-title">Internships</div>
                  </div>
                </div>

                <div className="experience-item">
                  <div className="exp-icon">
                    <i className="bi bi-award"></i>
                  </div>
                  <div className="exp-details">
                    <div className="exp-count">20+</div>
                    <div className="exp-title">Certifications</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
