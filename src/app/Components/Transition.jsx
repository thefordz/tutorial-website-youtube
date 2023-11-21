"use client";
import React from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Transition = ({ children }) => {


  return (
      <AnimatePresence mode="wait">
        <main className="h-screen w-full pt-[60px] container mx-auto">
          <motion.div
            className=" w-full h-full"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x : 20 }}
            transition={{ duration: 1 }}
          >
            {children}
          </motion.div>
        </main>
      </AnimatePresence>
  );
};

export default Transition;
