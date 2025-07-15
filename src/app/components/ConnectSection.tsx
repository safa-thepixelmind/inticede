'use client';
import Image from "next/image";

export default function ConnectSection() {
  return (
    <section className="bg-white w-full py-16">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        {/* CONNECT Image */}
        <div className="relative w-[603px] h-[461px]">
          <Image
            src="/images/connect.jpg"
            alt="Connect"
            fill
            sizes="(max-width: 768px) 100vw, 603px"
            className="rounded object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-[#1F3A93] text-[24px] font-bold">CONNECT</p>
          </div>
        </div>

        {/* WORK Image */}
        <div className="relative w-[603px] h-[461px]">
          <Image
            src="/images/work.jpg"
            alt="Work"
            fill
            sizes="(max-width: 768px) 100vw, 603px"
            className="rounded object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-[#1F3A93] text-[24px] font-bold">WORK</p>
          </div>
        </div>
      </div>
    </section>
  );
}
