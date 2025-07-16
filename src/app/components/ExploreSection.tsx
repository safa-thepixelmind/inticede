'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.3 },
  }),
};

export default function ExploreSection() {
  return (
    <section className="bg-white px-4 md:px-10 py-16 space-y-20 overflow-x-hidden">
      {/* Top Section: Raw Material */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="w-full lg:max-w-[595px] space-y-6">
          <motion.h2
            className="text-3xl text-blue-900 font-semibold leading-tight font-grown"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideIn}
            custom={0}
          >
            Explore our premium raw material collection
          </motion.h2>

          <motion.p
            className="text-gray-700 text-sm max-w-[534px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideIn}
            custom={1}
          >
            Discover the essence of our craftsmanship with an extensive selection of raw material. From premium and functional fabrics to trims, we provide everything you need to create exceptional products.
          </motion.p>

          <motion.ul
            className="list-disc list-inside text-sm text-gray-800 space-y-1 max-w-[533px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideIn}
            custom={2}
          >
            <li>Premium fabrics for every design need.</li>
            <li>Versatile trims and finishes to elevate your creations.</li>
            <li>Add on intimate wear products</li>
          </motion.ul>

          {/* Static Button (no animation) */}
          <button className="bg-[#D9D9D9] text-black text-sm px-4 py-1.5 rounded-[10px] w-[88px]">
            Learn more
          </button>
        </div>

        {/* Right Image */}
        <motion.div
          className="w-full lg:w-[565px] aspect-[1/1] relative grayscale rounded overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={slideIn}
          custom={3}
        >
          <Image
            src="/images/explore/rawmaterial.jpg"
            alt="Raw Materials"
            fill
            sizes="(max-width: 768px) 100vw, 565px"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
