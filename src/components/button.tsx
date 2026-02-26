import React from "react";

type Size = "small" | "medium" | "large";
type Color = "primary" | "success" | "danger";

interface AhlButtonProps {
  size?: Size;
  color?: Color;
  text: string;
}

const sizeMap: Record<Size, string> = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-8 py-2 text-lg",
};

const colorMap: Record<Color, string> = {
  primary: "bg-blue-700",
  success: "bg-green-700",
  danger: "bg-red-800",
};

export const AhlButton: React.FC<AhlButtonProps> = ({
  size = "medium",
  color = "primary",
  text,
}) => (
  <button
    className={`${sizeMap[size]} ${colorMap[color]} text-white rounded cursor-pointer transition-all hover:opacity-90 active:scale-97`}
  >
    {text}
  </button>
);
