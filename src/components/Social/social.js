// src/components/Social.js
import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  SiGmail,
  SiLeetcode,
  SiGeeksforgeeks,
  SiHackerrank,
  SiLinktree,
  SiStackoverflow,
} from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import "./social.css";

const Social = () => {
  const [inView, setInView] = useState(false);
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

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/md-warish-ansari/",
      color: "#0077B5",
      hoverBg: "linear-gradient(135deg, #0077B5, #00a0dc)",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/mdwarishansari",
      color: "#ffffff",
      hoverBg: "linear-gradient(135deg, #333, #181717)",
    },
    {
      name: "X (Twitter)",
      icon: <FaXTwitter />,
      url: "https://x.com/mdwarish888",
      color: "#ffffff",
      hoverBg: "linear-gradient(135deg, #333, #000000)",
    },
    {
      name: "Gmail",
      icon: <SiGmail />,
      url: "mailto:warishansari018@gmail.com",
      color: "#D14836",
      hoverBg: "linear-gradient(135deg, #D14836, #e55b4e)",
    },
    {
      name: "Stack Overflow",
      icon: <SiStackoverflow />,
      url: "https://stackoverflow.com/users/your-id",
      color: "#F48024",
      hoverBg: "linear-gradient(135deg, #F48024, #f7a550)",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode />,
      url: "https://leetcode.com/u/mdwarishansari/",
      color: "#FFA116",
      hoverBg: "linear-gradient(135deg, #FFA116, #ffb74d)",
    },
    {
      name: "GeeksforGeeks",
      icon: <SiGeeksforgeeks />,
      url: "https://www.geeksforgeeks.org/user/warishann144/",
      color: "#2F8D46",
      hoverBg: "linear-gradient(135deg, #2F8D46, #4caf50)",
    },
    {
      name: "HackerRank",
      icon: <SiHackerrank />,
      url: "https://www.hackerrank.com/profile/warishansari018",
      color: "#2EC866",
      hoverBg: "linear-gradient(135deg, #2EC866, #4caf50)",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/mohammadwarish2024/",
      color: "#E1306C",
      hoverBg: "linear-gradient(135deg, #833AB4, #E1306C, #FCAF45)",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/profile.php?id=100074841669595",
      color: "#1877F2",
      hoverBg: "linear-gradient(135deg, #1877F2, #4299e1)",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      url: "https://youtube.com/channel",
      color: "#FF0000",
      hoverBg: "linear-gradient(135deg, #FF0000, #ff4444)",
    },
    {
      name: "Discord",
      icon: <FaDiscord />,
      url: "https://discord.com/mohammadwarishansari_47491",
      color: "#5865F2",
      hoverBg: "linear-gradient(135deg, #5865F2, #7289da)",
    },
    {
      name: "Linktree",
      icon: <SiLinktree />,
      url: "https://linktr.ee/mdwarishansari",
      color: "#43E660",
      hoverBg: "linear-gradient(135deg, #43E660, #6bef8a)",
    },
  ];

  return (
    <section
      id="social"
      className={`social-section py-5 ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <Container>
        <div className="section-header mb-5">
          <h2 className="section-title">Connect With Me</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle text-center mt-4">
            Find me on these platforms and let's collaborate
          </p>
        </div>

        <div className="social-grid">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              style={{
                "--hover-bg": social.hoverBg,
                "--icon-color": social.color,
                animationDelay: `${index * 0.08}s`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.9)",
              }}
            >
              <div className="social-icon-wrapper">
                <div className="social-icon">{social.icon}</div>
                <div className="social-ring"></div>
              </div>
              <span className="social-name">{social.name}</span>
              <div className="social-arrow">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Social;
