"use client";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const user = localStorage?.getItem("user");
  const router = useRouter();
  console.log(user);
  return <>{user ? children : router.push("/auth/login")}</>;
}
