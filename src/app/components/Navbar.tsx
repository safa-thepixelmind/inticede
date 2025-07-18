'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { name: 'About Us', href: '/AboutUs' },
  { name: 'Services', href: '/Services' },
  { name: 'Products', href: '/Products' },
  { name: 'Clients', href: '/Clients' },
  { name: 'Network', href: '#' },
  { name: 'Events', href: '#' },
  { name: 'Connect', href: '#' },
  { name: 'Careers', href: '#' },
];

const navVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const linkItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 400,
      damping: 30,
    },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowHamburger(window.innerWidth < 1030);
    };
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-white/50 fixed top-0 left-0 right-0 z-50 h-[82px]">
      <div className="px-6 sm:px-10 lg:px-[60px] flex items-end justify-between h-full relative w-full">

        {/* Left nav */}
        {!showHamburger && (
          <motion.nav
            className="flex gap-[50px] text-[16px] tracking-wider text-blue-900 font-grown font-bold pb-2 items-end"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            {links.slice(0, 4).map(({ name, href }) => (
              <motion.div key={name} variants={linkItem}>
                <Link href={href} className="uppercase hover:text-blue-500 transition-colors">
                  {name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[14px]">
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

        {/* Right nav or Hamburger */}
        <div className="ml-auto flex items-end h-full">
          {!showHamburger ? (
            <motion.nav
              className="flex gap-[50px] text-[16px] tracking-wider text-blue-900 font-grown font-bold pb-2 items-end"
              initial="hidden"
              animate="visible"
              variants={navVariants}
            >
              {links.slice(4).map(({ name, href }) => (
                <motion.div key={name} variants={linkItem}>
                  <Link href={href} className="uppercase hover:text-blue-500 transition-colors">
                    {name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          ) : (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-900 text-3xl items-center justify-center flex h-full"
              aria-label="Toggle menu"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu (if hamburger is active) */}
      {isOpen && showHamburger && (
        <div className="bg-white/90 px-6 sm:px-10 lg:px-[60px] py-4 space-y-3">
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
