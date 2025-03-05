import React from "react";

interface DetailCardProps {
  children: React.ReactNode;
  sz: "small" | "large";
}

const DetailCard: React.FC<DetailCardProps> = ({ children, sz }) => {
  return (
    <div
      className={`bg-white z-60 shadow-md rounded-lg p-4 md:px-6  ${
        sz == "small" ? "row-span-1" : "row-span-2"
      }`}
    >
      {children}
    </div>
  );
};

export default DetailCard;
