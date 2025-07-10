'use client';
import Image from "next/image";

export default function EventsSection() {
  return (
    <section className="relative bg-[#E5E5E5] w-full py-16 overflow-hidden">
      {/* Heading */}
      <h2 className="text-[24px] text-[#1F3A93] font-semibold text-center mb-12 font-grown">
        Events
      </h2>

      {/* Ellipses - now relative to section */}
      <div className="absolute w-[190px] h-[190px] border border-[#1F3A93] rounded-full top-[309px] left-[98px] hidden md:block z-0"></div>
      <div className="absolute w-[190px] h-[190px] border border-[#1F3A93] rounded-full top-[309px] right-[98px] hidden md:block z-0"></div>

      {/* Inner white container */}
      <div className="relative bg-[#FAF9F6] max-w-[918px] mx-auto p-4 md:p-8 rounded-md z-10">
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Row 1 */}
          <div className="flex flex-col items-center">
            <div className="w-[278px] h-[258px] relative">
              <Image src="/images/events/event1.jpg" alt="Intimasia Kochi 2018" layout="fill" objectFit="cover" />
            </div>
            <p className="text-[#1F3A93] text-sm mt-2">Intimasia Kochi 2018</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[280px] h-[258px] relative">
              <Image src="/images/events/event2.jpg" alt="Intimasia Mumbai 2023" layout="fill" objectFit="cover" />
            </div>
            <p className="text-[#1F3A93] text-sm mt-2">Intimasia Mumbai 2023</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[280px] h-[258px] relative">
              <Image src="/images/events/event3.jpg" alt="SIUF 2025" layout="fill" objectFit="cover" />
            </div>
            <p className="text-[#1F3A93] text-sm mt-2">SIUF 2025</p>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col items-center">
            <div className="w-[278px] h-[258px] relative">
              <Image src="/images/events/event4.jpg" alt="Intimasia Chennai 2018" layout="fill" objectFit="cover" />
            </div>
            <p className="text-[#1F3A93] text-sm mt-2">Intimasia Chennai 2018</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[278px] h-[258px] relative">
              <Image src="/images/events/event5.jpg" alt="Intimasia Kochi 2018" layout="fill" objectFit="cover" />
            </div>
            <p className="text-[#1F3A93] text-sm mt-2">Intimasia Kochi 2018</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[278px] h-[258px] relative">
              <Image src="/images/events/event6.jpg" alt="SIUF 2025" layout="fill" objectFit="cover" />
            </div>
            <p className="text-[#1F3A93] text-sm mt-2">SIUF 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
