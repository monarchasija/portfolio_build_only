import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { portfolioData } from '../../data/portfolioData';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();
  const isScrolled = useScrollSpy(300);
  const { personal, navigation } = portfolioData;

  const isHomePage = location.pathname === '/';

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            {isHomePage ? (
              <a href="#home" className="logo-link">
                {(isScrolled || !isHomePage) && (
                  <span className="logo-name">{personal.name}</span>
                )}
              </a>
            ) : (
              <Link to="/" className="logo-link">
                <span className="logo-name">{personal.name}</span>
              </Link>
            )}
          </div>

          {isHomePage && (
            <nav className="nav">
              <ul className="nav-list">
                {navigation.map((item) => (
                  <li key={item.id} className="nav-item">
                    <a href={item.href} className="nav-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {!isHomePage && (
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects" className="nav-link">Projects</Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;