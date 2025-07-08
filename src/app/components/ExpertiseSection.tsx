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
    image: '/images/homepage/expertise3.png'
  },
  {
    title: 'Product Execution and Logistics',
    image: '/images/homepage/expertise4.jpg',
  },
];

export default function ExpertiseSection() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold text-blue-900 mb-4">Our Expertise</h2>
      <p className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base mb-2">
        With deep industry knowledge and a global supply network, we specialize in sourcing, product development, and quality assurance.
      </p>
      <p className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base mb-10">
        Our expertise lies in delivering tailored, end-to-end solutions for intimate and lifestyle apparel brands.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-start">
        {expertiseData.map((item, index) => (
          <div
            key={index}
            className="w-[278px] h-[545px] mx-auto flex flex-col items-center border border-gray-200 shadow-sm bg-white"
          >
            <div className="w-full h-[400px] relative">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-base font-medium text-gray-800">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
