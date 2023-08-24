"use client";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const user = JSON.parse(localStorage?.getItem("user") as string);
  const router = useRouter();
  console.log(user);
  return <>{user ? children : router.push("/auth/login")}</>;
}
