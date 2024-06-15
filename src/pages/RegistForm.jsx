// RegistrationForm.jsx

import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    full_name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, full_name, email, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [full_name]: value,
      [email]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/register', formData);
      console.log('success!', response.data);
    } catch (error) {
      console.error('Error registering user:', error.response.data);
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className='ring-2' required /><br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className='ring-4' required /><br />

        <label htmlFor="full_name">Full Name:</label>
        <input type="text" id="full_name" name="full_name" value={formData.full_name} onChange={handleChange} className='ring-4' required /><br />

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} className='ring-4' required /><br />

        <button type="submit" className='ring-8'>Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
