'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ProductSection({
  title,
  description,
  images,
}: {
  title: string;
  description: string;
  images: { src: string; name: string }[];
}) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [navReady, setNavReady] = useState(false);

  useEffect(() => {
    setNavReady(true);
  }, []);

  return (
    <section className="pt-20 pb-4 px-4 bg-white overflow-hidden">
      {/* Animate Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-grown text-[#1F3A93] text-center mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {/* Animate Description */}
      <motion.p
        className="text-center text-sm md:text-base font-montserrat font-medium max-w-xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>

      <div className="relative w-full">
        {navReady && (
          <Swiper
            modules={[Navigation, Autoplay]}
            loop
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper: SwiperType) => {
              const nav = swiper.params.navigation as {
                prevEl?: HTMLElement | null;
                nextEl?: HTMLElement | null;
              };
              nav.prevEl = prevRef.current;
              nav.nextEl = nextRef.current;
            }}
          >
            {images.map((fabric, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center px-4">
                  <div className="relative w-[295px] h-[295px] grayscale">
                    <Image
                      src={fabric.src}
                      alt={fabric.name}
                      fill
                      className="object-cover rounded"
                      sizes="(max-width: 768px) 100vw, 295px"
                      priority={idx === 0}
                    />
                  </div>
                  <p className="font-montserrat text-center text-sm md:text-base mt-2">
                    {fabric.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Navigation Arrows */}
<button
  ref={prevRef}
  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-[#d1d5db] text-xl rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-[#b0b4b9] transition z-10"
>
  &#8592;
</button>
<button
  ref={nextRef}
  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-[#d1d5db] text-xl rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-[#b0b4b9] transition z-10"
>
  &#8594;
</button>

      </div>

      <div className="text-center mt-8">
        <button className="bg-[#d1d5db] text-black font-montserrat text-sm px-6 py-2 rounded-full shadow hover:bg-[#b0b4b9] transition">
          Learn more
        </button>
      </div>
    </section>
  );
}
