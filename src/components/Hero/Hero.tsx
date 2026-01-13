import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import './Hero.css';

const Hero: React.FC = () => {
  const { personal, socialLinks } = portfolioData;

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ComponentType } = {
      FaGithub,
      FaLinkedin,
      FaTwitter,
      FaEnvelope,
    };
    return icons[iconName] || FaGithub;
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">{personal.name}</h1>
            <h2 className="hero-title">{personal.title}</h2>
            <p className="hero-tagline">{personal.tagline}</p>
            
            <div className="hero-actions">
              <Link to="/projects" className="cta-button primary">
                View My Work
                <FaArrowRight />
              </Link>
              <a href="#contact" className="cta-button secondary">
                Get In Touch
              </a>
            </div>

            <div className="social-links">
              {socialLinks.map((link) => {
                const IconComponent = getIcon(link.icon);
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.platform}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="hero-image">
            <div className="image-placeholder">
              <div className="avatar">
                {personal.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;