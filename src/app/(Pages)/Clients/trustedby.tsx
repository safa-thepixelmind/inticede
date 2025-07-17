'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Clients/hero.jpg"
          alt="Hero background"
          fill
          className="object-cover grayscale"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Animated Text Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-[300px] h-[150px] md:w-[651px] md:h-[179px] bg-[#D9D9D9]/40 rounded-md backdrop-blur-sm shadow-lg flex items-center justify-center p-4">
          <h1 className="text-center text-base md:text-3xl font-grown text-indigo-900 leading-snug">
            Trusted by Industry Leaders <br className="hidden md:block" />
            Built for Scalable Growth
          </h1>
        </div>
      </motion.div>
    </section>
  );
}
