'use client';

import Image from 'next/image';

export default function ExploreSection() {
  return (
    <section className="bg-white px-4 md:px-10 py-16 space-y-20 overflow-x-hidden">
      {/* Top Section: Raw Material */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="w-full lg:max-w-[595px] space-y-6">
          <h2 className="text-3xl text-blue-900 font-semibold leading-tight font-grown">
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

        {/* Right Image (Responsive) */}
        <div className="w-full lg:w-[565px] aspect-[1/1] relative grayscale rounded overflow-hidden">
          <Image
            src="/images/explore/rawmaterial.jpg"
            alt="Raw Materials"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 565px"
          />
        </div>
      </div>

      {/* Bottom Section: Garment Collection */}
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-600 mb-2">Explore</p>
        <h2 className="text-2xl md:text-3xl text-blue-900 font-semibold leading-snug max-w-[1082px] mx-auto mb-4 font-grown">
          A curated range of finished garments for comfort function and modern style
        </h2>
        <p className="text-sm text-gray-700 max-w-[643px] mx-auto mb-10">
          Discover our diverse collection of finished products, thoughtfully crafted to suit every need.
        </p>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 justify-center items-start">
          {[
            { src: "/images/explore/intimate.jpg", alt: "Intimate wear", label: "Intimate wear" },
            { src: "/images/explore/menswear.jpg", alt: "Menswear", label: "Menswear" },
            { src: "/images/explore/loungewear.jpg", alt: "Loungewear", label: "Loungewear" },
            { src: "/images/explore/thermal.jpg", alt: "Thermal Wear", label: "Thermal Wear" },
            { src: "/images/explore/shapewear.jpg", alt: "Shapewear", label: "Shapewear" },
            { src: "/images/explore/athleisure.jpg", alt: "Athleisure wear", label: "Athleisure wear" },
          ].map((item, index) => (
            <div className="flex flex-col items-center" key={index}>
              <div className="relative w-full max-w-[210px] aspect-square grayscale rounded overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, 210px"
                />
              </div>
              <p className="mt-2 text-sm font-medium font-montserrat text-[#1F3A93]">{item.label}</p>
            </div>
          ))}
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
