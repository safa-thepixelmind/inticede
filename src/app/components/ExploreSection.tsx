'use client';

import Image from 'next/image';

export default function ExploreSection() {
  return (
    <section className="bg-white px-4 md:px-10 py-16 space-y-20">
      {/* Top Section: Raw Material */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="max-w-[595px] space-y-6">
          <h2 className="text-3xl text-blue-900 font-semibold leading-tight">
            Explore our premium raw material collection
          </h2>
          <p className="text-gray-700 text-sm max-w-[534px]">
            Discover the essence of our craftsmanship with an extensive selection of raw material. From premium and functional fabrics to trims, we provide everything you need to create exceptional products.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 max-w-[533px]">
            <li>Premium fabrics for every design need.</li>
            <li>Versatile trims and finishes to elevate your creations.</li>
            <li>Add on intimate wear products</li>
          </ul>
          <button className="bg-[#D9D9D9] text-black text-sm px-4 py-1.5 rounded-[10px] w-[88px]">
            Learn more
          </button>
        </div>

        {/* Right Image */}
        <div className="w-[565px] h-[565px] relative flex-shrink-0">
          <Image
            src="/images/explore/rawmaterial.jpg"
            alt="Raw Materials"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      </div>

      {/* Bottom Section: Garment Collection */}
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-600 mb-2">Explore</p>
        <h2 className="text-2xl md:text-3xl text-blue-900 font-semibold leading-snug max-w-[1082px] mx-auto mb-4">
          A curated range of finished garments for comfort, function, and modern style
        </h2>
        <p className="text-sm text-gray-700 max-w-[643px] mx-auto mb-10">
          Discover our diverse collection of finished products, thoughtfully crafted to suit every need.
        </p>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10 justify-center items-start">
          {/* Row 1 */}
          <div className="flex flex-col items-center">
            <div className="w-[210px] h-[209px] relative">
              <Image src="/images/explore/intimate.jpg" alt="Intimate wear" layout="fill" objectFit="cover" />
            </div>
            <p className="mt-2 text-sm font-medium" style={{ color: '#1F3A93' }}>Intimate wear</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[210px] h-[210px] relative">
              <Image src="/images/explore/menswear.jpg" alt="Menswear" layout="fill" objectFit="cover" />
            </div>
            <p className="mt-2 text-sm font-medium" style={{ color: '#1F3A93' }}>Menswear</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[209px] h-[210px] relative">
              <Image src="/images/explore/loungewear.jpg" alt="Loungewear" layout="fill" objectFit="cover" />
            </div>
            <p className="mt-2 text-sm font-medium" style={{ color: '#1F3A93' }}>Loungewear</p>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col items-center">
            <div className="w-[211px] h-[211px] relative">
              <Image src="/images/explore/thermal.jpg" alt="Thermal Wear" layout="fill" objectFit="cover" />
            </div>
            <p className="mt-2 text-sm font-medium" style={{ color: '#1F3A93' }}>Thermal Wear</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[209px] h-[210px] relative">
              <Image src="/images/explore/shapewear.jpg" alt="Shapewear" layout="fill" objectFit="cover" />
            </div>
            <p className="mt-2 text-sm font-medium" style={{ color: '#1F3A93' }}>Shapewear</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[209px] h-[209px] relative">
              <Image src="/images/explore/athleisure.jpg" alt="Athleisure wear" layout="fill" objectFit="cover" />
            </div>
            <p className="mt-2 text-sm font-medium" style={{ color: '#1F3A93' }}>Athleisure wear</p>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="mt-10">
          <button className="bg-[#D9D9D9] text-black text-sm px-4 py-1.5 rounded-[10px] w-[88px]">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
