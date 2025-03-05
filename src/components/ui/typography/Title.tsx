import React from "react";

interface TitleProps {
  children: React.ReactNode;
  isDark?: boolean;
}
const Title: React.FC<TitleProps> = ({ children, isDark }) => {
  return (
    <div
      className={`text-lg md:text-xl capitalize  ${
        isDark ? "text-black" : "text-white"
      } font-bold border-b-2 border-gray-200 pb-2`}
    >
      {children}
    </div>
  );
};

export default Title;
