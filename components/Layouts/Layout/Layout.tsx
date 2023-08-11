import React from "react";

import { twMerge } from "tailwind-merge";

type Props = {
  children: any;
  color?: "primary" | "secondary" | "white";
  bg?: "white" | "secondary" | string;
  parentClass?: string;
  className?: string;
};
function Layout({
  children,
  color = "secondary",
  bg = "white",
  parentClass,
  className,
}: Props) {
  return (
    <div className={twMerge(`text-${color} bg-${bg} w-full px-3`, parentClass)}>
      {/* overflow-hidden */}
      <div className={`max-w-layout mx-auto ${className}`}>{children}</div>
    </div>
  );
}

export default Layout;
