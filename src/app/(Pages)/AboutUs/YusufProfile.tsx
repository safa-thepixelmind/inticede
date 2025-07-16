'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function YusufProfile() {
  const wordVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const paragraphText = [
    "Yusuf Dohadwala is the driving force behind Inticede BSD — a visionary with over 20 years of experience in the innerwear, comfortwear, and activewear industry.",
    "Personally connected with over 1,000+ brands and retailers across India and abroad, Yusuf has built more than just a company — he has shaped the ecosystem around it. His leadership bridges the gap between design, sourcing, and execution, empowering brands with strategic clarity and reliable systems.",
    "He also serves as:",
    "Under Yusuf’s guidance, Inticede has become India’s first and leading buying, sourcing, and design house dedicated to intimatewear — servicing 100+ brands and managing 200+ vendor partnerships globally."
  ];

  const listItems = [
    "CEO of the Intimate Apparel Association of India (IAAI)",
    "Joint Secretary (West) at FOHMA (Federation of Hosiery Manufacturers Association)",
    "Chief Organiser of major B2B trade shows like INTIMASIA, Source TX, Lingerie Fashion Week, and Changer Masters — bringing the industry together under one roof",
    "Chief Editor & Publisher of Inner Secrets, India’s leading B2B magazine for intimatewear for over 20 years"
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-20 font-montserrat overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-center text-2xl md:text-4xl font-semibold text-indigo-900 mb-10 font-grown"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        Yusuf Dohadwala
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-6xl mx-auto">
        {/* Image */}
        <motion.div
          className="w-full md:w-1/3"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full h-[400px] grayscale rounded overflow-hidden">
            <Image
              src="/images/AboutUsPage/yusuf.png"
              alt="Yusuf Dohadwala"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <div className="w-full md:w-2/3 text-justify text-gray-700 text-sm leading-6">
          {paragraphText.map((text, idx) => {
            if (text === "He also serves as:") {
              return (
                <motion.p
                  key={idx}
                  className="mt-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.03 }
                    }
                  }}
                >
                  {text.split(" ").map((word, i) => (
                    <motion.span key={i} variants={wordVariants} className="mr-1">
                      {word}
                    </motion.span>
                  ))}
                </motion.p>
              );
            }

            return (
              <motion.p
                key={idx}
                className={idx === 0 ? "" : "mt-4"}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.03 }
                  }
                }}
              >
                {text.split(" ").map((word, i) => (
                  <motion.span key={i} variants={wordVariants} className="mr-1">
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            );
          })}

          {/* List Items */}
          <ul className="list-disc list-inside mt-2 ml-4">
            {listItems.map((item, i) => (
              <motion.li
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.02 }
                  }
                }}
                className="mt-2"
              >
                {item.split(" ").map((word, j) => (
                  <motion.span key={j} variants={wordVariants} className="mr-1">
                    {word}
                  </motion.span>
                ))}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
