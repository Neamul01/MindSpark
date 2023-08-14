"use client";
import React, { createContext, useContext, useState } from "react";

interface Post {
  title: string;
  description: string;
  image: File | null;
}

interface PostContextType {
  posts: Post[];
  addPost: (post: Post) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};

interface PostProviderProps {
  children: React.ReactNode;
}

export const PostProvider: React.FC<PostProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (post: Post) => {
    setPosts([...posts, post]);
  };

  const contextValue: PostContextType = {
    posts,
    addPost,
  };

  return (
    <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
  );
};
