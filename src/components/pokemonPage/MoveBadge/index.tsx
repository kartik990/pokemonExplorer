import { typeLabelToColor } from "@/utils";
import React from "react";

interface MoveBadgeProps {
  move: string;
}

const colors = Object.values(typeLabelToColor);

const MoveBadge: React.FC<MoveBadgeProps> = ({ move }) => {
  const randomCol = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      className="p-1 px-4 rounded-lg capitalize text-sm border-2 opacity-[120%] font-medium"
      style={{ borderColor: randomCol, color: randomCol }}
    >
      {move.split("-").join(" ")}
    </div>
  );
};

export default MoveBadge;
