'use client';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function TrustedBySection() {
  const controls = useAnimation();
  const marqueeRef = useRef(null);

  const brandImages = [
    '/images/trustedby/nykaa.jpg',
    '/images/trustedby/clovia.jpg',
    '/images/trustedby/enamor.jpg',
    '/images/trustedby/jokey.png',
    '/images/trustedby/zivame.jpg',
  ];

  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity,
      },
    });
  }, [controls]);

  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity,
      },
    });
  };

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-10 py-16 overflow-x-hidden">
      
      {/* Full-width Marquee showing 5 logos at a time */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="flex"
          animate={controls}
          ref={marqueeRef}
        >
          {[...brandImages, ...brandImages].map((src, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[20%] h-[80px]"
            >
              <Image
                src={src}
                alt={`Brand ${index}`}
                fill
                className="object-contain"
                sizes="20vw"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Content Grid */}
      <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Text Block */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 mb-4 font-grown">
            Trusted by
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-[500px]">
            We’re proud to be trusted by industry leaders like amante, Nykaa, Jockey, Zivame, and Enamor.
            These collaborations reflect our commitment to quality, reliability, and long-term partnerships
            in the intimate apparel space.
          </p>
        </motion.div>

        {/* Brand Image 1 */}
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

        {/* Brand Image 2 */}
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
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 369px"
          />
        </motion.div>
      </div>
    </section>
  );
}
