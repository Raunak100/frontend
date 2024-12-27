import React, { useState } from 'react';
import '../styles/EnergyForm.css'; // Make sure the path is correct

const EnergyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: '',
    energyUsage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ date: '', energyUsage: '' });
  };

  return (
    <div className="form-container">
      <h2>Enter Energy Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date: </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Energy Usage (kWh): </label>
          <input
            type="number"
            name="energyUsage"
            value={formData.energyUsage}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EnergyForm;
