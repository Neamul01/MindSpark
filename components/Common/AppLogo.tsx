import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AppLogo() {
  return (
    <Link href={"/"} className="w-44 cursor-pointer">
      <Image
        priority
        width={250}
        height={100}
        src="/next.svg"
        alt="logo"
        className=" overflow-hidden object-contain"
      />
    </Link>
  );
}
