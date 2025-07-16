'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const paragraph = `Inticede is a one-stop global sourcing and design house founded with the vision to elevate intimate wear brands from India and beyond. With over 20 years of experience, we offer complete solutions—from sourcing premium raw materials to delivering high-quality finished products tailored to your brand’s DNA. Backed by a strong global supplier network and deep technical know-how, we support every stage of the product lifecycle. Whether you’re developing lingerie, loungewear, shapewear, or athleisure, our team ensures precision in fit, function, and finish. Our design-led approach, combined with a commitment to ethical sourcing and innovation, positions us as a trusted partner for brands seeking excellence, efficiency, and scalability. At Inticede, we don’t just deliver products—we help shape better brands.`;

const words = paragraph.split(' ');

export default function WhoWeAre() {
  return (
    <section className="relative w-full px-4 py-16 flex flex-col lg:flex-row justify-start items-center lg:items-start max-w-[1200px] mx-auto overflow-hidden">
      {/* IMAGE BLOCK with Stagger */}
      <motion.div
        className="relative w-[90%] sm:w-[450px] md:w-[510px] h-[600px] sm:h-[700px] md:h-[750px] shrink-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.5,
            },
          },
        }}
      >
        {/* First Image */}
        <motion.div
          className="absolute top-0 left-0 z-10 w-[80%] sm:w-[448px] h-auto grayscale"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/AboutUsPage/first.jpg"
            alt="Main Visual"
            width={448}
            height={656}
            className="object-cover w-full h-auto"
          />
        </motion.div>

        {/* Second Image */}
        <motion.div
          className="absolute z-20 w-[40%] sm:w-[211px] h-auto top-[65%] left-[55%] sm:top-[379px] sm:left-[288px] grayscale"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/AboutUsPage/second.jpg"
            alt="Overlay Visual"
            width={211}
            height={317}
            className="object-cover w-full h-auto"
          />
        </motion.div>
      </motion.div>

      {/* TEXT BLOCK */}
      <motion.div
        className="mt-10 sm:mt-[80px] md:mt-[100px] lg:mt-[103px] lg:ml-8 max-w-[90%] sm:max-w-[560px] text-center lg:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.03,
            },
          },
        }}
      >
        {/* Heading */}
        <motion.h2
          className="text-[32px] sm:text-[40px] lg:text-[50px] leading-[40.5px] font-normal mb-6 text-[#1F3A93] font-grown"
          variants={{
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          Who we are?
        </motion.h2>

        {/* Word-by-word paragraph */}
        <motion.p className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[20.5px] font-normal text-black font-montserrat flex flex-wrap gap-x-1">
          {words.map((word, idx) => (
            <motion.span
              key={idx}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.2 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </motion.div>
    </section>
  );
}
