import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-[#003a70] cursor-pointer hover:bg-[#3d7dca] py-2 px-6 rounded-lg text-white text-md">
      {children}
    </button>
  );
};

export default Button;
