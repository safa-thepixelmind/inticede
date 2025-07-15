'use client';

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

export default function SeamlessSolutionsSection() {
  return (
    <section className="w-full bg-white pt-12">
      {/* Text content */}
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-indigo-900 leading-snug font-grown">
          While you dream it, we build it,
          <br />
          <span className="text-gray-700">
            End-to-end solutions, done seamlessly
          </span>
        </h2>
        <p className="mt-4 text-gray-600 font-montserrat">
          At Inticede, we believe every dream idea has great strength — skilled
          hands, sharp eyes, and seamless systems that transform ideas into
          reality. <br />
          We’re the force behind your brand, managing the complexities — from
          technical fittings to global sourcing — so you can focus on imagining
          freely, creating boldly, and building beautifully.
          <br />
          Because every vision deserves to rise-with clarity, confidence, and
          ease.
        </p>
      </div>

      {/* Full-width Swiper */}
      <div className="mt-10 w-screen relative left-1/2 -translate-x-1/2">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1.2}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            el: '.tailwind-pagination',
            clickable: true,
            renderBullet: (_, className) =>
              `<span class="${className} inline-block w-2.5 h-2.5 rounded-full mx-1"></span>`,
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hiddenh-[400px] md:h-[600px] lg:h-[800px] w-full object-contain">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={1000}
                  height={600}
                  className="w-full object-cover grayscale"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tailwind pagination bullets (custom class) */}
        <div className="tailwind-pagination flex justify-center mt-4 [&>span]:bg-gray-400 [&>.swiper-pagination-bullet-active]:bg-white [&>.swiper-pagination-bullet-active]:border [&>.swiper-pagination-bullet-active]:border-gray-400"></div>
      </div>
    </section>
  );
}  