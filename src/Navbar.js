import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="container">
        <h1>MediaBlend</h1>
        <ul>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#get-started">Get Started</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
