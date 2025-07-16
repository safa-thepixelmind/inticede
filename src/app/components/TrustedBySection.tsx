'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TrustedBySection() {
  return (
    <section className="bg-white px-4 md:px-10 py-16 overflow-x-hidden">
      {/* Brand Banner - Continuous Scroll */}
      <div className="relative w-full overflow-hidden max-w-[1210px] mx-auto mb-10 aspect-[1210/227]">
        <motion.div
          className="absolute top-0 left-0 w-[200%] h-full flex"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {/* Duplicate for seamless scroll */}
          <div className="w-1/2 h-full relative">
            <Image
              src="/images/trustedby/brandsbanner.jpg"
              alt="Trusted Brands Logos"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 1210px"
              priority
            />
          </div>
          <div className="w-1/2 h-full relative">
            <Image
              src="/images/trustedby/brandsbanner.jpg"
              alt="Duplicate Trusted Brands"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 1210px"
            />
          </div>
        </motion.div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Text Block */}
        <motion.div
          className="w-full max-w-[380px]"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 mb-4 font-grown">
            Trusted by
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            We’re proud to be trusted by industry leaders like amante, Nykaa, Jockey, Zivame, and Enamor.
            These collaborations reflect our commitment to quality, reliability, and long-term partnerships
            in the intimate apparel space.
          </p>
        </motion.div>

        {/* Image 1 */}
        <motion.div
          className="w-full aspect-[369/619] relative grayscale overflow-hidden rounded"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src="/images/trustedby/jockey.jpg"
            alt="Jockey Display"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 369px"
          />
        </motion.div>

        {/* Image 2 */}
        <motion.div
          className="w-full aspect-[369/619] relative grayscale overflow-hidden rounded"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src="/images/trustedby/nykaa.png"
            alt="Nykaa Display"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 369px"
          />
        </motion.div>
      </div>
    </section>
  );
}
