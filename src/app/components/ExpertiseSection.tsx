'use client';

import Image from 'next/image';

const expertiseData = [
  {
    title: 'Buying, Sourcing and Vendor Management',
    image: '/images/homepage/expertise1.jpg',
  },
  {
    title: 'Design and Product Development',
    image: '/images/homepage/expertise2.jpg',
  },
  {
    title: 'Quality Assurance and Compliance',
    image: '/images/homepage/expertise3.png',
  },
  {
    title: 'Product Execution and Logistics',
    image: '/images/homepage/expertise4.jpg',
  },
];

export default function ExpertiseSection() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold text-blue-900 mb-4 font-grown">Our Expertise</h2>
      <p className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base mb-2">
        With deep industry knowledge and a global supply network, we specialize in sourcing, product development, and quality assurance.
      </p>
      <p className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base mb-10">
        Our expertise lies in delivering tailored, end-to-end solutions for intimate and lifestyle apparel brands.
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
        {expertiseData.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[300px] aspect-[3/5] flex flex-col items-center bg-[#D3D2D0] transform transition duration-300 hover:shadow-lg hover:scale-105"
          >
            <div className="w-[90%] aspect-[3/5] mt-5 relative overflow-hidden rounded-sm grayscale">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 270px"
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <div className="px-2 pt-4 text-center">
              <h3 className="text-sm font-medium text-gray-800 leading-tight font-montserrat">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
