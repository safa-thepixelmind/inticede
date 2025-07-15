import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-white py-16 px-[38px]">
      <div className="max-w-[1117px] mx-auto flex flex-col md:flex-row gap-8">
        {/* Image on the left */}
        <div className="w-full md:w-[578px] h-[391px] relative">
          <Image
            src="/images/homepage/about.jpg"
            alt="About Inticede"
            fill
            sizes="(max-width: 768px) 100vw, 578px"
            className="object-cover rounded-md"
          />
        </div>

        {/* Text on the right */}
        <div className="w-full md:w-[483px] flex flex-col justify-center">
          <h2 className="text-blue-900 text-[28px] font-semibold mb-4 font-grown">
            About Us
          </h2>

          <p className="text-gray-700 text-[16px] leading-relaxed font-montserrat">
            The name <strong>Inticede BSD</strong> is inspired by the word “intercede,”
            meaning to act or advocate on someone’s behalf — a role that perfectly
            reflects the function of a buying and sourcing agency. The latter part of
            the name pays tribute to the intimate apparel industry, which Inticede BSD
            is committed to supporting and elevating through expert sourcing solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
