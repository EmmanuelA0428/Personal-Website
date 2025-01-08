import React from "react";

const shapes = [
  "M3 18 L12 12 L21 18 M12 12 L12 2", // Original shape
  "M12 2 C17.52 2 22 6.48 22 12 C22 17.52 17.52 22 12 22 C6.48 22 2 17.52 2 12 C2 6.48 6.48 2 12 2 Z", // Circle
  "M2 12 L12 2 L22 12 L12 22 Z", // Diamond
  // Add more shapes as needed
];

const SvgComponent = ({ path }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-airplay w-12 h-12"
  >
    <path d={path} />
  </svg>
);

export { shapes, SvgComponent };
