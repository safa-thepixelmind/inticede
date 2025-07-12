'use client';

import Image from 'next/image';

export default function Advantages() {
  return (
    <div className="px-4 py-12 md:px-16 bg-white text-center font-montserrat">
      <h2 className="text-2xl md:text-4xl font-semibold text-indigo-900 mb-12 font-grown">
        The unique advantages of partnering with Inticede
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="w-full h-60 relative grayscale">
            <Image
              src="/images/AboutUsPage/global.png"
              alt="Global Connections"
              fill
              className="object-cover rounded"
            />
          </div>
          <h3 className="text-lg font-semibold mt-6">
            Experience the benefits of our extensive industry expertise and global connections
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            We are a one-stop-shop providing complete sourcing solutions globally, managing each step
            in the global supply chain process for major intimate wear retailers, brands and manufacturers.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="w-full h-60 relative grayscale">
            <Image
              src="/images/AboutUsPage/design.png"
              alt="Design Innovation"
              fill
              className="object-cover rounded"
            />
          </div>
          <h3 className="text-lg font-semibold mt-6">
            Bring your vision to life with our in-house design innovation market foresight
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            Backed by a skilled design and research team INTICEDE helps intimatewear brands, retailers
            and manufacturers develop innovative collections while staying ahead of domestic and global trends.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="w-full h-60 relative grayscale">
            <Image
              src="/images/AboutUsPage/logistic.jpg"
              alt="Logistics"
              fill
              className="object-cover rounded"
            />
          </div>
          <h3 className="text-lg font-semibold mt-6">
            Smart secure and on-line logistics globally aligned
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            INTICEDE ensures seamless coordination. We manage end-to-end documentation, compliance, and
            global shipping—helping brands meet timelines efficiently while navigating both domestic and
            international supply chains with ease.
          </p>
        </div>
      </div>
    </div>
  );
}
