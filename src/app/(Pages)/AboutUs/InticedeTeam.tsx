'use client';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const teamMembers = [
  {
    name: 'Yusuf Dohadwala, Director',
    image: '/images/AboutUsPage/yusuf2.png',
    description: `Yusuf leads Inticede with strategic clarity, sharp industry insight, and a deep understanding of intimatewear sourcing and production. With a legacy of over two decades, he brings a rare balance of creative instinct and operational precision.
As Director, he oversees vendor relationships, trend direction, client management, and global operations. His leadership style is hands-on yet empowering making sure every process runs smoothly, and every brand feels supported.`,
  },
  {
    name: 'Hetashree Solanki, Business Head',
    image: '/images/AboutUsPage/hetashree.jpg',
    description: `With over 20 years of experience in fashion and sourcing, Hetashree brings a unique blend of design sensibility and business insight to Inticede. From styling Bollywood icons to leading her own couture label, her journey has been defined by creativity, precision, and purpose.

At Inticede, she leads sourcing, product development, and client relationships - building strong connections between 100+ global brands and over 1,000 suppliers across Asia. Known for her trend intuition and client-focused approach, Hetashree plays a key role in driving innovation across lingerie, loungewear, and activewear.`,
  },
  {
    name: 'Nasir Momin, Head of Operations',
    image: '/images/AboutUsPage/nasir.jpg',
    description: `With over a decade at Inticede BSD, Nasiruddin Momin brings deep operational expertise and financial acumen to the company’s core. Starting as a Logistics Executive and rising to lead Operations and Logistics, he has been instrumental in shaping the backend systems that power Inticede’s seamless global delivery.
His background at Wipro BPO and training in accounting and Microsoft Office sharpened his eye for efficiency, detail, and process management - making him a key driver behind Inticede’s timely execution, cost control, and vendor coordination.`,
  },
];

export default function InticedeTeam() {
  return (
    <section className="bg-[#f2f2f2] py-12 px-4 md:px-16 font-montserrat">
      <h2
        className="text-center text-2xl md:text-4xl font-semibold mb-10 font-grown"
        style={{ color: '#1F3A93' }}
      >
        INTICEDE TEAM
      </h2>

      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Image */}
                <div className="w-full md:w-1/2 h-[400px] relative grayscale rounded overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 text-gray-700 text-sm leading-6">
                  <h3
                    className="text-lg md:text-xl font-semibold mb-3"
                    style={{ color: '#1F3A93' }}
                  >
                    {member.name}
                  </h3>
                  <p>{member.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dot Styling (moved below content) */}
        <style jsx global>{`
          .swiper-pagination {
            position: relative !important;
            margin-top: 20px;
            text-align: center;
          }
        `}</style>
      </div>
    </section>
  );
}
