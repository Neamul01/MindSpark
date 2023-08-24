"use client";
import { Button, Card, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase.init";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Page() {
  const [signInWithGoogle, user, loading, fbError] = useSignInWithGoogle(auth);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((res) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          // @ts-ignore
          accessToken: res?.user?.accessToken,
          displayName: res?.user.displayName,
          email: res?.user.email,
          photoURL: res?.user.photoURL,
          uid: res?.user.uid,
        })
      );
      toast("🦄 Wow so easy!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push("/");
    });
  };

  return (
    <div className="max-w-layout mx-auto min-h-screen flex items-center justify-center">
      <Card>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              placeholder="name@flowbite.com"
              required
              type="email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" required type="password" />
          </div>
          {/* <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div> */}
          <Button type="submit" disabled>
            Login
          </Button>
          <Button
            type="button"
            className="bg-transparent text-black hover:bg-gray-100 dark:hover:bg-gray-100 hover:text-white border"
          >
            <div
              className="flex items-center gap-3"
              onClick={handleGoogleSignIn}
            >
              <BsGoogle className="text-primary" />
              <span>Login with Google</span>
            </div>
            {fbError && <small>{fbError.message}</small>}
          </Button>
        </form>
      </Card>
    </div>
  );
}
