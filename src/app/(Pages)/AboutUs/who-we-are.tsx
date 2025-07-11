'use client';

import Image from 'next/image';

export default function WhoWeAre() {
    return (
        <section className="relative w-full px-4 py-16 flex flex-col lg:flex-row justify-start items-center lg:items-start max-w-[1200px] mx-auto">
            {/* LEFT: IMAGES */}
            <div className="relative w-[90%] sm:w-[450px] md:w-[510px] h-[600px] sm:h-[700px] md:h-[750px] shrink-0 grayscale">
                <Image
                    src="/images/AboutUsPage/first.jpg"
                    alt="Main Visual"
                    width={448}
                    height={656}
                    className="absolute top-0 left-0 object-cover grayscale z-10 w-[80%] sm:w-[448px] h-auto"
                />
                <Image
                    src="/images/AboutUsPage/second.jpg"
                    alt="Overlay Visual"
                    width={211}
                    height={317}
                    className="absolute z-20 w-[40%] sm:w-[211px] h-auto top-[65%] left-[55%] sm:top-[379px] sm:left-[288px] object-cover"
                />
            </div>

            {/* RIGHT: TEXT */}
            <div className="mt-10 sm:mt-[80px] md:mt-[100px] lg:mt-[103px] lg:ml-8 max-w-[90%] sm:max-w-[560px] text-center lg:text-left">
                <h2
                    className="text-[32px] sm:text-[40px] lg:text-[50px] leading-[40.5px] font-normal mb-6 text-[#1F3A93] font-grown"
                >
                    Who we are?
                </h2>
                <p
                    className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[20.5px] font-normal text-black font-montserrat"
                >
                    Inticede is a one-stop global sourcing and design house founded with the vision to elevate intimate wear brands from India and beyond.
                    With over 20 years of experience, we offer complete solutions—from sourcing premium raw materials to delivering high-quality finished products tailored to your brand’s DNA.
                    Backed by a strong global supplier network and deep technical know-how, we support every stage of the product lifecycle.
                    Whether you’re developing lingerie, loungewear, shapewear, or athleisure, our team ensures precision in fit, function, and finish.
                    Our design-led approach, combined with a commitment to ethical sourcing and innovation, positions us as a trusted partner for brands seeking excellence, efficiency, and scalability.
                    At Inticede, we don’t just deliver products—we help shape better brands.
                </p>
            </div>
        </section>
    );
}