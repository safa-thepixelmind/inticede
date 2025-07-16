'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const services = [
  {
    title: 'Buying and Sourcing',
    lines: [
      'INTICEDE sources premium raw materials and finished goods at competitive prices.',
      'With a strong focus on quality and timely delivery.',
      'From fabrics and trims to final garments — we manage the complete sourcing process.',
      'We carefully vet factories and source trend-forward, unique products.',
    ],
    image: '/images/Services/ser1.jpg',
  },
  {
    title: 'Design and Product Development',
    lines: [
      'We forecast market shifts to build seasonal, demand-driven collections.',
      'Our design team supports styling, tech packs, sampling, and prototyping.',
      'We specialize in intimate-wear, comfort wear, and sportswear.',
      'We keep your collections future-ready through ongoing research.',
    ],
    image: '/images/Services/ser2.jpg',
  },
  {
    title: 'Quality Assurance',
    lines: [
      'At INTICEDE, quality is non-negotiable.',
      'We ensure top standards with strict, multi-stage inspections.',
      'Partnering with accredited labs for rigorous testing.',
      'Final checks align with client-defined guidelines.',
    ],
    image: '/images/Services/ser3.png',
  },
  {
    title: 'Product Execution and Logistics',
    lines: [
      'We coordinate global logistics seamlessly.',
      'Manage end-to-end documentation and compliance.',
      'Help brands meet tight timelines efficiently.',
      'Navigate both domestic and international supply chains.',
    ],
    image: '/images/Services/ser4.jpg',
  },
];

// Animation variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const lineVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full h-screen relative z-0 font-montserrat">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000 }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        className="w-full h-full"
      >
        {services.map((service, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-screen overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 grayscale z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Animated Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 md:px-8">
                <motion.div
                  key={activeIndex} // re-trigger animation on index change
                  initial="hidden"
                  animate="visible"
                  variants={container}
                  className="bg-white/70 px-6 py-8 md:p-10 rounded-lg max-w-3xl w-full"
                >
                  <motion.h2
                    className="text-[#1F3A93] text-xl md:text-4xl font-grown mb-4"
                    variants={lineVariant}
                  >
                    Services
                  </motion.h2>
                  <motion.h3
                    className="text-2xl md:text-3xl font-semibold text-[#1F3A93] mb-4 font-grown"
                    variants={lineVariant}
                  >
                    {service.title}
                  </motion.h3>

                  <div className="text-sm md:text-base text-black leading-relaxed space-y-2">
                    {service.lines.map((line, lineIdx) => (
                      <motion.p key={lineIdx} variants={lineVariant}>
                        {line}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <div
          ref={prevRef}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer"
        >
          <Image
            src="/images/Services/right.png"
            alt="Previous"
            width={36}
            height={36}
            className="rotate-180"
          />
        </div>

        <div
          ref={nextRef}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer"
        >
          <Image src="/images/Services/right.png" alt="Next" width={36} height={36} />
        </div>
      </Swiper>

      {/* Hide Swiper default arrows */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </section>
  );
}
