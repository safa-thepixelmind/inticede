'use client';

import Image from 'next/image';

export default function TrustedBySection() {
  return (
    <section className="bg-white px-4 md:px-10 py-16">
      {/* Combined Logo Banner */}
      <div className="max-w-[1210px] w-full mx-auto h-[227px] relative mb-10">
        <Image
          src="/images/trustedby/brandsbanner.jpg" // <- Your combined logo image here
          alt="Trusted Brands Logos"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Content Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Text Block */}
        <div className="max-w-[380px]">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Trusted by</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            We’re proud to be trusted by industry leaders like amante, Nykaa, Jockey, Zivame, and Enamor.
            These collaborations reflect our commitment to quality, reliability, and long-term partnerships
            in the intimate apparel space.
          </p>
        </div>

        {/* Image 1: Jockey */}
        <div className="w-full max-w-[368px] h-[619px] relative">
          <Image
            src="/images/trustedby/jockey.jpg"
            alt="Jockey Display"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>

        {/* Image 2: Nykaa */}
        <div className="w-full max-w-[369px] h-[619px] relative">
          <Image
            src="/images/trustedby/nykaa.png"
            alt="Nykaa Display"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      </div>
    </section>
  );
}
