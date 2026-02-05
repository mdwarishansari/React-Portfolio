// src/components/Certifications.js
import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt,
  FaPlus,
  FaMinus,
  FaStar,
  FaCode,
  FaDesktop,
  FaLayerGroup,
} from "react-icons/fa";
import "./certifications.css";

const Certifications = () => {
  const [expandedCert, setExpandedCert] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCert, setCurrentCert] = useState(null);
  const [inView, setInView] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("highlighted");
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

  const toggleCert = (index) => {
    if (expandedCert === index) {
      setExpandedCert(null);
    } else {
      setExpandedCert(index);
    }
  };

  const openModal = (cert) => {
    setCurrentCert(cert);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Categories for certifications
  const categories = [
    { id: "highlighted", label: "Highlighted", icon: <FaStar /> },
    { id: "programming", label: "Programming", icon: <FaCode /> },
    { id: "computer", label: "Computer Skills", icon: <FaDesktop /> },
    { id: "all", label: "All Certificates", icon: <FaLayerGroup /> },
  ];

  // Certifications data with categories
  const certifications = [
    // HIGHLIGHTED - Oracle & Forage certifications
    {
      id: 42,
      name: "MERN Stack Internship Certificate",
      authority: "Soft Nexis Technology",
      date: "January 2025",
      description: "Successfully completed an internship at Soft Nexis Technology in the MERN Stack domain.",
      thumbnail: "https://i.postimg.cc/525LKyTw/Soft-Nexis-Internship-page-0001.jpg",
      fullImage: "https://i.postimg.cc/525LKyTw/Soft-Nexis-Internship-page-0001.jpg",
      verifyUrl: "https://www.softnexis.com/",
      category: "highlighted",
      skills: ["MERN Stack Development", "MongoDB", "Express.js", "React.js", "Node.js"],
    },
    {
      id: 41,
      name: "Software Engineering Job Simulation",
      authority: "Forage",
      date: "October 2025",
      description: "Completed the Forage Software Engineering Job Simulation with real-world developer tasks.",
      thumbnail: "https://i.postimg.cc/cHZrQkcJ/Forage-Software-Engineering-Job-Simulation-page-0001.jpg",
      fullImage: "https://i.postimg.cc/cHZrQkcJ/Forage-Software-Engineering-Job-Simulation-page-0001.jpg",
      verifyUrl: "https://www.theforage.com",
      category: "highlighted",
      skills: ["Software Engineering", "Object-Oriented Programming", "Debugging", "System Design"],
    },
    {
      id: 36,
      name: "Oracle Cloud Infrastructure 2025 Certified Architect Associate",
      authority: "Oracle",
      date: "September 2025",
      description: "Proficiency in designing secure, scalable, and cost-optimized OCI solutions.",
      thumbnail: "https://i.postimg.cc/90ymCQBK/OCI-Archietecture-Batch.png",
      fullImage: "https://i.postimg.cc/WpZbM5P8/OCI-Archietecture-page-0001.png",
      verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=5D8119B101098BF17FEB70CC28F57506D081F851C0D27C61103AD71B200B433A",
      category: "highlighted",
      skills: ["Oracle Cloud Infrastructure", "Cloud Architecture", "Security", "IAM"],
    },
    {
      id: 35,
      name: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
      authority: "Oracle",
      date: "September 2025",
      description: "Advanced DevOps practices on Oracle Cloud including CI/CD automation.",
      thumbnail: "https://i.postimg.cc/J0tW4CXN/Oracle-Dev-Ops-Professional-Batch.png",
      fullImage: "https://i.postimg.cc/DfYTpmVB/Oracle-Dev-Ops-Professional.png",
      verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=0CB6CA864152BF6108440503359F41C2BE7188C9828CCB842BA8C18CAC74B69F",
      category: "highlighted",
      skills: ["Oracle Cloud Infrastructure", "DevOps", "CI/CD", "Kubernetes"],
    },
    {
      id: 34,
      name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      authority: "Oracle",
      date: "September 2025",
      description: "Advanced proficiency in building and deploying Generative AI solutions on OCI.",
      thumbnail: "https://i.postimg.cc/6Q4nk8Tw/Oracle-Generative-AI-Professional-Batch.png",
      fullImage: "https://i.postimg.cc/PxGYTd8D/Oracle-Generative-AI-Professional-page-0001.png",
      verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=1A019E4A0DF703457ECA93DC6E930058F97027BDD22AE45D55B87CEC50BC9E3D",
      category: "highlighted",
      skills: ["Oracle Cloud Infrastructure", "Generative AI", "Prompt Engineering", "Model Deployment"],
    },
    {
      id: 33,
      name: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      authority: "Oracle",
      date: "September 2025",
      description: "Advanced proficiency in data science and machine learning on OCI.",
      thumbnail: "https://i.postimg.cc/cLPpK8Mv/Oracle-Data-Science-batch-copy.png",
      fullImage: "https://i.postimg.cc/zfW9TX00/Oracle-data-science-professional-page-0001-copy.png",
      verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=0CB6CA864152BF6108440503359F41C26E0912BFBA12851BAA144AF73FD1199A",
      category: "highlighted",
      skills: ["Oracle Cloud Infrastructure", "Data Science", "Machine Learning", "Model Deployment"],
    },
    {
      id: 32,
      name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      authority: "Oracle",
      date: "August 2025",
      description: "Foundational knowledge of Oracle Cloud Infrastructure services.",
      thumbnail: "https://i.postimg.cc/XY286NND/Oracle-Cloud-Infrastructure-2025.png",
      fullImage: "https://i.postimg.cc/wBZQ3WmX/Oracle-Cloud-Infrastructure-2025-IMAGE.png",
      verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=43BFB0289215229E1FE3388733C77596707BCAB3704848035660F9F6A994C5C8",
      category: "highlighted",
      skills: ["Oracle Cloud Infrastructure", "Compute", "Storage", "Networking", "IAM"],
    },
    {
      id: 31,
      name: "Oracle Certified Foundations Associate – Data Platform Foundations (2025)",
      authority: "Oracle",
      date: "August 2025",
      description: "Foundational knowledge of Oracle Data Platform and modern database services.",
      thumbnail: "https://i.postimg.cc/3wTNdGBb/Oracle-Data-Platform-2025-Batch.png",
      fullImage: "https://i.postimg.cc/G2XWn0tx/Oracle-Data-Platform-2025-page-0001.jpg",
      verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=0CB6CA864152BF6108440503359F41C21C8CC578C9935A7AEB8B642F9DF3B61C",
      category: "highlighted",
      skills: ["Oracle Data Platform", "Oracle Cloud Infrastructure", "Database Services"],
    },
    {
      id: 25,
      name: "Deloitte Australia Technology Virtual Internship",
      authority: "Deloitte Australia",
      date: "July 2025",
      description: "Virtual Internship Program simulating real-world client scenarios.",
      thumbnail: "https://i.postimg.cc/3wZ117nS/Deloitte-Virtual-Internship-page-0001.jpg",
      fullImage: "https://i.postimg.cc/3wZ117nS/Deloitte-Virtual-Internship-page-0001.jpg",
      verifyUrl: "https://www.theforage.com/virtual-internships/prototype/B4rT7WznWzqL9BfF4/Deloitte-Australia-Technology",
      category: "highlighted",
      skills: ["Data Standardization", "Dashboard Proposal Writing", "Technology Consulting"],
    },

    // PROGRAMMING - All programming related certifications
    {
      id: 40,
      name: "Software Engineer Intern Role Certification",
      authority: "HackerRank",
      date: "September 2025",
      description: "Verifies fundamental technical skills and coding proficiency.",
      thumbnail: "https://i.postimg.cc/28W4sw5r/software-engineer-intern-certificate-page-0001.jpg",
      fullImage: "https://i.postimg.cc/28W4sw5r/software-engineer-intern-certificate-page-0001.jpg",
      verifyUrl: "https://www.hackerrank.com/certificates/8a277fbcbfeo",
      category: "programming",
      skills: ["Software Engineering", "Technical Skills", "Problem Solving", "Coding Practice"],
    },
    {
      id: 39,
      name: "Software Engineer Role Certification",
      authority: "HackerRank",
      date: "September 2025",
      description: "End-to-end expertise in Data Structures, Algorithms, and System Design.",
      thumbnail: "https://i.postimg.cc/SN9WBrK0/software-engineer-certificate-page-0001.jpg",
      fullImage: "https://i.postimg.cc/SN9WBrK0/software-engineer-certificate-page-0001.jpg",
      verifyUrl: "https://www.hackerrank.com/certificates/b9f974b5601c",
      category: "programming",
      skills: ["Software Engineering", "Algorithms", "Data Structures", "System Design"],
    },
    {
      id: 38,
      name: "Java (Basic) Skill Certification",
      authority: "HackerRank",
      date: "September 2025",
      description: "Foundational knowledge in OOP principles and Java syntax.",
      thumbnail: "https://i.postimg.cc/J4Xbfqhm/java-basic-certificate-page-0001.jpg",
      fullImage: "https://i.postimg.cc/J4Xbfqhm/java-basic-certificate-page-0001.jpg",
      verifyUrl: "https://www.hackerrank.com/certificates/90d2c55da3a1",
      category: "programming",
      skills: ["Java", "Object-Oriented Programming (OOP)", "Programming Fundamentals"],
    },
    {
      id: 37,
      name: "JavaScript (Intermediate) Skill Certification",
      authority: "HackerRank",
      date: "September 2025",
      description: "Proficiency in closures, prototypes, asynchronous programming, and ES6+.",
      thumbnail: "https://i.postimg.cc/SN9WBrKh/javascript-intermediate-certificate-page-0001.jpg",
      fullImage: "https://i.postimg.cc/SN9WBrKh/javascript-intermediate-certificate-page-0001.jpg",
      verifyUrl: "https://www.hackerrank.com/certificates/21f78682bfd6",
      category: "programming",
      skills: ["JavaScript", "Asynchronous Programming", "Web Development", "ES6"],
    },
    {
      id: 30,
      name: "Full Stack Development Internship",
      authority: "CodeAlpha",
      date: "August 2025",
      description: "Practical experience in MERN Stack and Django.",
      thumbnail: "https://i.postimg.cc/BQ9z2Mm7/Code-Alpha-Certificate-page-0001.jpg",
      fullImage: "https://i.postimg.cc/BQ9z2Mm7/Code-Alpha-Certificate-page-0001.jpg",
      verifyUrl: "http://www.codealpha.tech",
      category: "programming",
      skills: ["Full Stack Development", "MERN Stack", "Django", "Problem Solving"],
    },
    {
      id: 29,
      name: "Creating Responsive Web Pages using Bootstrap 4",
      authority: "Infosys Springboard",
      date: "August 2025",
      description: "In-depth understanding of modern frontend development with Bootstrap.",
      thumbnail: "https://i.postimg.cc/8kw4LvMK/infosys-bootstrap-page-0001.jpg",
      fullImage: "https://i.postimg.cc/8kw4LvMK/infosys-bootstrap-page-0001.jpg",
      verifyUrl: "https://verify.onwingspan.com",
      category: "programming",
      skills: ["Bootstrap 4", "Responsive Design", "Frontend Development", "UI/UX Best Practices"],
    },
    {
      id: 28,
      name: "Web Development Basics",
      authority: "IBM SkillsBuild",
      date: "July 2025",
      description: "HTML, CSS, responsive design, and web accessibility principles.",
      thumbnail: "https://i.postimg.cc/tCZqWv6Y/Completion-Certificate-Web-Dev-Basics-Skills-Build-page-0001.jpg",
      fullImage: "https://i.postimg.cc/tCZqWv6Y/Completion-Certificate-Web-Dev-Basics-Skills-Build-page-0001.jpg",
      verifyUrl: "https://skillsbuild.org/",
      category: "programming",
      skills: ["HTML", "CSS", "Responsive Design", "Web Accessibility"],
    },
    {
      id: 27,
      name: "Learn Programming with Java",
      authority: "IBM SkillsBuild",
      date: "July 2025",
      description: "Core Java concepts, OOP principles, and backend problem-solving.",
      thumbnail: "https://i.postimg.cc/BZwZ8fXr/Completion-Certificate-Skills-Build-page-0001-Java.jpg",
      fullImage: "https://i.postimg.cc/BZwZ8fXr/Completion-Certificate-Skills-Build-page-0001-Java.jpg",
      verifyUrl: "https://skillsbuild.org/",
      category: "programming",
      skills: ["Java Programming", "Object-Oriented Programming", "Problem Solving"],
    },
    {
      id: 22,
      name: "Data Structures and Algorithms Using Java",
      authority: "Infosys Springboard",
      date: "July 2025",
      description: "Enhanced problem-solving skills with arrays, linked lists, stacks, queues, trees.",
      thumbnail: "https://i.postimg.cc/Wzr89fG4/Data-Structures-and-Algorithms-Using-Java-An-Interactive-Way-page-0001.jpg",
      fullImage: "https://i.postimg.cc/Wzr89fG4/Data-Structures-and-Algorithms-Using-Java-An-Interactive-Way-page-0001.jpg",
      verifyUrl: "https://verify.onwingspan.com/",
      category: "programming",
      skills: ["Data Structures", "Algorithms", "Java Programming", "Problem Solving"],
    },
    {
      id: 21,
      name: "Learning Full Stack Development",
      authority: "Infosys Springboard",
      date: "July 2025",
      description: "Frontend & backend development, API integration, and deployment workflows.",
      thumbnail: "https://i.postimg.cc/JnSK5WBg/Learning-Full-Stack-Development-page-0001.jpg",
      fullImage: "https://i.postimg.cc/JnSK5WBg/Learning-Full-Stack-Development-page-0001.jpg",
      verifyUrl: "https://verify.onwingspan.com/",
      category: "programming",
      skills: ["Full Stack Development", "Frontend Development", "Backend Development"],
    },
    {
      id: 14,
      name: "Python 101 for Data Science",
      authority: "Cognitive Class (IBM)",
      date: "July 2025",
      description: "Foundational knowledge of Python programming for data science.",
      thumbnail: "https://i.postimg.cc/cHvX3J6w/IBM-PY0101-EN-Certificate-Cognitive-Class-page-0001.jpg",
      fullImage: "https://i.postimg.cc/cHvX3J6w/IBM-PY0101-EN-Certificate-Cognitive-Class-page-0001.jpg",
      verifyUrl: "https://courses.cognitiveclass.ai/certificates/ee529c26a0cd43ebbf39c812f7fd6352",
      category: "programming",
      skills: ["Python Programming Basics", "Data Structures in Python", "Data Science Fundamentals"],
    },
    {
      id: 13,
      name: "Full Stack Web Development With MERN STACK & GenAI 2025",
      authority: "Udemy",
      date: "July 2025",
      description: "89.5-hour hands-on course on MERN Stack and GenAI.",
      thumbnail: "https://i.postimg.cc/qvLgqCDk/MERN-STACK-UDEMY-CERTIFICATE.jpg",
      fullImage: "https://i.postimg.cc/qvLgqCDk/MERN-STACK-UDEMY-CERTIFICATE.jpg",
      verifyUrl: "https://ude.my/UC-43346e61-36dd-4374-a30d-d97f8855ebe1",
      category: "programming",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "GenAI Integrations"],
    },
    {
      id: 12,
      name: "Full Stack Web Development with Python",
      authority: "SHASHI INFOTECH RANCHI",
      date: "March 2025",
      description: "Hands-on internship in Full Stack Web Development using Python.",
      thumbnail: "https://i.postimg.cc/fWGsQ52w/INTERNSHIP-FULL-STACK-WITH-PYTHON-page-0001.jpg",
      fullImage: "https://i.postimg.cc/fWGsQ52w/INTERNSHIP-FULL-STACK-WITH-PYTHON-page-0001.jpg",
      verifyUrl: "https://i.postimg.cc/fWGsQ52w/INTERNSHIP-FULL-STACK-WITH-PYTHON-page-0001.jpg",
      category: "programming",
      skills: ["HTML, CSS, JavaScript", "Python for Web Development", "Frontend and Backend Integration"],
    },
    {
      id: 10,
      name: "Full Stack Web Development",
      authority: "CODEC TECHNOLOGIES",
      date: "May 2025",
      description: "Comprehensive training covering frontend and backend technologies.",
      thumbnail: "https://i.postimg.cc/d113bDSz/MD-WARISH-ANSARI-Certificate-page-0001.jpg",
      fullImage: "https://i.postimg.cc/d113bDSz/MD-WARISH-ANSARI-Certificate-page-0001.jpg",
      verifyUrl: "https://codectechnologies.in/",
      category: "programming",
      skills: ["HTML, CSS & JavaScript", "Frontend Frameworks", "Backend with Node.js or PHP"],
    },
    {
      id: 6,
      name: "Web Development with PHP",
      authority: "STP COMPUTER EDUCATION",
      date: "August 2024",
      description: "Build dynamic websites using HTML, CSS, JavaScript, and PHP.",
      thumbnail: "https://i.postimg.cc/k4B8xj96/STP-WEB-DEVELOPMENT-COURSE-CERTIFICATE-page-0001.jpg",
      fullImage: "https://i.postimg.cc/k4B8xj96/STP-WEB-DEVELOPMENT-COURSE-CERTIFICATE-page-0001.jpg",
      verifyUrl: "https://www.stpcomputereducation.com/certificate-verification",
      category: "programming",
      skills: ["HTML & CSS", "JavaScript Basics", "PHP Programming", "MySQL Database Integration"],
    },

    // COMPUTER SKILLS - STP and UIDAI certificates
    {
      id: 7,
      name: "Enrolment & Update Process",
      authority: "UIDAI",
      date: "April 2022",
      description: "Training on Aadhaar Enrolment and Update Process.",
      thumbnail: "https://i.postimg.cc/Jh7jhr2Q/UIDAI-CERTIFICATE-page-0001.jpg",
      fullImage: "https://i.postimg.cc/Jh7jhr2Q/UIDAI-CERTIFICATE-page-0001.jpg",
      verifyUrl: "https://uidai.gov.in/",
      category: "computer",
      skills: ["Aadhaar Enrolment Procedure", "Update Process Handling", "Data Verification Protocols"],
    },
    {
      id: 5,
      name: "Advanced Diploma in Computer Applications (ADCA)",
      authority: "STP COMPUTER EDUCATION",
      date: "June 2025",
      description: "Advanced computer applications, office tools, and web basics.",
      thumbnail: "https://i.postimg.cc/vZXLdxZz/STP-ADCA-COURSE-CERTIFICATE-page-0001.jpg",
      fullImage: "https://i.postimg.cc/vZXLdxZz/STP-ADCA-COURSE-CERTIFICATE-page-0001.jpg",
      verifyUrl: "https://www.stpcomputereducation.com/certificate-verification",
      category: "computer",
      skills: ["Advanced Microsoft Office", "Tally with GST", "Database Management"],
    },
    {
      id: 4,
      name: "Graphic Design Course",
      authority: "STP COMPUTER EDUCATION",
      date: "November 2024",
      description: "Visual storytelling skills using industry-standard design tools.",
      thumbnail: "https://i.postimg.cc/DzCL4VV3/STP-GRAPHIC-DESIGN-COURSE-CERTIFICATE-page-0001.jpg",
      fullImage: "https://i.postimg.cc/DzCL4VV3/STP-GRAPHIC-DESIGN-COURSE-CERTIFICATE-page-0001.jpg",
      verifyUrl: "https://www.stpcomputereducation.com/certificate-verification",
      category: "computer",
      skills: ["Graphic Design Principles", "Adobe Photoshop Basics", "Adobe Illustrator Basics"],
    },
    {
      id: 3,
      name: "Diploma in Computer Applications (DCA)",
      authority: "STP COMPUTER EDUCATION",
      date: "April 2024",
      description: "Core computer applications and office tools.",
      thumbnail: "https://i.postimg.cc/HkgQf40R/STP-DCA-COURSE-CERTIFICATE-page-0001.jpg",
      fullImage: "https://i.postimg.cc/HkgQf40R/STP-DCA-COURSE-CERTIFICATE-page-0001.jpg",
      verifyUrl: "https://www.stpcomputereducation.com/certificate-verification",
      category: "computer",
      skills: ["Basic Computer Fundamentals", "Microsoft Office", "Internet and Email Handling"],
    },
    {
      id: 2,
      name: "Adobe Photoshop Course",
      authority: "STP COMPUTER EDUCATION",
      date: "August 2023",
      description: "Image editing, retouching, and graphic designing techniques.",
      thumbnail: "https://i.postimg.cc/mDJ9VQ2d/STPPHOTOSHOPCOURSECERTIFICATE-page-0001.jpg",
      fullImage: "https://i.postimg.cc/mDJ9VQ2d/STPPHOTOSHOPCOURSECERTIFICATE-page-0001.jpg",
      verifyUrl: "https://www.stpcomputereducation.com/certificate-verification",
      category: "computer",
      skills: ["Adobe Photoshop Interface", "Image Editing and Retouching", "Photo Manipulation"],
    },
    {
      id: 1,
      name: "Basic Computer Course",
      authority: "STP COMPUTER EDUCATION",
      date: "October 2023",
      description: "Foundational computer operations, file management, and office tools.",
      thumbnail: "https://i.postimg.cc/tCP3Sm6F/STP-BASIC-COMPUTER-COURSE-CERTIFICATE-page-0001.jpg",
      fullImage: "https://i.postimg.cc/tCP3Sm6F/STP-BASIC-COMPUTER-COURSE-CERTIFICATE-page-0001.jpg",
      verifyUrl: "https://www.stpcomputereducation.com/certificate-verification",
      category: "computer",
      skills: ["Basic Computer Operations", "Microsoft Office", "Windows OS Fundamentals"],
    },
    {
      id: 8,
      name: "2D & 3D Modelling using AutoCAD",
      authority: "RKDF University Ranchi",
      date: "October 2023",
      description: "5-day workshop covering 2D & 3D design using AutoCAD.",
      thumbnail: "https://i.postimg.cc/L4JBfs6C/RKDF-AUTOCAD-CERTIFICATE-page-0001.jpg",
      fullImage: "https://i.postimg.cc/L4JBfs6C/RKDF-AUTOCAD-CERTIFICATE-page-0001.jpg",
      verifyUrl: "https://rkdfuniversity.org/",
      category: "computer",
      skills: ["2D Drawing Techniques in AutoCAD", "3D Modelling Basics", "Layer and Dimension Tools"],
    },
  ];

  // Sort certifications in descending order by ID
  const sortedCerts = [...certifications].sort((a, b) => b.id - a.id);
  
  // Filter based on active category
  const filteredCerts = activeCategory === "all" 
    ? sortedCerts 
    : sortedCerts.filter(cert => cert.category === activeCategory);
  
  // Display only 6 certificates initially
  const displayedCerts = showAll ? filteredCerts : filteredCerts.slice(0, 6);

  return (
    <section
      id="certifications"
      className={`certifications-section py-5 ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <Container>
        <div className="section-header mb-5">
          <h2 className="section-title">Certifications</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle text-center text-light mt-4">
            My professional credentials. Click to view details.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="cert-tabs mb-5">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`cert-tab ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => { setActiveCategory(category.id); setShowAll(false); setExpandedCert(null); }}
            >
              <span className="tab-icon">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        <Row className="g-4 justify-content-center">
          {displayedCerts.map((cert, index) => (
            <Col key={cert.id} lg={6} className="cert-col">
              <div
                className={`cert-card ${expandedCert === index ? "expanded" : ""} ${cert.category === "highlighted" ? "highlighted-cert" : ""}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(30px)",
                }}
              >
                {cert.category === "highlighted" && <div className="highlight-glow"></div>}
                
                <div className="cert-header">
                  <div className="cert-thumbnail" onClick={() => openModal(cert)}>
                    <img src={cert.thumbnail} alt={cert.name} className="thumbnail-img" />
                    <div className="thumbnail-overlay">
                      <span>🔍 View Full</span>
                    </div>
                    {cert.category === "highlighted" && (
                      <div className="featured-badge"><FaStar /> Featured</div>
                    )}
                  </div>
                  <div className="cert-info">
                    <div className="cert-title-container">
                      <h3 className="cert-title">{cert.name}</h3>
                      <button className="expand-btn" onClick={() => toggleCert(index)}>
                        {expandedCert === index ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                    </div>
                    <div className="cert-meta">
                      <span className="cert-authority">{cert.authority}</span>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                    <p className="cert-description">{cert.description}</p>
                  </div>
                </div>

                <div className={`cert-details ${expandedCert === index ? "show" : ""}`}>
                  <div className="skills-acquired">
                    <h4>Skills Acquired:</h4>
                    <div className="skill-tags">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="verify-btn">
                    <FaExternalLinkAlt className="me-2" /> Verify Credential
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Show More/Less Button */}
        {filteredCerts.length > 6 && (
          <div className="text-center mt-5">
            <button className="btn-show-more" onClick={toggleShowAll}>
              {showAll ? (
                <><FaMinus className="me-2" /> Show Less</>
              ) : (
                <><FaPlus className="me-2" /> Show More ({filteredCerts.length - 6} more)</>
              )}
            </button>
          </div>
        )}
      </Container>

      {/* Full Certificate Modal */}
      {modalOpen && currentCert && (
        <div className="cert-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ marginTop: "20vh" }}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <img src={currentCert.fullImage} alt={currentCert.name} className="full-cert-img" />
            <div className="cert-modal-info">
              <h3>{currentCert.name}</h3>
              <p>Issued by: {currentCert.authority}</p>
              <p>Date: {currentCert.date}</p>
              <a href={currentCert.verifyUrl} target="_blank" rel="noopener noreferrer" className="verify-btn">
                <FaExternalLinkAlt className="me-2" /> Verify Credential
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
