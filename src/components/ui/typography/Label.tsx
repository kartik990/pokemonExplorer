import React from "react";

interface LabelProps {
  children: React.ReactNode;
  isDark?: boolean;
}

const Label: React.FC<LabelProps> = ({ children, isDark }) => {
  return (
    <div
      className={`text-lg capitalize ${
        isDark ? "text-black" : "text-white"
      } font-bold flex gap-2 items-center`}
    >
      {children}
    </div>
  );
};

export default Label;
