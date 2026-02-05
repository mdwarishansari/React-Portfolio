import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "./navbar.css";

const CustomNavbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const handleHireMe = () => {
    const subject = encodeURIComponent("Hire from Portfolio");
    const body = encodeURIComponent(
      "Hii Warish,\n\nI want to hire you and discuss potential opportunities.",
    );
    window.location.href = `https://mail.google.com/mail/?view=cm&to=warishansari018@gmail.com&su=${subject}&body=${body}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sectionIds = [
        "hero",
        "about",
        "skills",
        "projects",
        "certifications",
        "experience",
        "social",
      ];
      
      const scrollY = window.scrollY + 200;
      let currentSection = sectionIds[0];

      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollY) {
          currentSection = id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/" className="brand-logo">
          <i className="bi bi-laptop me-2"></i>
          Portfolio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto align-items-center">
            {[
              { id: "hero", icon: "bi-house-door", label: "Home" },
              { id: "about", icon: "bi-person", label: "About" },
              { id: "skills", icon: "bi-tools", label: "Skills" },
              { id: "projects", icon: "bi-rocket-takeoff", label: "Projects" },
              { id: "certifications", icon: "bi-award", label: "Certifications" },
              { id: "experience", icon: "bi-briefcase", label: "Experience" },
              { id: "social", icon: "bi-person-plus", label: "Social" },
            ].map((item) => (
              <Nav.Link
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link-custom ${
                  activeSection.toLowerCase() === item.id ? "active" : ""
                }`}
              >
                <i className={`bi ${item.icon} me-2`}></i>
                {item.label}
              </Nav.Link>
            ))}
          </Nav>

          <Button variant="outline-primary" className="ms-lg-3 mt-3 mt-lg-0" onClick={handleHireMe}>
            <i className="bi bi-envelope-arrow-up me-2"></i>
            Hire Me
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
