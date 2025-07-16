'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const images = [
  '/images/AboutUsPage/img1.png',
  '/images/AboutUsPage/img2.png',
  '/images/AboutUsPage/img3.png',
  '/images/AboutUsPage/img1.png',
  '/images/AboutUsPage/img2.png',
  '/images/AboutUsPage/img3.png',
];

const wordVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function SeamlessSolutionsSection() {
  const paragraph = `At Inticede, we believe every dream idea has great strength — skilled hands, sharp eyes, and seamless systems that transform ideas into reality. We’re the force behind your brand, managing the complexities — from technical fittings to global sourcing — so you can focus on imagining freely, creating boldly, and building beautifully. Because every vision deserves to rise — with clarity, confidence, and ease.`;

  const words = paragraph.split(' ');

  return (
    <section className="w-full bg-white pt-12 overflow-hidden">
      {/* Text content with animation */}
      <motion.div
        className="max-w-5xl mx-auto text-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-indigo-900 leading-snug font-grown"
          variants={wordVariants}
        >
          While you dream it we build it
        </motion.h2>
        <motion.h2
          className="text-gray-700 text-xl md:text-2xl mt-1 font-grown"
          variants={wordVariants}
        >
          End-to-end solutions done seamlessly
        </motion.h2>

        <motion.p
          className="mt-6 text-gray-600 text-sm md:text-base font-montserrat flex flex-wrap justify-center gap-1"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.03,
              },
            },
          }}
        >
          {words.map((word, index) => (
            <motion.span key={index} variants={wordVariants}>
              {word}
            </motion.span>
          ))}
        </motion.p>
      </motion.div>

      {/* Swiper Carousel (No animation added) */}
      <div className="mt-10 w-screen relative left-1/2 -translate-x-1/2">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1.2}
          spaceBetween={20}
          centeredSlides
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            el: '.tailwind-pagination',
            clickable: true,
            renderBullet: (_, className) =>
              `<span class="${className} custom-bullet"></span>`,
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden h-[400px] md:h-[600px] lg:h-[800px] w-full">
                <Image
                  src={src}
                  alt={`About Us slide ${index + 1}`}
                  width={1000}
                  height={600}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Tailwind Pagination Style */}
        <div className="tailwind-pagination flex justify-center mt-4">
          <style jsx>{`
            .custom-bullet {
              @apply inline-block w-2.5 h-2.5 rounded-full mx-1 bg-gray-400;
            }
            .swiper-pagination-bullet-active.custom-bullet {
              @apply bg-white border border-gray-400;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
