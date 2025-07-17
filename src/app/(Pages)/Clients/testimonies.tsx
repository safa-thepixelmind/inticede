'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      "Inixidee’s design team truly understands how to merge creativity with market relevance. Their ability to interpret trends and translate them into commercially viable collections has made them an essential part of our development process.",
    author: '— Creative Head, Global Intimatewear Brand',
  },
  {
    quote:
      'From sourcing specialty fabrics to managing complex production timelines, Inixidee handles it all with precision and professionalism. We trust them implicitly to deliver on time and without compromising on quality.',
    author: '— Head of Sourcing, Leading Comfortwear Retailer',
  },
  {
    quote:
      'Their expertise in forecasting and design allows us to stay ahead in a highly competitive market. They’ve become our go-to team for design support.',
    author: '— Design Manager, Fashion Retailer',
  },
];

// Duplicate testimonials to create infinite loop
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white w-full overflow-hidden">
      <div className="flex flex-col md:flex-row items-start gap-y-8 md:gap-y-0 md:gap-x-10 w-full px-4 md:px-8">
        {/* Left Heading */}
        <div className="min-w-[150px]">
          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-900 whitespace-nowrap">
            Testimonies.
          </h2>
        </div>

        {/* Auto-scrolling Marquee */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: 'linear',
            }}
          >
            {infiniteTestimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-6 w-[280px] md:w-[340px] shrink-0 ${
                  idx % 2 === 0 ? 'bg-[#DFDFE3]' : 'bg-[#A7A9B0]'
                }`}
              >
                <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-4">
                  {testimonial.quote}
                </p>
                <p className="text-sm font-medium text-indigo-900">{testimonial.author}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
