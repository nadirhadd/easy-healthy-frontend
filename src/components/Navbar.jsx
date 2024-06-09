import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import { navLinks } from "../constants";
import logo from "../assets/logo.svg";
import LoginButton from "./LoginButton";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    document.title = "Easy Healthy";
  }, []);

  return (
    <nav className="w-full flex pt-6 justify-between items-center navbar">
      <NavLink to={(Link.path = "/")}>
        <img src={logo} className="w-[130px] h-[80px]" />
      </NavLink>

      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-mont font-normal cursor-pointer text-[16px] ${
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
        <LoginButton />
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
