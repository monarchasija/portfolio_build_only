import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import './Contact.css';

const Contact: React.FC = () => {
  const { personal, socialLinks } = portfolioData;

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ComponentType } = {
      FaGithub,
      FaLinkedin,
      FaTwitter,
      FaEnvelope,
    };
    return icons[iconName] || FaEnvelope;
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href={`mailto:${personal.email}`} className="contact-link">
                  {personal.email}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <span className="contact-text">{personal.location}</span>
              </div>
            </div>
          </div>

          <div className="social-section">
            <h3 className="social-title">Connect With Me</h3>
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
                    <div className="social-icon">
                      <IconComponent />
                    </div>
                    <span className="social-label">{link.platform}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="cta-section">
            <a 
              href={`mailto:${personal.email}`} 
              className="cta-button"
            >
              <FaEnvelope />
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;