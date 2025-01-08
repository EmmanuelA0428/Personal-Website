import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center justify-center p-6"
      style={{
        backgroundColor: "#403D52",
      }}
    >
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-white">Let's Connect!</h3>
        <p className="mt-2 text-white">
          Feel free to reach out for collaborations or just to say hi!
        </p>
      </div>

      <div className="flex space-x-4 mb-4">
        <Link
          to="/resume"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          View Resume
        </Link>
        <Link
          to="https://www.linkedin.com/in/emmanuel-appiah0428"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-white py-1 px-3 rounded hover:bg-blue-600 transition"
        >
          LinkedIn
        </Link>
        <Link
          to="https://github.com/EmmanuelA0428"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white py-1 px-3 rounded hover:bg-gray-700 transition"
        >
          GitHub
        </Link>
      </div>

      <div className="flex space-x-4 text-white">
        <a
          href="/"
          className="bg-gray-600 hover:bg-gray-500 py-1 px-3 rounded transition"
        >
          Home
        </a>
        <a
          href="/projects"
          className="bg-gray-600 hover:bg-gray-500 py-1 px-3 rounded transition"
        >
          Projects
        </a>
        <a
          href="/experience"
          className="bg-gray-600 hover:bg-gray-500 py-1 px-3 rounded transition"
        >
          Experience
        </a>
        <a
          href="/blog"
          className="bg-gray-600 hover:bg-gray-500 py-1 px-3 rounded transition"
        >
          Blog
        </a>
        <a
          href="/contact"
          className="bg-gray-600 hover:bg-gray-500 py-1 px-3 rounded transition"
        >
          Contact
        </a>
      </div>

      <div className="text-center text-white">
        <p>
          &copy; {new Date().getFullYear()} Emmanuel Appiah. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
