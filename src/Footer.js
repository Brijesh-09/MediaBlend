import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
        </ul>
        <p>&copy; {new Date().getFullYear()} MediaBlend</p>
      </div>
    </footer>
  );
}

export default Footer;
