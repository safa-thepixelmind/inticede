'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function ConnectSection() {
  return (
    <section className="bg-white w-full py-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        {/* CONNECT Image with animation */}
        <motion.div
          className="relative w-[603px] h-[461px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
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
        </motion.div>

        {/* WORK Image with animation */}
        <motion.div
          className="relative w-[603px] h-[461px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
