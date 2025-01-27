import React from 'react';
import Header from '../Header/Header'; // Adjust path if needed
import './Home.scss';
import StockCard from '../StockCard/StockCard.jsx';


const Home = () => {
  return (
    <div className="home">
      <Header />

      <section className="hero">
        <div className="hero-content">
          <h1>
            <span className="highlight">Chat</span>
            <br />
            With Your Favorite Stocks
          </h1>
          <p>
            Stock Sense is your AI financial companion, bridging the gap between 
            you and complex market data. Chat with stocks for real-time insights 
            powered by Artificial Intelligence, so you can invest with confidence.
          </p>

          {/* Single, wide search bar (no button) */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for a stock..."
              className="stock-search-input"
            />
          </div>
        </div>
      </section>



{/* Divider line */}
<hr className="section-divider" />



  <section className="trending-section">

  <div className="trending-header">
    <h2>Trending</h2>
    {/* Right side: “Discover More →” link */}
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

    
  </div>

  <div className="discover-more-container">
        <button className="discover-button">Discover More →</button>
  </div>

</section>


<hr className="section-divider" />

<section className="how-it-works">
  <h2 className="how-it-works-title">How It Works</h2>

  <div className="how-it-works-content">
    {/* Card 1 */}
    <div className="how-card">
      <div className="how-text">
        <h3>Leveraging Publicly Available Documents</h3>
        <p>
          We collect the latest earnings reports from different companies, which 
          serve as rich sources of information about their stock.
        </p>
      </div>
      <div className="how-image">
        {/* Replace with an actual image path */}
        <img src="../../documents.png" alt="Documents" />
      </div>
    </div>

    {/* Card 2 */}
    <div className="how-card">
      <div className="how-text">
        <h3>User Asks a Question</h3>
        <p>
          We use NLP to extract essential points from these earnings reports,
          focusing on details that address your query.
        </p>
      </div>
      <div className="how-image">
      <img src="../../typing.png" alt="Documents" />
      </div>
    </div>

    {/* Card 3 */}
    <div className="how-card">
      <div className="how-text">
        <h3>Augment the Prompt</h3>
        <p>
          We combine your original question with the extracted data to form a 
          comprehensive prompt for our AI model.
        </p>
      </div>
      <div className="how-image">
      <img src="../../augment.png" alt="Documents" />
      </div>
    </div>

    {/* Card 4 */}
    <div className="how-card">
      <div className="how-text">
        <h3>Feed into LLM</h3>
        <p>
          We feed the enriched prompt into a large language model (LLM), 
          generating an up-to-date answer based on the latest data.
        </p>
      </div>
      <div className="how-image">
      <img src="../../llm.png" alt="Documents" />
      </div>
    </div>
  </div>
</section>

<div
  style={{
    textAlign: 'center',
    fontSize: '1rem',
    color: '#888',
    marginTop: '80px',
    marginBottom: '30px',
  }}
>
  Copyright © 2025 StockSense. All rights reserved.
</div>



</div>



  );
};

export default Home;
