import React from "react";

const Button = ({ onClick, children, className }) => {
  return (
    <button
      className={`rounded-lg px-8 h-[50px] flex justify-center items-center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
