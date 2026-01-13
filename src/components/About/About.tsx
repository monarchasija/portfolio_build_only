import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaNodeJs, FaPython, FaFigma, FaVuejs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiWebpack, SiVite, SiEslint, SiPrettier, SiJest, SiCypress, SiGraphql } from 'react-icons/si';
import { portfolioData } from '../../data/portfolioData';
import './About.css';

const About: React.FC = () => {
  const { personal, skills } = portfolioData;

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ComponentType } = {
      FaReact, FaJs, FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaNodeJs, FaPython, FaFigma, FaVuejs,
      SiTypescript, SiTailwindcss, SiNextdotjs, SiWebpack, SiVite, SiEslint, SiPrettier, SiJest, SiCypress, SiGraphql
    };
    return icons[iconName] || FaReact;
  };

  const skillsByCategory = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    tools: skills.filter(skill => skill.category === 'tools'),
    languages: skills.filter(skill => skill.category === 'languages')
  };

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'advanced': return '#48bb78';
      case 'intermediate': return '#ed8936';
      case 'beginner': return '#4299e1';
      default: return '#a0aec0';
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-bio">{personal.bio}</p>
            <div className="about-details">
              <div className="detail-item">
                <strong>Location:</strong> {personal.location}
              </div>
              <div className="detail-item">
                <strong>Email:</strong> {personal.email}
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3 className="skills-title">Skills & Technologies</h3>
            
            <div className="skills-categories">
              <div className="skill-category">
                <h4 className="category-title">Frontend</h4>
                <div className="skills-grid">
                  {skillsByCategory.frontend.map((skill) => {
                    const IconComponent = getIcon(skill.icon);
                    return (
                      <div key={skill.name} className="skill-item">
                        <div className="skill-icon">
                          <IconComponent />
                        </div>
                        <span className="skill-name">{skill.name}</span>
                        <div 
                          className="skill-level"
                          style={{ backgroundColor: getProficiencyColor(skill.proficiency) }}
                        >
                          {skill.proficiency}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="skill-category">
                <h4 className="category-title">Tools & Build</h4>
                <div className="skills-grid">
                  {skillsByCategory.tools.map((skill) => {
                    const IconComponent = getIcon(skill.icon);
                    return (
                      <div key={skill.name} className="skill-item">
                        <div className="skill-icon">
                          <IconComponent />
                        </div>
                        <span className="skill-name">{skill.name}</span>
                        <div 
                          className="skill-level"
                          style={{ backgroundColor: getProficiencyColor(skill.proficiency) }}
                        >
                          {skill.proficiency}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="skill-category">
                <h4 className="category-title">Backend & Languages</h4>
                <div className="skills-grid">
                  {skillsByCategory.languages.map((skill) => {
                    const IconComponent = getIcon(skill.icon);
                    return (
                      <div key={skill.name} className="skill-item">
                        <div className="skill-icon">
                          <IconComponent />
                        </div>
                        <span className="skill-name">{skill.name}</span>
                        <div 
                          className="skill-level"
                          style={{ backgroundColor: getProficiencyColor(skill.proficiency) }}
                        >
                          {skill.proficiency}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;