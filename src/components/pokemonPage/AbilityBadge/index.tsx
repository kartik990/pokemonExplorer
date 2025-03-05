import { colors } from "@/utils/constant";
import React from "react";

interface AbilityBadgeProps {
  ability: string;
}

const AbilityBadge: React.FC<AbilityBadgeProps> = ({ ability }) => {
  const randomCol = colors[Math.floor(Math.random() * colors.length)];

  return (
    <span
      className={`px-4 py-2 text-white capitalize text-sm font-medium rounded-md ${randomCol}`}
    >
      {ability.split("-").join(" ").toUpperCase()}
    </span>
  );
};

export default AbilityBadge;
