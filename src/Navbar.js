import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <h1 className="nav-logo">MediaBlend</h1>
          <ul className="nav-menu">
            <li><a href="#pricing">Product</a></li>
            <li><a href="#get-started">Pricing</a></li>
            <li><a href="#login">Get Started</a></li>
          </ul>
        </div>
        <div className="nav-right">
          <button className="nav-button">Sign Up</button>
          <button className="nav-button">Sign In</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
