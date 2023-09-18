import React from 'react';

function Home() {
  return (
    <><section id="home">
      <div className="container">
        <h2>Let’s Start from here</h2>
        <p> Our platform acts as a vital bridge between video editors and content creators, simplifying the entire workflow. </p>
        <a href="#get-started" className="btn">Get Started</a>
      </div>
    </section><section id="pricing">
        <div className="container">
          <h2>Pricing Plans</h2>
          <div className="pricing-plans">
            <div className="pricing-plan">
              <h3>Basic Plan</h3>
              <p>Perfect for beginners.</p>
              <p>Price: $10/month</p>
              <a href="#signup" className="btn">Sign Up</a>
            </div>
            <div className="pricing-plan">
              <h3>Pro Plan</h3>
              <p>For experienced creators.</p>
              <p>Price: $20/month</p>
              <a href="#signup" className="btn">Sign Up</a>
            </div>
            <div className="pricing-plan">
              <h3>Enterprise Plan</h3>
              <p>For professional studios.</p>
              <p>Price: Custom</p>
              <a href="#contact" className="btn">Contact Us</a>
            </div>
          </div>
        </div>
      </section></>
  );
}

export default Home;
