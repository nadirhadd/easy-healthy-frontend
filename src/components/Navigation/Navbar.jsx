import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faX } from "@fortawesome/free-solid-svg-icons";

import { navLinks } from "../../constants";
import logo from "../../assets/logo.svg";
import LoginButton from "../LoginButton";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <nav className="w-full flex pt-6 justify-between items-center navbar">
      <NavLink to={(Link.path = "/")}>
        <img src={logo} className="w-[130px] h-[80px]" />
      </NavLink>

      <ul className="px-10 list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`flex align-center font-mont cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-black`}
          >
            {nav.path ? (
              <a href={`${nav.path}`}>{nav.title}</a>
            ) : (
              <a href={`#${nav.id}`}>{nav.title}</a>
            )}
          </li>
        ))}
      </ul>

      <div className="sm:flex hidden">
        {user ? (
          <div className="bg-accent rounded-xl font-mont font-semibold cursor-pointer relative">
            <h1 className="py-2 px-4" onClick={() => setToggle((prev) => !prev)}>
              Hello, {user.username}
              <FontAwesomeIcon icon={faUser} className="pl-2"/>
            </h1>
            {toggle && (
              <ul className="absolute right-0 mt-2 w-full py-2 bg-white rounded-md flex flex-col items-end">
                <li className="pr-4 py-2">
                  Profile
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="pr-4 py-2 font-mont cursor-pointer"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <LoginButton/>
        )}
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <FontAwesomeIcon
          icon={toggle ? faX : faBars}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-mont font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-black`}
              >
                {nav.path ? (
                  <a href={`${nav.path}`}>{nav.title}</a>
                ) : (
                  <a href={`#${nav.id}`}>{nav.title}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
