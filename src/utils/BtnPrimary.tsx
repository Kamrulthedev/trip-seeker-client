import React from "react";

interface BtnPrimaryProps {
  text: string;
  title: string;
  className?: string;
}

export const BtnPrimary: React.FC<BtnPrimaryProps> = ({
  text,
  title,
  className = "",
}) => {
  return (
    <button
      title={title}
      className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${className}`}
    >
      {text}
    </button>
  );
};
