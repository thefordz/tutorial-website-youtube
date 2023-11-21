"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "about",
      path: "/about",
    },
    {
      name: "projects",
      path: "/projects",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const opacityVariants = {
    initial: { scaleY: 0 },
    animate: { scaleY: 1, transition : {duration : .5, ease : [0.12, 0, 0.39, 0]} },
    exit: { scaleY: 0, transition : {duration : .5, ease : [0.22, 1, 0.36, 1]} },
  };

  console.log(openMenu);

  return (
    <header className="fixed bg-white w-full py-4 z-10">
      <div className="container mx-auto flex items-center justify-between text-xl">
        <Link href="/">thefordz</Link>
        {/* navbar */}
        <div className="hidden md:block">
          <nav className="flex items-center gap-5 text-xl ">
            {links.map((link, index) => (
              <Link key={index} href={link.path}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <button type="button" className={`${openMenu ?  "text-white" : "text-black"} md:hidden z-50 transition-all duration-150`} onClick={toggleMenu}>
          menu
        </button>
      </div>
      {/* mobile navbar */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            variants={opacityVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed w-screen h-screen top-0 left-0 bg-black text-white origin-top"
          >
            <nav className="flex items-center justify-center flex-col h-full w-full gap-5 text-xl ">
              {links.map((link, index) => (
                <Link key={index} href={link.path} onClick={toggleMenu}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
