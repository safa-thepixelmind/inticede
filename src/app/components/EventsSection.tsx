'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function EventsSection() {
  const events = [
    { src: "/images/events/event1.jpg", label: "Intimasia Kochi 2018" },
    { src: "/images/events/event2.jpg", label: "Intimasia Mumbai 2023" },
    { src: "/images/events/event3.jpg", label: "SIUF 2025" },
    { src: "/images/events/event4.jpg", label: "Intimasia Chennai 2018" },
    { src: "/images/events/event5.jpg", label: "Intimasia Kochi 2018" },
    { src: "/images/events/event6.jpg", label: "SIUF 2025" },
  ];

  return (
    <section className="relative bg-[#E5E5E5] w-full py-16 overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-[24px] text-[#1F3A93] font-semibold text-center mb-12 font-grown"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Events
      </motion.h2>

      {/* Left and Right Ellipses */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[918px] z-0 pointer-events-none">
        <div className="absolute w-[190px] h-[190px] border border-[#1F3A93] rounded-full -left-[105px] top-1/2 -translate-y-1/2 hidden md:block" />
        <div className="absolute w-[190px] h-[190px] border border-[#1F3A93] rounded-full -right-[105px] top-1/2 -translate-y-1/2 hidden md:block" />
      </div>

      {/* White Container */}
      <div
        className="relative z-10 bg-[#FAF9F6] max-w-[918px] mx-auto px-4 sm:px-6 md:px-8 py-8 rounded-md overflow-hidden"
        style={{ width: "calc(100% - 40px)" }}
      >
        {/* Animated Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center w-full"
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Image */}
              <div className="w-full aspect-[278/258] relative grayscale overflow-hidden rounded">
                <Image
                  src={event.src}
                  alt={event.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 278px"
                />
              </div>
              <p className="text-[#1F3A93] text-sm mt-2 text-center">{event.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
