import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DiDjango } from "react-icons/di";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiPostman,
  SiAxios,
  SiFirebase,
  SiOpenai,
  SiGithubactions,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import "./skills.css";

const Skills = () => {
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

  const skills = [
    // Frontend - Languages
    { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "#e34f26", category: "languages" },
    { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "#264de4", category: "languages" },
    { name: "JavaScript", icon: <FaJs />, level: 90, color: "#f7df1e", category: "languages" },
    { name: "TypeScript", icon: <SiTypescript />, level: 85, color: "#3178c6", category: "languages" },
    { name: "Python", icon: <FaPython />, level: 75, color: "#3776ab", category: "languages" },
    { name: "Java", icon: <FaJava />, level: 70, color: "#007396", category: "languages" },
    
    // Frameworks & Libraries
    { name: "React", icon: <FaReact />, level: 85, color: "#61dafb", category: "frameworks" },
    { name: "Next.js", icon: <SiNextdotjs />, level: 80, color: "#000000", category: "frameworks" },
    { name: "MERN Stack", icon: <FaReact />, level: 80, color: "#61dafb", category: "frameworks" },
    { name: "Bootstrap", icon: <FaBootstrap />, level: 85, color: "#7952b3", category: "frameworks" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 75, color: "#38b2ac", category: "frameworks" },

    // Backend & Databases
    { name: "Node.js", icon: <FaNodeJs />, level: 80, color: "#68a063", category: "backend" },
    { name: "Express.js", icon: <SiExpress />, level: 75, color: "#000000", category: "backend" },
    { name: "MongoDB", icon: <SiMongodb />, level: 75, color: "#47a248", category: "backend" },
    { name: "MySQL", icon: <SiMysql />, level: 70, color: "#00758f", category: "backend" },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 70, color: "#336791", category: "backend" },
    { name: "Django", icon: <DiDjango />, level: 65, color: "#092e20", category: "backend" },

    // Tools & Version Control
    { name: "Git", icon: <FaGitAlt />, level: 85, color: "#f14e32", category: "tools" },
    { name: "GitHub", icon: <FaGithub />, level: 90, color: "#181717", category: "tools" },
    { name: "Postman", icon: <SiPostman />, level: 85, color: "#ff6c37", category: "tools" },
    { name: "Axios", icon: <SiAxios />, level: 85, color: "#5a29e4", category: "tools" },
    { name: "GitHub Actions", icon: <SiGithubactions />, level: 60, color: "#2088FF", category: "tools" },

    // AI & Cloud
    { name: "OpenAI API", icon: <SiOpenai />, level: 65, color: "#000000", category: "ai" },
    { name: "Firebase Auth", icon: <SiFirebase />, level: 60, color: "#FFA611", category: "ai" },
  ];

  const categories = [
    { id: "all", label: "All Skills", icon: "bi-grid-3x3-gap" },
    { id: "languages", label: "Languages", icon: "bi-code-slash" },
    { id: "frameworks", label: "Frameworks", icon: "bi-layers" },
    { id: "backend", label: "Backend & DB", icon: "bi-server" },
    { id: "tools", label: "Tools & VCS", icon: "bi-tools" },
    { id: "ai", label: "AI & Cloud", icon: "bi-cloud" },
  ];

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  const displayedSkills = showAll ? filteredSkills : filteredSkills.slice(0, 8);

  return (
    <section
      id="skills"
      className={`skills-section py-5 ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <Container>
        <div className="section-header mb-5">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle text-center mt-4">
            Technologies I've mastered to bring ideas to life
          </p>
        </div>

        {/* Skills Category Tabs */}
        <div className="skills-tabs mb-5">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`skill-tab ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => {
                setActiveCategory(category.id);
                setShowAll(false);
              }}
            >
              <i className={`bi ${category.icon} me-2`}></i>
              {category.label}
            </button>
          ))}
        </div>

        <Row className="g-4 justify-content-center">
          {displayedSkills.map((skill, index) => (
            <Col key={skill.name} lg={3} md={4} sm={6} xs={6}>
              <div
                className="skill-card"
                style={{
                  animationDelay: `${index * 0.08}s`,
                  "--skill-color": skill.color,
                }}
              >
                <div className="skill-icon-wrapper">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-glow"></div>
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-bar-wrapper">
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: inView ? `${skill.level}%` : "0%" }}
                    ></div>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {filteredSkills.length > 8 && (
          <div className="text-center mt-5">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-show-more"
            >
              {showAll ? (
                <>
                  <FaChevronUp className="me-2" />
                  Show Less
                </>
              ) : (
                <>
                  <FaChevronDown className="me-2" />
                  Show More ({filteredSkills.length - 8} more)
                </>
              )}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Skills;
