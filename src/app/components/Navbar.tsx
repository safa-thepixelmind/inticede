"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "About Us", href: "/AboutUs" },
  { name: "Services", href: "#" },
  { name: "Products", href: "#" },
  { name: "Clients", href: "#" },
  { name: "Network", href: "#" },
  { name: "Events", href: "#" },
  { name: "Connect", href: "#" },
  { name: "Careers", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 h-[66px]">
      <div className="px-[38px] flex items-center justify-between h-full relative w-full">
        {/* Left nav links */}
        <nav className="hidden md:flex gap-4 text-sm text-blue-900 font-grown font-bold">
          {links.slice(0, 4).map(({ name, href }) => (
            <Link key={name} href={href} className="hover:text-blue-500">
              {name}
            </Link>
          ))}
        </nav>

        {/* Center logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <Image
              src="/images/homepage/logo.jpg"
              alt="Inticede Logo"
              width={150}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Right nav links */}
        <nav className="hidden md:flex gap-4 text-sm text-blue-900 ml-auto font-grown font-bold">
          {links.slice(4).map(({ name, href }) => (
            <Link key={name} href={href} className="hover:text-blue-500">
              {name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-900 ml-auto"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-[38px] py-2 space-y-2">
          {links.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="block text-blue-900 hover:text-blue-500"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
