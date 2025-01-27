import React from 'react';
import './StockCard.scss';

const StockCard = ({ symbol, companyName, iconPath }) => {
  return (
    <div className="stock-card">
      <div className="icon-container">
        {/* Replace with an actual image/icon */}
        <img src={iconPath} alt={`${symbol} Logo`} className="large-image" />
      </div>
      <div className="card-text">
        <h3>{symbol}</h3>
        <p>{companyName}</p>
      </div>
    </div>
  );
};

export default StockCard;
