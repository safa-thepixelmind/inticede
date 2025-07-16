'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Advantages() {
  const cards = [
    {
      src: '/images/AboutUsPage/global.png',
      alt: 'Global Connections',
      title: 'Experience the benefits of our extensive industry expertise and global connections',
      desc:
        'We are a one-stop-shop providing complete sourcing solutions globally, managing each step in the global supply chain process for major intimate wear retailers, brands and manufacturers.',
    },
    {
      src: '/images/AboutUsPage/design.png',
      alt: 'Design Innovation',
      title: 'Bring your vision to life with our in-house design innovation market foresight',
      desc:
        'Backed by a skilled design and research team, INTICEDE helps intimatewear brands, retailers and manufacturers develop innovative collections while staying ahead of domestic and global trends.',
    },
    {
      src: '/images/AboutUsPage/logistic.jpg',
      alt: 'Logistics',
      title: 'Smart secure and on-line logistics globally aligned',
      desc:
        'INTICEDE ensures seamless coordination. We manage end-to-end documentation, compliance, and global shipping—helping brands meet timelines efficiently while navigating both domestic and international supply chains with ease.',
    },
  ];

  const wordVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="px-4 py-16 md:px-16 bg-white text-center font-montserrat overflow-hidden">
      {/* Heading Animation */}
      <motion.h2
        className="text-2xl md:text-4xl font-semibold text-indigo-900 mb-14 font-grown"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        The unique advantages of partnering with Inticede
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((card, i) => {
          const titleWords = card.title.split(' ');
          const descWords = card.desc.split(' ');

          return (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.04,
                    delayChildren: i * 0.2,
                  },
                },
              }}
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] grayscale border border-gray-200 rounded overflow-hidden">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain"
                  priority={i === 0}
                />
              </div>

              {/* Title word-by-word */}
              <h3 className="text-lg font-semibold mt-6 px-4 flex flex-wrap justify-center">
                {titleWords.map((word, index) => (
                  <motion.span key={index} variants={wordVariants} className="mr-1">
                    {word}
                  </motion.span>
                ))}
              </h3>

              {/* Description word-by-word */}
              <p className="text-gray-600 mt-2 text-sm px-4 flex flex-wrap justify-center">
                {descWords.map((word, index) => (
                  <motion.span key={index} variants={wordVariants} className="mr-1">
                    {word}
                  </motion.span>
                ))}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
