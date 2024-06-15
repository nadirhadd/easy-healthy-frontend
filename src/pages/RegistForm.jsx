// RegistrationForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import styles from '../style'
import LoginBg from "../assets/login-bg.jpg";
import { NavLink, Link } from 'react-router-dom';

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
      alert('Berhasil Membuat Akun');
    } catch (error) {
      console.error('Error registering user:', error.response.data);
    }
  };

  return (
    <div
      className={`flex justify-center items-center h-screen ${styles.paddingX}`}
      style={{
        backgroundImage: `url(${LoginBg})`,
        backgroundSize: "cover",
      }}
    >
      <form 
        onSubmit={handleSubmit}
        className={`bg-primary p-8 rounded-lg shadow-xl ${styles.paddingX} ${styles.paddingY} w-[50%]`}
      >
        <h2 className="text-2xl mb-6 font-bold text-center">Sign Up</h2>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:outline-none focus:bg-white-500 focus:text-black-100" required /><br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:outline-none focus:bg-white-500 focus:text-black-100" required /><br />

        <label htmlFor="full_name">Full Name:</label>
        <input type="text" id="full_name" name="full_name" value={formData.full_name} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:outline-none focus:bg-white-500 focus:text-black-100" required /><br />

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:outline-none focus:bg-white-500 focus:text-black-100" required /><br />

        <button type="submit" className={`bg-accent px-6 py-2 rounded-md font-mont`}>Register</button>
        <div className='py-5'>
          <a href={'/login'} className='px-6 py-2 rounded-md bg-accent'>Back to Login</a>
        </div>
      </form>
    </div>
  );
}
export default RegistrationForm;
