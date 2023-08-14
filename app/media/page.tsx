"use client";
import Layout from "@/components/Layouts/Layout/Layout";
import { usePostContext } from "@/contexts/UploadPosts";
import Image from "next/image";
import React from "react";

export default function Page() {
  const { posts } = usePostContext();
  posts.map((post) => console.log(post));
  console.log("posts", posts);
  return (
    <Layout>
      <div className="bg-white min-h-screen text-black ">
        {posts.map((post, i) => (
          <div key={i}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            {post.image && (
              <Image
                height={200}
                width={200}
                src={post.image && post.image}
                alt="Post"
              />
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}
