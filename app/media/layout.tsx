"use client";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const userString = localStorage.getItem("user");
    const user: any | null = userString ? JSON.parse(userString) : null;
    console.log(user);
    if (user) {
      router.push("/");
    } else {
      router.push("/auth/login");
      console.log(user);
    }
  }, [router]);

  return <>{children}</>;
}
