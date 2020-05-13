import React from "react";

const AxisIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="31.595"
    height="28.596"
    viewBox="0 0 31.595 28.596"
  >
    <line className="a" y1="17.344" transform="translate(12.087 2.086)" />
    <line className="a" x2="17.344" transform="translate(12.087 19.43)" />
    <line
      className="a"
      y1="6.07"
      x2="8.672"
      transform="translate(3.415 19.43)"
    />
    <path className="b" d="M1.5,0,3,3H0Z" transform="translate(10.595)" />
    <path
      className="b"
      d="M1.5,0,3,3H0Z"
      transform="translate(31.595 18) rotate(90)"
    />
    <path
      className="b"
      d="M1.5,0,3,3H0Z"
      transform="matrix(-0.588, -0.809, 0.809, -0.588, 1.763, 28.596)"
    />
  </svg>
);

export default AxisIcon;
