import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';  // Adjust the path as needed


const HomePage = () => {
  return (
    <div>
      <h2>Welcome to Energy Consumption Optimizer</h2>
      <p>Track your home energy usage and optimize your bills.</p>
      <div>
        <Link to="/form">Enter Energy Data</Link>
        <br />
        <Link to="/display">View Energy Data</Link>
      </div>
    </div>
  );
};

export default HomePage;
