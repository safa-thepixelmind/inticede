import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-[80px] flex flex-col items-center">
      {/* Hero image */}
      <div className="w-full">
        <Image
          src="/images/homepage/hero.png"
          alt="Hero visual"
          width={1206}
          height={744}
          className="w-full h-auto max-w-full"
          priority
        />
      </div>

      {/* Text content */}
      <div className="max-w-[987px] text-center mt-10 px-4">
        <h1 className="text-[24px] sm:text-2xl md:text-3xl text-blue-900 font-bold leading-snug">
          We help intimate wear brands around the world <br />
          bring quality products to life
        </h1>
        <p className="text-sm text-gray-600 mt-4">
          With over a decade of experience, Inticede is a one stop solution to all your worries
        </p>
      </div>
    </section>
  );
}
