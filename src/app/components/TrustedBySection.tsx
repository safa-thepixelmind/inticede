'use client';

import Image from 'next/image';

export default function TrustedBySection() {
  return (
    <section className="bg-white px-4 md:px-10 py-16 overflow-x-hidden">
      {/* Combined Logo Banner (responsive with aspect ratio) */}
      <div className="w-full max-w-[1210px] mx-auto aspect-[1210/227] relative mb-10">
        <Image
          src="/images/trustedby/brandsbanner.jpg"
          alt="Trusted Brands Logos"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 1210px"
          priority
        />
      </div>

      {/* Content Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Text Block */}
        <div className="w-full max-w-[380px]">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 mb-4 font-grown">
            Trusted by
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            We’re proud to be trusted by industry leaders like amante, Nykaa, Jockey, Zivame, and Enamor.
            These collaborations reflect our commitment to quality, reliability, and long-term partnerships
            in the intimate apparel space.
          </p>
        </div>

        {/* Image 1: Jockey */}
        <div className="w-full aspect-[369/619] relative grayscale overflow-hidden rounded">
          <Image
            src="/images/trustedby/jockey.jpg"
            alt="Jockey Display"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 369px"
          />
        </div>

        {/* Image 2: Nykaa */}
        <div className="w-full aspect-[369/619] relative grayscale overflow-hidden rounded">
          <Image
            src="/images/trustedby/nykaa.png"
            alt="Nykaa Display"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 369px"
          />
        </div>
      </div>
    </section>
  );
}
