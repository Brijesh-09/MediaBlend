import React from 'react';
import './App.css'; // Import your CSS styles here
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* Add more sections and components here */}
      <Footer />
    </div>
  );
}

export default App;
