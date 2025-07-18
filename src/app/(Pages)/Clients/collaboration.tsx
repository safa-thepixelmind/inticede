'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const images = [
  '/images/Clients/image1.jpg',
  '/images/Clients/image2.png',
  '/images/Clients/image3.png',
  '/images/Clients/image4.jpg',
];

// Dynamic Counter
function Counter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const incrementTime = 30;
    const steps = Math.ceil(duration / incrementTime);
    const increment = (end - start) / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration, isInView]);

  return (
    <span ref={ref}>
      {target >= 1_000_000 ? `${(count / 1_000_000).toFixed(1)}M+` : `${count.toLocaleString()}+`}
    </span>
  );
}

export default function ImpactSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

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
    <section className="w-full bg-[#F3F3F3] min-h-screen overflow-hidden">
      <div className="w-full h-full px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16 lg:py-16 xl:px-20 xl:py-20 flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center h-full max-h-[90vh] overflow-y-auto">
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
            Our collaborations have launched products shaped industries and sparked millions of conversations
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            {[
              { value: 9000000, text: 'We have helped over a hundred ideas take flight' },
              { value: 1000, text: 'We have collaborated with brands around the world' },
              { value: 10000000, text: 'Every product build is a dream come true' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ delay: 0.2 * (index + 1) }}
              >
                <p className="text-xl font-bold text-indigo-900">
                  <Counter target={item.value} />
                </p>
                <p className="text-sm text-gray-600 mt-1 font-montserrat">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 -mx-4 sm:-mx-6 md:-mx-10 lg:-mx-16 xl:-mx-20 flex justify-center items-center">
          <div className="relative w-full max-w-[90%] aspect-[3/3] overflow-hidden">
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
        </div>
      </div>
    </section>
  );
}
