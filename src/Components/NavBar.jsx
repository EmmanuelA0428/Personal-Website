import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="flex justify-between items-center p-6 shadow-lg" // Increased padding from p-4 to p-6
      style={{
        background:
          "linear-gradient(to right, rgb(69,67,100), rgb(255,204,153))",
        borderRadius: "0 0 10px 10px",
      }}
    >
      <img src={logo} alt="logo" className="w-20 h-20" />{" "}
      {/* Increased logo size */}
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? (
          <FiX size={36} className="text-white" />
        ) : (
          <FiMenu size={36} className="text-white" />
        )}
      </div>
      <ul
        className={`flex list-none md:flex transition-transform duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        } md:block`}
        style={{ fontSize: "1.5rem" }} // Increased font size for the links
      >
        <li className="mr-6">
          {/* Increased margin for more space between links */}
          <Link to="/" className="no-underline text-white hover:text-gray-300">
            Home
          </Link>
        </li>

        <li className="mr-6">
          <Link
            to="/resume"
            className="no-underline text-white hover:text-gray-300"
          >
            Resume
          </Link>
        </li>
        <li className="mr-6">
          <Link
            to="/blog"
            className="no-underline text-white hover:text-gray-300"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="no-underline text-white hover:text-gray-300"
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
