import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EnergyForm from './components/EnergyForm';
import EnergyDisplay from './components/EnergyDisplay';
import HomePage from './components/HomePage';
import './App.css';  // This should be at the top of App.js

function App() {
  const [energyData, setEnergyData] = useState([]);

  const handleEnergyDataSubmit = (newData) => {
    setEnergyData(prevData => [...prevData, newData]);
  };

  return (
    <Router>
      <div className="App">
        <h1>Energy Consumption Optimizer</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<EnergyForm onSubmit={handleEnergyDataSubmit} />} />
          <Route path="/display" element={<EnergyDisplay energyData={energyData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
