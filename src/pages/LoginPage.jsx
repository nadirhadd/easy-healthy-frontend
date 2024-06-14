import { useState } from "react";
import styles from "../style";
import LoginBg from "../assets/login-bg.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post('http://localhost:3001/login', {username, password});
      console.log(response.data);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
      setError('Invalid');
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
        className={`bg-primary p-8 rounded-lg shadow-xl ${styles.paddingX} ${styles.paddingY}`}
      >
        <h2 className="text-2xl mb-6 font-bold text-center">Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:outline-none focus:bg-white-500 focus:text-black-100"
            placeholder="Username"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:outline-none focus:bg-white-500 focus:text-black-100"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className={`bg-accent px-6 py-2 rounded-md font-mont`}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
