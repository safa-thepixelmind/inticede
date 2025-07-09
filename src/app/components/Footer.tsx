'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#F9F9F9] w-full py-10 px-6 md:px-[44px]">
      <div className="max-w-[1201px] mx-auto">
        {/* Logo */}
        <div className="w-[174px] h-[70px] relative mb-6">
          <Image
            src="/images/homepage/logo.jpg"
            alt="Inticede Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Description */}
        <p className="max-w-[562px] text-sm text-gray-700 leading-relaxed">
          From innovative sourcing to seamless product development, Inticede offers end-to-end
          solutions tailored for intimate and lifestyle apparel brands. With a strong network of
          suppliers and a commitment to quality, we help our partners bring their collections to
          life with precision, speed and transparency. <br /><br />
          Empowering brands to build better, smarter and faster...
        </p>
      </div>
    </footer>
  );
}
