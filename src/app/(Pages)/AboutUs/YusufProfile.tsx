'use client';

import Image from 'next/image';

export default function YusufProfile() {
  return (
    <section className="bg-white py-12 px-4 md:px-20 font-montserrat">
      <h2 className="text-center text-2xl md:text-4xl font-semibold text-indigo-900 mb-10 font-grown">
        Yusuf Dohadwala
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-6xl mx-auto">
        {/* Image */}
        <div className="w-full md:w-1/3">
          <div className="relative w-full h-[400px] grayscale rounded overflow-hidden">
            <Image
              src="/images/AboutUsPage/yusuf.png"
              alt="Yusuf Dohadwala"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-2/3 text-justify text-gray-700 text-sm leading-6">
          <p>
            Yusuf Dohadwala is the driving force behind Inticede BSD — a visionary with over 20 years of experience
            in the innerwear, comfortwear, and activewear industry.
          </p>
          <p className="mt-4">
            Personally connected with over 1,000+ brands and retailers across India and abroad, Yusuf has built more than just a company —
            he has shaped the ecosystem around it. His leadership bridges the gap between design, sourcing, and execution, empowering brands
            with strategic clarity and reliable systems.
          </p>

          <p className="mt-4">He also serves as:</p>
          <ul className="list-disc list-inside mt-2 ml-4">
            <li>CEO of the Intimate Apparel Association of India (IAAI)</li>
            <li>Joint Secretary (West) at FOHMA (Federation of Hosiery Manufacturers Association)</li>
            <li>
              Chief Organiser of major B2B trade shows like <strong>INTIMASIA</strong>, <strong>Source TX</strong>,
              <strong> Lingerie Fashion Week</strong>, and <strong>Changer Masters</strong> — bringing the industry together under one roof
            </li>
            <li>
              Chief Editor & Publisher of Inner Secrets, India’s leading B2B magazine for intimatewear for over 20 years
            </li>
          </ul>

          <p className="mt-4">
            Under Yusuf’s guidance, Inticede has become India’s first and leading buying, sourcing, and design house dedicated to
            intimatewear — servicing 100+ brands and managing 200+ vendor partnerships globally.
          </p>
        </div>
      </div>
    </section>
  );
}
