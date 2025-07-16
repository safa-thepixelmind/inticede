'use client';

import { motion } from "framer-motion";
import Image from "next/image";

// Utility function to wrap each word in a motion.span
const AnimatedWords = ({ text }: { text: string }) => {
  const words = text.split(" ");

  return (
    <motion.p
      className="text-gray-700 text-[16px] leading-relaxed font-montserrat flex flex-wrap"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="mr-1"
          variants={{
            hidden: { opacity: 0, x: -10 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default function About() {
  return (
    <section className="w-full bg-white py-16 px-[38px]">
      <div className="max-w-[1117px] mx-auto flex flex-col md:flex-row gap-8">
        {/* Image with fade-in from left */}
        <motion.div
          className="w-full md:w-[578px] h-[391px] relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src="/images/homepage/about.jpg"
            alt="About Inticede"
            fill
            sizes="(max-width: 768px) 100vw, 578px"
            className="object-cover rounded-md"
            priority
          />
        </motion.div>

        {/* Text with staggered animation */}
        <div className="w-full md:w-[483px] flex flex-col justify-center">
          <motion.h2
            className="text-blue-900 text-[28px] font-semibold mb-4 font-grown"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
          >
            About Us
          </motion.h2>

          {/* Paragraph split word by word */}
          <AnimatedWords text="The name Inticede BSD is inspired by the word “intercede,” meaning to act or advocate on someone’s behalf — a role that perfectly reflects the function of a buying and sourcing agency. The latter part of the name pays tribute to the intimate apparel industry, which Inticede BSD is committed to supporting and elevating through expert sourcing solutions." />
        </div>
      </div>
    </section>
  );
}
