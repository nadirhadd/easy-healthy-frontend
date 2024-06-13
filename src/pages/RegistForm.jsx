// RegistrationForm.jsx

import React, { useState } from 'react';
import axios from 'axios'; // for making HTTP requests

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/register', formData);
      console.log(response.data); // handle success response
    } catch (error) {
      console.error('Error registering user:', error.response.data); // handle error response
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required /><br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
