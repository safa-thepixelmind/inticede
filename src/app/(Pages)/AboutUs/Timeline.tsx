'use client';

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const timelineData = [
  {
    year: 2016,
    title: "FOUNDING OF INTICEDE BSD",
    image: "/images/AboutUsPage/yusuf3.jpg",
    description:
      "Inticede BSD Pvt. Ltd. is officially incorporated in Maharashtra as a bold venture to transform intimatewear sourcing in India. Envisioned as a bridge between design and manufacturing, it set out to serve lingerie and swimwear brands globally.",
  },
  {
    year: 2020,
    title: "FIRST BIG PLATFORM BREAKTHROUGH",
    image: "/images/AboutUsPage/slide1.jpg",
    description:
      "Inticede becomes a verified vendor on IndiaMART, tapping into a wider domestic network. This move marks the company’s pivot from boutique clients to large-scale sourcing solutions, establishing ties with over 35 factories across India specialising in lingerie, trims, laces, and sustainable fabrics.",
  },
  {
    year: 2022,
    title: "GOING GLOBAL WITH LITTLE LACEY",
    image: "/images/AboutUsPage/slide2.jpg",
    description:
      "Homegrown lingerie label Little Lacey partners with Inticede for end-to-end development, marking a major leap in Inticede’s domestic presence. The collaboration focuses on sustainable sourcing, modern silhouettes, and trend-aligned collections that cater to India’s evolving intimatewear market.",
  },
  {
    year: 2023,
    title: "POWERHOUSE PARTNERSHIPS",
    image: "/images/AboutUsPage/slide3.png",
    description: `Two major partnerships go live:\nZivame, one of India’s largest intimatewear brands, partners with Inticede to streamline vendor consolidation and sampling.\nClover Group, a rising force in luxury sleepwear, joins hands with Inticede to co-develop a capsule collection. This year also marks the launch of INTRIMS, Inticede’s own trims division offering functional and aesthetic lingerie trims like Loop-a-Lock® and Foamscoop®.`,
  },
  {
    year: 2024,
    title: "SHOWSTOPPER AT THE INTIMATEWEAR EXPO, PARIS",
    image: "/images/AboutUsPage/slide4.jpg",
    description:
      "Inticede debuts at Interfilière Paris, showcasing its in-house lingerie trims, biodegradable lace ranges, and tech-enabled design process. The booth draws over 500 visitors and earns a special mention in Lingerie Insight for “Innovative Vendor-Brand Collaboration.”",
  },
];

export default function Timeline() {
  const [selected, setSelected] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);

  // Auto-cycle timeline every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSelected((prev) => (prev + 1) % timelineData.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Scroll-triggered slide change (with cooldown)
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 2000) return;

      const rect = scrollRef.current.getBoundingClientRect();
      const top = rect.top;
      const bottom = rect.bottom;
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.5 && bottom > windowHeight * 0.5) {
        setSelected((prev) => (prev + 1) % timelineData.length);
        lastScrollTime.current = now;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="bg-[#e8e8e8] min-h-[calc(100vh-80px)] flex flex-col justify-between items-center py-6 px-4 sm:px-6 lg:px-8 overflow-x-hidden"
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-grown text-[#1F3A93] text-center mb-6">
        Inticede timeline
      </h2>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-8 w-full flex-1 max-w-6xl">
        {/* Image with animation */}
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

        {/* Text with animation */}
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

      {/* Timeline Lines + Years */}
      <div className="w-full max-w-6xl mt-8">
        {/* Vertical Bars */}
        <div className="hidden sm:flex justify-between items-end h-[40px]">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="w-[1px] h-full bg-[#1F3A93] opacity-60" />
          ))}
        </div>

        {/* Year Labels */}
        <div className="flex justify-between mt-2 text-xs sm:text-sm font-montserrat text-[#1F3A93]">
          {timelineData.map((item, index) => (
            <div
              key={item.year}
              className={`cursor-pointer text-center flex-1 transition duration-300 ${
                selected === index ? "font-semibold underline" : "opacity-70"
              }`}
              onClick={() => setSelected(index)}
            >
              {item.year}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
