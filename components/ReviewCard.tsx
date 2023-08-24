import Image from "next/image";
import React from "react";

export default function ReviewCard() {
  return (
    <div className="flex gap-3 border-b px-4 py-8">
      <div className="h-14 w-14 relative rounded-full overflow-hidden">
        <Image src={"/teacher.png"} fill alt="reacher" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg">Arlene McCoy</h2>
        <p className="text-xs">about an hour ago</p>
        <p className="text-sm">
          Access to IBM Cloud modelling what is I was looking for and Aaron got
          me the solution.
        </p>
      </div>
    </div>
  );
}
