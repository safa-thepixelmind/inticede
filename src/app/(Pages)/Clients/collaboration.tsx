'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
  '/images/Clients/image1.jpg',
  '/images/Clients/image2.png',
  '/images/Clients/image3.png',
  '/images/Clients/image4.jpg',
];

export default function ImpactSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen bg-white">
      {/* Left Column */}
      <div className="md:w-1/2 bg-[#F3F3F3] p-8 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="text-sm text-gray-800 mb-3 bg-gray-300 px-2 py-1 w-fit rounded"
        >
          Impact since 2016
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl font-grown text-indigo-900 mb-6 max-w-xl leading-tight font-semibold"
        >
          Our collaboration have launched products shaped industries and sparked millions of conversations
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
          {[
            { value: '9M+', text: 'We have helped over a hundred ideas take flight' },
            { value: '1000+', text: 'We have collaborated with brands around the world' },
            { value: '10M+', text: 'Every product build is a dream come true' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ delay: 0.2 * (index + 1) }}
            >
              <p className="text-xl font-bold text-indigo-900">{item.value}</p>
              <p className="text-sm text-gray-600 mt-1 font-montserrat">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2 w-full flex flex-col items-center justify-center px-2 py-6 bg-[#F3F3F3]">
        <div className="relative w-full max-w-[600px] aspect-[3/4] overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex]}
                alt={`Impact ${currentIndex + 1}`}
                fill
                className="object-contain grayscale"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="text-xs text-gray-500 mt-4 px-4 text-center font-montserrat">
          Mr. Rahul Sharma, Vice President Nykaa at Inticede office
        </p>
      </div>
    </section>
  );
}
