'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const services = [
  {
    title: 'Buying and Sourcing',
    description: (
      <>
        <strong>INTICEDE</strong> sources premium raw materials and finished goods at competitive prices, with a strong focus on quality and timely delivery. <br />
        <strong>End-to-End Solutions</strong> <br />
        From fabrics and trims to final garments — we manage the complete sourcing and production process under one roof. <br />
        <strong>Smart Vendor & Product Selection</strong> <br />
        We carefully vet factories and source trend-forward, unique products that help brands stand out.
      </>
    ),
    image: '/images/Services/ser1.jpg',
  },
  {
    title: 'Design and product development',
    description: (
      <>
        <strong>Trend-Led Design Solutions</strong> <br />
        We forecast market shifts to help brands build seasonal, demand-driven collections. <br />
        Our design team delivers end-to-end support — from styling and tech packs to sampling and prototyping. <br />
        Specialising in intimate-wear, comfort wear, and sportswear, we offer affordable, market-ready solutions. <br />
        With ongoing research into trends, techniques, and innovations, we keep your collections future-ready.
      </>
    ),
    image: '/images/Services/ser2.jpg',
  },
  {
    title: 'Quality Assurance',
    description: (
      <>
        At <strong>INTICEDE</strong>, quality is non-negotiable. We ensure every product meets the highest standards through strict, multi-stage inspections and close collaboration with accredited labs for rigorous testing. <br />
        Timelines are monitored with precision to guarantee on-time delivery, every time. <br />
        <ul className="list-disc list-inside">
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
        At <strong>INTICEDE</strong>, quality is non-negotiable. We ensure every product meets the highest standards through strict, multi-stage inspections and close collaboration with accredited labs for rigorous testing. Timelines are monitored with precision to guarantee on-time delivery, every time. <br />
        <ul className="list-disc list-inside">
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

export default function Services() {
  return (
    <section className="w-full h-screen font-montserrat relative z-0">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-screen bg-cover bg-center"
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            >
              {/* Dark overlay over the background image */}
              <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />

              {/* Overlayed content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 md:px-12">
                <h2 className="text-white text-xl md:text-4xl mb-6 font-grown">Services</h2>

                <div className="bg-white bg-opacity-80 p-6 md:p-10 rounded-lg max-w-3xl w-full">
                  <h3 className="text-2xl md:text-3xl font-grown text-[#1F3A93] mb-4">
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
      </Swiper>
    </section>
  );
}
