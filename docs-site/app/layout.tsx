import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "AI Governance & Security Practice - Strategic Plan",
  description: "Strategic plan for launching AI Data Governance & Security services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-white text-slate-800 antialiased`}>
        <div className="flex min-h-screen">
          <Sidebar />
          {/* Main content area - Margin left matches sidebar width (16rem = 64) */}
          <main className="flex-1 ml-64 min-h-screen flex flex-col">
            <TopNav />
            <div className="flex-1 px-12 pb-16 max-w-5xl mx-auto w-full">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
