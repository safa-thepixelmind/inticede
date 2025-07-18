'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function ConnectSection() {
  return (
    <section className="bg-white w-full py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 overflow-hidden">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* CONNECT Image */}
        <motion.div
          className="relative w-full md:w-1/2 h-[400px] md:h-[461px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src="/images/connect.jpg"
            alt="Connect"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-[#1F3A93] text-[24px] font-bold">CONNECT</p>
          </div>
        </motion.div>

        {/* WORK Image */}
        <motion.div
          className="relative w-full md:w-1/2 h-[400px] md:h-[461px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src="/images/work.jpg"
            alt="Work"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
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
