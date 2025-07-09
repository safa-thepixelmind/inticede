'use client';

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-[81px] bg-white px-4 sm:px-6 lg:px-8">
      {/* Container to align to Figma's width with small side paddings */}
      <div className="max-w-[1206px] mx-auto">
        {/* Hero Image */}
        <div className="w-full h-[744px] relative">
          <Image
            src="/images/homepage/hero.png"
            alt="Hero visual"
            fill
            className="object-cover rounded"
            priority
          />
        </div>

        {/* Text content below image */}
        <div className="max-w-[987px] mx-auto text-center mt-10 px-2">
          <h1 className="text-[24px] sm:text-2xl md:text-3xl text-[#1F3A93] font-bold leading-snug">
            We help intimate wear brands around the world <br />
            bring quality products to life
          </h1>
          <p className="text-sm text-gray-700 mt-4">
            With over a decade of experience, Inticede is a one stop solution to all your worries
          </p>
        </div>
      </div>
    </section>
  );
}
