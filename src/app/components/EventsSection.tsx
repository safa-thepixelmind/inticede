'use client';
import Image from "next/image";

export default function EventsSection() {
  return (
    <section className="relative bg-[#E5E5E5] w-full py-16 overflow-hidden">
      {/* Heading */}
      <h2 className="text-[24px] text-[#1F3A93] font-semibold text-center mb-12 font-grown">
        Events
      </h2>

      {/* Left and Right Ellipses */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[918px] z-0 pointer-events-none">
        {/* Left Arc */}
        <div className="absolute w-[190px] h-[190px] border border-[#1F3A93] rounded-full -left-[105px] top-1/2 -translate-y-1/2 hidden md:block" />
        {/* Right Arc */}
        <div className="absolute w-[190px] h-[190px] border border-[#1F3A93] rounded-full -right-[105px] top-1/2 -translate-y-1/2 hidden md:block" />
      </div>

      {/* White Container */}
<div
  className="relative z-10 bg-[#FAF9F6] max-w-[918px] mx-auto px-4 sm:px-6 md:px-8 py-8 rounded-md overflow-hidden"
  style={{ width: "calc(100% - 40px)" }}
>
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
          {[
            { src: "/images/events/event1.jpg", label: "Intimasia Kochi 2018" },
            { src: "/images/events/event2.jpg", label: "Intimasia Mumbai 2023" },
            { src: "/images/events/event3.jpg", label: "SIUF 2025" },
            { src: "/images/events/event4.jpg", label: "Intimasia Chennai 2018" },
            { src: "/images/events/event5.jpg", label: "Intimasia Kochi 2018" },
            { src: "/images/events/event6.jpg", label: "SIUF 2025" },
          ].map((event, idx) => (
            <div className="flex flex-col items-center w-full" key={idx}>
              {/* Responsive Image Container */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
