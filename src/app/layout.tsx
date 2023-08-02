"use client";
import Navbar from "~/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { MyComponent } from "~/components/Motion";
//import layouts

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shoping",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="box-border m-0 align-baseline relative">
        <div className="absolute h-full w-full bg-gradient-to-r from-gray-950 z-0">
          <Navbar />
          <MyComponent>{children} </MyComponent>
        </div>
      </body>
    </html>
  );
}
