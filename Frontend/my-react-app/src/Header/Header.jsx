import React from 'react';
import './Header.scss';
import { FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
        <div className="logo-container">
          {/* Use the FaChartLine icon from react-icons */}
          <Link to="/" style={{textDecoration: 'none'}}>
            <FaChartLine className="stocks-icon"/>
            <span className="logo-text">Stock Sense</span>
          </Link>
          
        </div>

        <div className="explore-button">
        <Link to="/explore" style={{textDecoration: 'none'}}>
            <button>Explore</button>
          </Link>
        </div>
          
        
    </div>
  );
};

export default Header;
