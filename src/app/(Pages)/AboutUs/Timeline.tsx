'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const timelineData = [
  {
    year: 2016,
    title: 'FOUNDING OF INTICEDE BSD',
    image: '/images/AboutUsPage/yusuf3.jpg',
    description: 'Inticede BSD Pvt. Ltd. is officially incorporated in Maharashtra as a bold venture to transform intimatewear sourcing in India. Envisioned as a bridge between design and manufacturing, it set out to serve lingerie and swimwear brands globally.',
  },
  {
    year: 2020,
    title: 'FIRST BIG PLATFORM BREAKTHROUGH',
    image: '/images/AboutUsPage/slide1.jpg',
    description: 'Inticede becomes a verified vendor on IndiaMART, tapping into a wider domestic network. This move marks the company’s pivot from boutique clients to large-scale sourcing solutions, establishing ties with over 35 factories across India specialising in lingerie, trims, laces, and sustainable fabrics.',
  },
  {
    year: 2022,
    title: 'GOING GLOBAL WITH LITTLE LACEY',
    image: '/images/AboutUsPage/slide2.jpg',
    description: 'Homegrown lingerie label Little Lacey partners with Inticede for end-to-end development, marking a major leap in Inticede’s domestic presence. The collaboration focuses on sustainable sourcing, modern silhouettes, and trend-aligned collections that cater to India’s evolving intimatewear market.',
  },
  {
  year: 2023,
  title: 'POWERHOUSE PARTNERSHIPS',
  image: '/images/AboutUsPage/slide3.png',
  description: `Two major partnerships go live:
Zivame, one of India’s largest intimatewear brands, partners with Inticede to streamline vendor consolidation and sampling.
Clover Group, a rising force in luxury sleepwear, joins hands with Inticede to co-develop a capsule collection.
This year also marks the launch of INTRIMS, Inticede’s own trims division offering functional and aesthetic lingerie trims like Loop-a-Lock® and Foamscoop®.`,
},
{
  year: 2024,
  title: 'SHOWSTOPPER AT THE INTIMATEWEAR EXPO, PARIS',
  image: '/images/AboutUsPage/slide4.jpg',
  description: `Inticede debuts at Interfilière Paris, showcasing its in-house lingerie trims, biodegradable lace ranges, and tech-enabled design process. The booth draws over 500 visitors and earns a special mention in Lingerie Insight for “Innovative Vendor-Brand Collaboration.”`,
}

];

export default function Timeline() {
  const [selected, setSelected] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Setup Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Auto cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setSelected((prev) => (prev + 1) % timelineData.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Slide change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 2000) return;

      const rect = scrollRef.current.getBoundingClientRect();
      const centerY = window.innerHeight / 2;

      if (rect.top < centerY && rect.bottom > centerY) {
        setSelected((prev) => (prev + 1) % timelineData.length);
        lastScrollTime.current = now;
      }

      if (progressBarRef.current) {
        const scrollTop = window.scrollY;
        const offsetTop = scrollRef.current.offsetTop;
        const height = scrollRef.current.offsetHeight;
        const progress = Math.min(Math.max((scrollTop - offsetTop) / height, 0), 1);
        progressBarRef.current.style.width = `${progress * 100}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="bg-[#e8e8e8] min-h-[calc(100vh-80px)] flex flex-col justify-between items-center py-6 px-4 sm:px-6 lg:px-8 overflow-x-hidden relative"
    >
      {/* Scroll progress bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-300 z-10">
        <div
          ref={progressBarRef}
          className="h-full bg-[#1F3A93] transition-all duration-200"
        />
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-grown text-[#1F3A93] text-center mb-6">
        Inticede timeline
      </h2>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-8 w-full flex-1 max-w-6xl">
        {/* Image */}
        <div className="relative w-[240px] sm:w-[280px] md:w-[300px] h-[320px] sm:h-[360px] flex-shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={timelineData[selected].image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={timelineData[selected].image}
                alt={timelineData[selected].title}
                fill
                sizes="(max-width: 768px) 240px, (max-width: 1024px) 280px, 300px"
                className="object-contain grayscale"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text */}
        <div className="text-left max-w-xl text-[#1F3A93] px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={timelineData[selected].title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm sm:text-base font-montserrat mb-1">
                {timelineData[selected].year}
              </p>
              <h3 className="text-base sm:text-lg md:text-xl font-bold uppercase font-montserrat mb-3">
                {timelineData[selected].title}
              </h3>
              <p className="text-sm sm:text-base font-montserrat leading-relaxed whitespace-pre-line">
                {timelineData[selected].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Timeline Lines + Diamonds + Years */}
      <div className="w-full max-w-6xl mt-8 relative h-[70px]">
        {/* Vertical Bars and Diamonds */}
        <div className="absolute top-0 left-0 w-full h-[50px]">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 w-[1px] h-full bg-[#1F3A93] opacity-60"
              style={{ left: `${(i / 49) * 100}%` }}
            >
              {timelineData.map((item, index) => {
                const lineIndex = Math.floor(50 / (timelineData.length - 1)) * index;
                if (i === lineIndex) {
                  return (
                    <div
                      key={item.year}
                      className={`absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 cursor-pointer transition-all duration-300 ${
                        selected === index
                          ? 'bg-[#1F3A93] shadow-[0_0_8px_2px_rgba(31,58,147,0.6)] scale-110'
                          : 'bg-[#1F3A93]/70 hover:bg-[#1F3A93] hover:shadow-[0_0_6px_2px_rgba(31,58,147,0.5)]'
                      }`}
                      onClick={() => setSelected(index)}
                    />
                  );
                }
                return null;
              })}
            </div>
          ))}
        </div>

        {/* Year Labels */}
        <div className="absolute top-[52px] left-0 w-full h-[18px]">
          {timelineData.map((item, index) => {
            const left = (index / (timelineData.length - 1)) * 100;
            return (
              <div
                key={item.year}
                className={`absolute -translate-x-1/2 text-xs sm:text-sm font-montserrat text-[#1F3A93] cursor-pointer transition duration-300 ${
                  selected === index ? 'font-semibold underline' : 'opacity-70'
                }`}
                style={{ left: `${left}%` }}
                onClick={() => setSelected(index)}
              >
                {item.year}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
