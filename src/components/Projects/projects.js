// src/components/Projects.js
import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
  FaRegCalendarAlt,
  FaStar,
} from "react-icons/fa";
import "./projects.css";

// imgs
import first_project from "./cover_img/first_project.png";
import boot_port from "./cover_img/boot_port.png";
import moviesvibe from "./cover_img/moviesvibe.png";
import portfolio from "./cover_img/portfolio.png";
import nexusshop from "./cover_img/nexusshop.png";
import shecanintern from "./cover_img/shecanintern.png";
import travelease from "./cover_img/travelease.png";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [inView, setInView] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleProject = (projectId) => {
    setExpandedProject((prev) => (prev === projectId ? null : projectId));
  };

  const projects = [
    {
      id: 7,
      title: "TravelEase",
      subtitle: "Travel Booking Platform",
      description: "A Django-based travel booking platform where users can sign up, log in, and manage their travel bookings.",
      longDescription: "Developed as part of the TravelEase Internship Assignment. Features user authentication, booking & cancellation system, tracking of bookings, and responsive UI with Bootstrap. Integrated with PostgreSQL/MongoDB.",
      skills: ["Django", "Python", "Bootstrap", "PostgreSQL", "MongoDB"],
      image: travelease,
      projectLink: "https://travelease-p0ov.onrender.com/",
      date: "August 2025",
      category: "minor",
      emoji: "✈️",
    },
    {
      id: 6,
      title: "NexusShop",
      subtitle: "E-commerce Platform",
      description: "A full-featured MERN-stack E-commerce web app with product management, cart, and orders.",
      longDescription: "Built with MERN stack featuring dynamic product listings, role-based access control (Admin | Seller | Customer), JWT authentication, real-time inventory updates, payment gateway integration, and Tailwind CSS styling.",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JWT"],
      image: nexusshop,
      projectLink: "https://nexusshop.onrender.com/",
      githubLink: "https://github.com/mdwarishansari/CodeAlpha_Shopping_Web.git",
      date: "July 2025",
      category: "major",
      emoji: "🛒",
    },
    {
      id: 5,
      title: "She Can Intern",
      subtitle: "Fundraising Portal",
      description: "Full-stack MERN application for referral-based fundraising internship selection.",
      longDescription: "Features unique referral codes, earnings tracking, leaderboard rankings, admin panel with CRUD, JWT authentication. Built with MERN stack and Tailwind CSS with AOS animations.",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      image: shecanintern,
      projectLink: "https://she-can-intern-proj.onrender.com/",
      githubLink: "https://github.com/mdwarishansari/She_Can_Intern_SelectionProj.git",
      date: "August 2025",
      category: "minor",
      emoji: "🎯",
    },
    {
      id: 4,
      title: "MoviesVibe",
      subtitle: "Movie Discovery App",
      description: "Interactive React web app with OMDB API integration for movie data display.",
      longDescription: "Deepened understanding of React fundamentals: state management, async API calls, component rendering, and responsive design principles.",
      skills: ["Django", "React", "Python", "API Integration"],
      image: moviesvibe,
      projectLink: "https://moviesvibe-lt7u.onrender.com/",
      githubLink: "https://github.com/mdwarishansari/MoviesVibe",
      date: "February 2025",
      category: "major",
      emoji: "🎬",
    },
    {
      id: 3,
      title: "React-Portfolio",
      subtitle: "Developer Portfolio",
      description: "Modern developer website showcasing skills, projects, and experience.",
      longDescription: "Journey into component-driven development with React hooks, conditional rendering, and module-based styling.",
      skills: ["React", "React-Bootstrap", "Responsive Design"],
      image: portfolio,
      projectLink: "https://portfolio-m9f0.onrender.com/",
      githubLink: "https://github.com/mdwarishansari/React-Portfolio",
      date: "May 2025",
      category: "minor",
      emoji: "🚀",
    },
    {
      id: 2,
      title: "Portfolio-Bootstrap",
      subtitle: "Static Portfolio",
      description: "Sleek, mobile-responsive developer portfolio with HTML, CSS, and Bootstrap 5.",
      longDescription: "Demonstrates ability to craft clean UI and responsive layouts without JavaScript.",
      skills: ["HTML5", "CSS3", "Bootstrap5"],
      image: boot_port,
      projectLink: "https://mdwarishansari.github.io/Portfolio_Bootstrap/",
      githubLink: "https://github.com/mdwarishansari/Portfolio_Bootstrap.git",
      date: "November 2024",
      category: "minor",
      emoji: "🎨",
    },
    {
      id: 1,
      title: "Course Website",
      subtitle: "Course Selling Interface",
      description: "Clean and responsive multi-page course-selling website.",
      longDescription: "Designed for smooth user experience for students and course providers.",
      skills: ["HTML5", "CSS3", "GitHub"],
      image: first_project,
      projectLink: "https://mdwarishansari.github.io/FirstProject/",
      githubLink: "https://github.com/mdwarishansari/FirstProject.git",
      date: "April 2024",
      category: "minor",
      emoji: "📘",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: "bi-grid-3x3-gap" },
    { id: "major", label: "Major Projects", icon: "bi-star-fill" },
    { id: "minor", label: "Minor Projects", icon: "bi-collection" },
  ];

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);
  
  const filteredProjects = activeCategory === "all" 
    ? sortedProjects 
    : sortedProjects.filter(project => project.category === activeCategory);
  
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section
      id="projects"
      className={`projects-section py-5 ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <Container>
        <div className="section-header mb-5">
          <h2 className="section-title">Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle text-center mt-4">
            My latest creations. Click on any project to explore details.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="project-tabs mb-5">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`project-tab ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => { setActiveCategory(category.id); setShowAll(false); setExpandedProject(null); }}
            >
              <i className={`bi ${category.icon} me-2`}></i>
              {category.label}
            </button>
          ))}
        </div>

        <Row className="g-4 justify-content-center">
          {displayedProjects.map((project, index) => (
            <Col key={project.id} lg={6} className="project-col">
              <div
                className={`project-card ${expandedProject === project.id ? "expanded" : ""} ${project.category === "major" ? "major-project" : ""}`}
                onClick={() => toggleProject(project.id)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Glow Effect for Major */}
                {project.category === "major" && <div className="major-glow"></div>}
                
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <span className="project-emoji">{project.emoji}</span>
                  </div>
                  <div className="project-date-badge">
                    <FaRegCalendarAlt className="me-1" /> {project.date}
                  </div>
                  {project.category === "major" && (
                    <div className="major-badge">
                      <FaStar className="me-1" /> Featured
                    </div>
                  )}
                </div>

                <div className="project-info">
                  <div className="project-header">
                    <div>
                      <h3 className="project-title">{project.emoji} {project.title}</h3>
                      <p className="project-subtitle">{project.subtitle}</p>
                    </div>
                    <button className="expand-toggle">
                      {expandedProject === project.id ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.skills.slice(0, 4).map((skill, i) => (
                      <span key={i} className="tech-tag">{skill}</span>
                    ))}
                    {project.skills.length > 4 && (
                      <span className="tech-tag more">+{project.skills.length - 4}</span>
                    )}
                  </div>

                  <div className={`project-expanded ${expandedProject === project.id ? "show" : ""}`}>
                    <p className="project-long-desc">{project.longDescription}</p>
                    
                    <div className="all-tech">
                      <h5>All Technologies</h5>
                      <div className="tech-list">
                        {project.skills.map((skill, i) => (
                          <span key={i} className="tech-chip">{skill}</span>
                        ))}
                      </div>
                    </div>

                    <div className="project-actions">
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                          className="action-btn github-btn" onClick={(e) => e.stopPropagation()}>
                          <FaGithub /> Code
                        </a>
                      )}
                      {project.projectLink && (
                        <a href={project.projectLink} target="_blank" rel="noopener noreferrer"
                          className="action-btn live-btn" onClick={(e) => e.stopPropagation()}>
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {filteredProjects.length > 4 && (
          <div className="text-center mt-5">
            <button onClick={() => setShowAll(!showAll)} className="btn-show-more">
              {showAll ? (
                <><FaChevronUp className="me-2" /> Show Less</>
              ) : (
                <><FaChevronDown className="me-2" /> Show More ({filteredProjects.length - 4} more)</>
              )}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;
