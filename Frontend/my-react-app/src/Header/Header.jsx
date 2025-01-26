import React from 'react';
import './Header.scss';
import { FaChartLine } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          {/* Use the FaChartLine icon from react-icons */}
          <FaChartLine className="stocks-icon" />
          <span className="logo-text">Stock Sense</span>
        </div>
        <div className="auth-button-container">
          <button className="explore-button">Explore</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
