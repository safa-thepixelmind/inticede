"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "About Us", href: "/AboutUs" },
  { name: "Services", href: "/Services" },
  { name: "Products", href: "/Products" },
  { name: "Clients", href: "/Clients" },
  { name: "Network", href: "#" },
  { name: "Events", href: "#" },
  { name: "Connect", href: "#" },
  { name: "Careers", href: "#" },
];

// Parent container animation variant
const navVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

// Link item animation variant
const linkItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 30,
    },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/50 fixed top-0 left-0 right-0 z-50 h-[75px]">
      <div className="px-6 sm:px-10 lg:px-[60px] flex items-center justify-between h-full relative w-full">
        {/* Left nav links with animation */}
        <motion.nav
          className="hidden md:flex gap-6 text-base lg:text-lg text-blue-900 font-grown font-bold"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          {links.slice(0, 4).map(({ name, href }) => (
            <motion.div key={name} variants={linkItem}>
              <Link href={href} className="hover:text-blue-500 transition-colors">
                {name}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Center logo */}
<div className="absolute left-1/2 -translate-x-1/2">
  <Link href="/">
    <Image
      src="/images/homepage/logo.png"
      alt="Inticede Logo"
      width={160}
      height={60}
      className="object-contain"
    />
  </Link>
</div>


        {/* Right nav links with animation */}
        <motion.nav
          className="hidden md:flex gap-6 text-base lg:text-lg text-blue-900 ml-auto font-grown font-bold"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          {links.slice(4).map(({ name, href }) => (
            <motion.div key={name} variants={linkItem}>
              <Link href={href} className="hover:text-blue-500 transition-colors">
                {name}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-900 ml-auto text-3xl"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="bg-white/90 md:hidden px-6 sm:px-10 lg:px-[60px] py-4 space-y-3">
          {links.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="block text-base sm:text-lg text-blue-900 hover:text-blue-500 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
