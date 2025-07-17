"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhatDrivesUsSection() {
    return (
        <section className="relative bg-white w-full overflow-hidden py-16 px-4 mt-16">
            {/* Left Image */}
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className="hidden md:block absolute top-0 left-0 h-full w-[300px]"
            >
                <Image
                    src="/images/AboutUsPage/whatdriveus1.jpg"
                    alt="Left Visual"
                    fill
                    sizes="(max-width: 768px) 0px, 300px"
                    className="object-cover grayscale"
                />
            </motion.div>

            {/* Right Image */}
            <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="hidden md:block absolute top-0 right-0 h-full w-[300px]"
            >
                <Image
                    src="/images/AboutUsPage/whatdriveus2.jpg"
                    alt="Right Visual"
                    fill
                    sizes="(max-width: 768px) 0px, 300px"
                    className="object-cover grayscale"
                />
            </motion.div>

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative z-10 mx-auto text-center px-4 md:px-[320px] max-w-7xl"
            >
                <h2 className="text-2xl md:text-3xl font-grown text-indigo-900 mb-6">
                    What Drives Us
                </h2>
                <p className="text-gray-700 font-montserratAlt text-sm md:text-base leading-relaxed">
                    Our vision is to be the most trusted global partner for brands and
                    retailers in the intimate apparel, comfortwear, and sportswear
                    industries—delivering innovation, reliability, and long-term value
                    across the supply chain. <br /><br />
                    We empower brands with end-to-end solutions from raw materials to
                    finished garments combining smart design, responsible sourcing, and
                    manufacturing excellence. By staying at the forefront of material
                    innovation, fit engineering, and global trend insights, we enhance
                    product quality, accelerate speed to market, and ensure sustainable
                    growth. <br /><br />
                    At Inticede, we are committed to delivering quality, transparency, and
                    timely execution at every stage of development—building long-term
                    partnerships rooted in trust, collaboration, and shared success.
                </p>
            </motion.div>
        </section>
    );
}
