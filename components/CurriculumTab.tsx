"use client";
import React from "react";

export default function CurriculumTab() {
  return (
    <div>
      <p>
        This is
        <span className="font-medium text-gray-800 dark:text-white">
          Profile associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </p>
    </div>
  );
}
