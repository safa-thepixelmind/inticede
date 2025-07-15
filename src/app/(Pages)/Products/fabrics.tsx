'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const fabrics = [
  { src: '/images/products/fabric1.jpg', name: 'Lycra blend' },
  { src: '/images/products/fabric2.jpg', name: 'Bamboo fabric' },
  { src: '/images/products/fabric3.jpg', name: 'Polyamide fabric' },
  { src: '/images/products/fabric4.jpg', name: 'Cotton Spandex' },
  { src: '/images/products/fabric5.jpg', name: 'DTY' },
  { src: '/images/products/fabric6.jpg', name: 'Power mesh' },
  { src: '/images/products/fabric7.jpg', name: 'Satin' },
  { src: '/images/products/fabric8.jpg', name: 'Jersey knit' },
  { src: '/images/products/fabric9.jpg', name: 'Mesh' },
];

export default function FabricSection() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [navReady, setNavReady] = useState(false);

  useEffect(() => {
    setNavReady(true);
  }, []);

  return (
    <section className="pt-16 pb-4 px-4 bg-white overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-grown text-[#1F3A93] text-center mb-4">
        Fabrics
      </h2>

      <p className="text-center text-sm md:text-base font-montserrat font-medium max-w-xl mx-auto mb-10">
        From concept to creation, we provide all kinds of fabrics required for your production
        needs sourced with precision and reliability
      </p>

      <div className="relative max-w-[1200px] mx-auto">
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
            {fabrics.map((fabric, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center px-2">
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
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-[#d1d5db] text-xl rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-[#b0b4b9] transition z-10"
        >
          &#8592;
        </button>
        <button
          ref={nextRef}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-[#d1d5db] text-xl rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-[#b0b4b9] transition z-10"
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
