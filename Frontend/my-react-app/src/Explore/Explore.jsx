import React, { useState } from "react";
import './Explore.scss';
import StockCard from '../StockCard/StockCard.jsx';
import Header from '../Header/Header.jsx';


const Explore = () => {
    return(
<div>
    <Header></Header>

    <hr className="section-divider" />

    <div className="title">Explore</div>

    <div className="search-bar">
            <input
              type="text"
              placeholder="Search for a stock..."
              className="stock-search-input"
            />
    </div>

    <div className="trending-cards">
      
      <StockCard
        symbol="AAPL"
        companyName="Apple Inc."
        iconPath="../../apple.png"
      />

      <StockCard
        symbol="NVDA"
        companyName="Nvidia Corp."
        iconPath="../../nvidia.png"
      />


      <StockCard
        symbol="GOOG"
        companyName="Alphabet Inc."
        iconPath="../../google.png"
      />

        <StockCard
        symbol="AAPL"
        companyName="Apple Inc."
        iconPath="../../apple.png"
      />

      <StockCard
        symbol="NVDA"
        companyName="Nvidia Corp."
        iconPath="../../nvidia.png"
      />


      <StockCard
        symbol="GOOG"
        companyName="Alphabet Inc."
        iconPath="../../google.png"
      />

    <StockCard
        symbol="AAPL"
        companyName="Apple Inc."
        iconPath="../../apple.png"
      />

      <StockCard
        symbol="NVDA"
        companyName="Nvidia Corp."
        iconPath="../../nvidia.png"
      />


      <StockCard
        symbol="GOOG"
        companyName="Alphabet Inc."
        iconPath="../../google.png"
      />

    
     </div>


     <p className="coming-soon">We’re actively adding more stocks to our platform. Stay tuned for additions coming soon!
     </p>
     </div>
      )

};

export default Explore;
