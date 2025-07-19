'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-[82px] bg-white overflow-hidden">
      {/* Hero Image with fade-in animation and increased width */}
      <motion.div
        className="relative w-full px-0 sm:px-10 lg:px-[60px]" // Match navbar left/right padding
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="relative w-full aspect-[1206/744]">
          <Image
            src="/images/homepage/hero.png"
            alt="Hero visual"
            fill
            sizes="100vw"
            className="object-cover rounded" // changed from object-contain
            priority
          />
        </div>
      </motion.div>

      {/* Centered Text Below */}
      <motion.div
        className="max-w-[987px] mx-auto text-center mt-10 px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h1
          className="text-[24px] sm:text-2xl md:text-3xl text-[#1F3A93] font-bold leading-snug font-grown"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          We help intimate wear brands around the world <br />
          bring quality products to life
        </motion.h1>

        <motion.p
          className="text-sm text-gray-700 mt-4 font-montserrat"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          With over a decade of experience, Inticede is a one stop solution to all your worries
        </motion.p>
      </motion.div>
    </section>
  );
}
