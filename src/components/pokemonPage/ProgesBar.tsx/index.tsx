import React from "react";

interface ProgressBarProps {
  percent: number;
  stat: string;
}

const pokemonStatColors: { [key: string]: { light: string; dark: string } } = {
  hp: { light: "bg-red-200", dark: "bg-red-500" },
  attack: { light: "bg-orange-200", dark: "bg-orange-500" },
  defense: { light: "bg-yellow-200", dark: "bg-yellow-500" },
  "special-attack": { light: "bg-blue-200", dark: "bg-blue-500" },
  "special-defense": { light: "bg-green-200", dark: "bg-green-600" },
  speed: { light: "bg-pink-200", dark: "bg-pink-500" },
};

const ProgressBar: React.FC<ProgressBarProps> = ({ percent, stat }) => {
  const lightColor = pokemonStatColors[stat]?.light || "bg-gray-100";
  const darkColor = pokemonStatColors[stat]?.dark || "bg-gray-400";

  return (
    <div className={`w-full h-2 ${lightColor} rounded-full overflow-hidden`}>
      <div
        className={`${darkColor} h-full transition-all duration-300`}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
