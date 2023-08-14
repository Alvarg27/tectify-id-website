import React from "react";

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-8 h-[50px] flex justify-center items-center ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
