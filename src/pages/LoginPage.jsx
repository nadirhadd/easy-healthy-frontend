import { useState } from "react";
import styles from "../style";
import LoginBg from "../assets/login-bg.jpg";
import { Link, NavLink } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy login logic
    alert("Logging in with:", { email }, { password });
    // You might want to add validation logic here
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
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="block w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:outline-none focus:bg-white-500 focus:text-black-100"
            placeholder="Email"
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
            onChange={handlePasswordChange}
            className="block w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:outline-none focus:bg-white-500 focus:text-black-100"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex justify-center">
          <NavLink to={(Link.path = "/home-login")}>
            <button className={`bg-accent px-6 py-2 rounded-md font-mont`}>
              Sign In
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
