'use client';

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-[81px] bg-white">
      {/* Full-width Hero Image */}
      <div className="relative w-full aspect-[1206/744]">
        <Image
          src="/images/homepage/hero.png"
          alt="Hero visual"
          fill
          className="object-contain rounded"
          priority
        />
      </div>

      {/* Centered Text Below */}
      <div className="max-w-[987px] mx-auto text-center mt-10 px-4 sm:px-6">
        <h1 className="text-[24px] sm:text-2xl md:text-3xl text-[#1F3A93] font-bold leading-snug font-grown">
          We help intimate wear brands around the world <br />
          bring quality products to life
        </h1>
        <p className="text-sm text-gray-700 mt-4 font-montserrat">
          With over a decade of experience, Inticede is a one stop solution to all your worries
        </p>
      </div>
    </section>
  );
}
