"use client";
import Layout from "@/components/Layouts/Layout/Layout";
import { usePostContext } from "@/contexts/UploadPosts";
import { Card } from "flowbite-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const { posts } = usePostContext();
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
    console.log(like);
  };
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
            <div className="flex items-center gap-2">
              {like === true ? (
                <p
                  onClick={handleLike}
                  className={`border rounded-xl px-3 py-1 my-3 cursor-pointer hover:bg-red-500 
                }}`}
                >
                  like
                </p>
              ) : (
                <p
                  onClick={handleLike}
                  className={`border rounded-xl px-3 py-1 my-3 cursor-pointer bg-red-500 
                }}`}
                >
                  like
                </p>
              )}
              <span>{post.like}</span>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
