import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Transition from "./Components/Transition";

const inter = Poppins({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "Next.js Page Transition",
  description: "How to make Page Using Next.js TailwindCSS Framer-Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" scrollbar-hide">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
