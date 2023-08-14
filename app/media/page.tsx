"use client";
import Layout from "@/components/Layouts/Layout/Layout";
import { usePostContext } from "@/contexts/UploadPosts";
import { Card } from "flowbite-react";
import Image from "next/image";
import React from "react";

export default function Page() {
  const { posts } = usePostContext();
  posts.map((post) => console.log(post));
  console.log("posts", posts);
  return (
    <Layout parentClass="py-20">
      <div className="bg-white text-black grid grid-cols-12 gap-4">
        {posts.map((post, i) => (
          <div
            key={i}
            className="flex flex-col items-center col-span-3 shadow-lg p-4 pb-8 rounded-lg justify-between"
          >
            {post.image && (
              <div className="w-[200px] h-[200px] relative rounded-xl overflow-hidden ">
                <Image fill src={post.image && post.image} alt="Post" />
              </div>
            )}
            <div className=" flex flex-col items-center">
              <h2 className="font-bold text-2xl my-4 capitalize">
                {post.title}
              </h2>
              <p className="text-sm">
                {post.description.length > 50
                  ? post.description.slice(0, 50) + "..."
                  : post.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
