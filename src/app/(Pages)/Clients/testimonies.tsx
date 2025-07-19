'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';

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
  {
    text: `A reliable, innovative team — Inticede understands what fashion-forward truly means.`,
    author: '— Design Director, Youth Fashion Label',
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll progress of section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
offset: ['center end', 'end start']
// Triggers when section enters view
  });

  // Move horizontally (Right to Left) slowly
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['100%', `-${(testimonials.length - 1) * 100}%`]
  );

  // Local Lenis setup with smoother + slower scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5, // longer = slower transition
      easing: (t) => t, // linear for smooth feel
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden" // Taller for slower scroll
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center px-6 md:px-16">
        {/* Heading */}
        <h2 className="text-xl md:text-3xl font-semibold text-[#1E2A72] mb-10">
          Testimonies...
        </h2>

        {/* Scrolling cards */}
        <div className="relative overflow-hidden w-full">
          <motion.div
            style={{ x }}
            className="flex gap-8 w-fit"
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-[20px] p-6 w-[304px] h-[403px] shrink-0 flex flex-col justify-between"
              >
                <p className="text-sm text-gray-700">{t.text}</p>
                <p className="text-sm mt-4 text-gray-500 font-medium">
                  {t.author}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
