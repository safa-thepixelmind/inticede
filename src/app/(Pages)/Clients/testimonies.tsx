'use client';

import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const testimonials = [
  {
    text: `Inticede’s design team truly understands how to merge creativity with market relevance. Their ability to interpret trends and translate them into commercially viable collections has made them an essential part of our development process.`,
    author: '— Creative Head, Global Intimatewear Brand',
  },
  {
    text: `From sourcing specialty fabrics to managing complex production timelines, Inticede handles it all with precision and professionalism. We trust them implicitly to deliver on time and without compromising on quality.`,
    author: '— Head of Sourcing, Leading Comfortwear Retailer',
  },
  {
    text: `They consistently exceed expectations with their trend awareness and communication.`,
    author: '— Innovation Manager, Fashion Brand',
  },
];

export default function TestimonialsSection() {
  const slides = [];

  for (let i = 0; i < testimonials.length; i++) {
    const first = testimonials[i];
    const second = testimonials[(i + 1) % testimonials.length];
    slides.push([first, second]);
  }

  return (
    <section className="w-full py-12 bg-white flex items-start justify-between">
      {/* Left Heading */}
      <h2 className="text-xl md:text-3xl font-semibold text-[#1E2A72] whitespace-nowrap px-4 md:px-16">
        Testimonies....
      </h2>

      {/* Right-aligned Swiper - absolutely to the right */}
      <div className="flex justify-end w-[calc(304px*2+24px)] mr-0">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={24}
          className="w-full"
        >
          {slides.map((pair, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex gap-6">
                {pair.map((t, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 rounded-[20px] p-6 w-[304px] h-[403px] flex flex-col justify-between"
                  >
                    <p className="text-sm text-gray-700">{t.text}</p>
                    <p className="text-sm mt-4 text-gray-500 font-medium">{t.author}</p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}