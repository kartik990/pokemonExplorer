import React from "react";

interface TagProps {
  children: React.ReactNode;
  isDark?: boolean;
}

const Tag: React.FC<TagProps> = ({ children, isDark }) => {
  return (
    <div
      className={`text-md capitalize ${
        isDark ? "text-black" : "text-white"
      } font-medium`}
    >
      {children}
    </div>
  );
};

export default Tag;
