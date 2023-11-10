import React from "react";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });
function Template({ children }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-80 py-3 ${inter.className}`}
    >
      <Navbar />
      {children}
    </main>
  );
}

export default Template;
