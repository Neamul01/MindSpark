import SiteNavbar from "@/components/Navbars/SiteNavbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteFooter from "@/components/Footers/SiteFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MindSpark",
  description: "Spark your mind with MindSpark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <SiteNavbar />
        </header>
        <>{children}</>
        <footer>
          <SiteFooter />
        </footer>
      </body>
    </html>
  );
}
