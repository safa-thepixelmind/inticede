'use client';

import Image from 'next/image';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const services = [
  {
    title: 'Buying and Sourcing',
    description: (
      <>
        <p><strong>INTICEDE</strong> sources premium raw materials and finished goods at competitive prices, with a strong focus on quality and timely delivery.</p>
        <p className="mt-2"><strong>End-to-End Solutions</strong><br />
          From fabrics and trims to final garments — we manage the complete sourcing and production process under one roof.
        </p>
        <p className="mt-2"><strong>Smart Vendor & Product Selection</strong><br />
          We carefully vet factories and source trend-forward, unique products that help brands stand out.
        </p>
      </>
    ),
    image: '/images/Services/ser1.jpg',
  },
  {
    title: 'Design and product development',
    description: (
      <>
        <p><strong>Trend-Led Design Solutions</strong><br />
          We forecast market shifts to help brands build seasonal, demand-driven collections.
        </p>
        <p className="mt-2">
          Our design team delivers end-to-end support — from styling and tech packs to sampling and prototyping.
        </p>
        <p className="mt-2">
          Specialising in intimate-wear, comfort wear, and sportswear, we offer affordable, market-ready solutions.
        </p>
        <p className="mt-2">
          With ongoing research into trends, techniques, and innovations, we keep your collections future-ready.
        </p>
      </>
    ),
    image: '/images/Services/ser2.jpg',
  },
  {
    title: 'Quality Assurance',
    description: (
      <>
        <p>
          At <strong>INTICEDE</strong>, quality is non-negotiable. We ensure every product meets the highest standards through strict, multi-stage inspections and close collaboration with accredited labs for rigorous testing.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Full inspection for specialized and niche orders</li>
          <li>Rigorous fabric inspection systems</li>
          <li>Customized testing based on client benchmarks</li>
          <li>Strict pre-delivery inspections</li>
          <li>Final checks aligned with client-defined guidelines</li>
        </ul>
      </>
    ),
    image: '/images/Services/ser3.png',
  },
  {
    title: 'Product execution and logistics',
    description: (
      <>
        <p>
          At <strong>INTICEDE</strong>, we ensure every product meets the highest standards through strict, multi-stage inspections and collaboration with accredited labs for rigorous testing.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Full inspection for specialized and niche orders</li>
          <li>Rigorous fabric inspection systems</li>
          <li>Customized testing based on client benchmarks</li>
          <li>Strict pre-delivery inspections</li>
          <li>Final checks aligned with client-defined guidelines</li>
        </ul>
      </>
    ),
    image: '/images/Services/ser4.jpg',
  },
];

export default function ServicesPage() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full h-screen relative z-0 font-montserrat">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000 }}
        loop
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

              <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 md:px-8">
                <h2 className="text-[#1F3A93] text-xl md:text-4xl font-grown mb-4">Services</h2>
                <div className="bg-white/70 px-6 py-8 md:p-10 rounded-lg max-w-3xl w-full">
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#1F3A93] mb-4 font-grown">
                    {service.title}
                  </h3>
                  <div className="text-sm md:text-base text-black leading-relaxed">
                    {service.description}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom navigation arrows */}
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
