import AddPost from "@/components/AddPost/AddPost";
import Layout from "@/components/Layouts/Layout/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <AddPost />
      </main>
    </Layout>
  );
}
