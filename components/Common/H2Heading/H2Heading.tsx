import React from "react";
import { twMerge } from "tailwind-merge";

export default function H2Heading({
  text,
  color = "secondary",
  size = "heading",
  className,
  position = "left",
}: {
  text: string;
  color?: "secondary" | "white";
  size?: "heading" | "sm";
  className?: string;
  position?: "left" | "center" | "right";
}) {
  return (
    <h2
      className={twMerge(
        size === "heading" ? "text-2xl md:text-4xl" : "text-2xl md:text-3xl",
        color === "white" ? "text-white" : "text-secondary",
        position === "center" ? "text-center" : "text-left",
        "font-bold z-20",
        className
      )}
    >
      {text}
    </h2>
  );
}
