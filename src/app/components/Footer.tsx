'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#F9F9F9] w-full py-10 px-[20px] md:px-[44px]">
      <div className="max-w-[1201px] mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Left: Logo + Description */}
        <div className="max-w-[562px]">
          <div className="w-[174px] h-[70px] relative mb-6">
            <Image
              src="/images/homepage/logo.jpg"
              alt="Inticede Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            From innovative sourcing to seamless product development, Inticede offers end-to-end
            solutions tailored for intimate and lifestyle apparel brands. With a strong network of
            suppliers and a commitment to quality, we help our partners bring their collections to
            life with precision, speed and transparency. <br /><br />
            Empowering brands to build better, smarter and faster...
          </p>
        </div>

        {/* Right: Form + Social Icons (always side by side) */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-[#1F3A93] font-grown">Partner Enquiry Form</h3>

          <div className="flex flex-row gap-6 items-start">
            {/* Form */}
            <form className="flex flex-col gap-4">
              <div>
                <label className="text-sm text-[#1F3A93] block mb-1">First name</label>
                <input
                  type="text"
                  placeholder="First name"
                  className="bg-[#D9D9D9] rounded-[10px] px-3 py-1.5 w-[200px] text-black placeholder:text-black text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-[#1F3A93] block mb-1">Email ID</label>
                <input
                  type="email"
                  placeholder="Type your email"
                  className="bg-[#D9D9D9] rounded-[10px] px-3 py-1.5 w-[200px] text-black placeholder:text-black text-sm"
                />
              </div>
            </form>

            {/* Icons always beside form */}
            <div className="flex flex-col gap-3 pt-2">
              <Image src="/images/homepage/facebookicon.png" alt="Facebook" width={37} height={37} />
              <Image src="/images/homepage/linkedinicon.png" alt="LinkedIn" width={37} height={37} />
              <Image src="/images/homepage/instagramicon.png" alt="Instagram" width={37} height={37} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
