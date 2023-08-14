"use client";
import AddPost from "@/components/AddPost/AddPost";
import PostCard from "@/components/Cards/PostCard";
import Layout from "@/components/Layouts/Layout/Layout";
import { usePostContext } from "@/contexts/UploadPosts";
import { Card } from "flowbite-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const { posts } = usePostContext();

  return (
    <Layout parentClass="py-20">
      <div className="bg-white text-black grid grid-cols-12 gap-4">
        {posts.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </div>
    </Layout>
  );
}
