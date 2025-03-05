import { LoaderCircle } from "lucide-react";
import React from "react";

interface LoaderProps {
  size?: string;
}

const Loader: React.FC<LoaderProps> = ({ size }) => {
  return (
    <div>
      <LoaderCircle
        className={`w-[${size ? size : "25"}px] h-[${
          size ? size : "25"
        }px] animate-spin text-white`}
      />
    </div>
  );
};

export default Loader;
