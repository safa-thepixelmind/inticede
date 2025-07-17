'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
  'pepe-jeans.png', 'puma.png', 'nykd.png', 'van-heusen.png', 'john-players.png', 'lango.png',
  'park-beauty.png', 'arunachal-handloom.png', 'intimacy.png', 'l-and-c.png', 'myshelle.png', 'clovia.png',
  'mas.png', 'skinvalue.png', 'belemp.png', 'sukanya.png', 'bodyline.png', 'little-lacy.png',
  'suman.png', 'neva.png', 'bonjour.png', 'sanari.png', 'sweet-heart.png', 'jockey.png',
  'bodycare.png', 'madura.png', 'redrose.png', 'bodycare-kids.png', 'zivame.png', 'zuwa.png',
  'lady-care.png', 'lina.png', 'floret.png', 'jinali.png', 'juliet.png', 'pigeon.png',
  'enamor.png', 'yoke.png', 'scan.png', 'hotlips.png', 'nst.png', 'vstar.png',
  'frenchie.png', 'blossom.png', 'lobster.png', 'saloni.png', 'nest.png', 'calibra.png',
];

// Break logos into rows of 6
const chunkArray = (arr: string[], chunkSize: number): string[][] => {
  const result: string[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};

export default function Brands() {
  const rows = chunkArray(logos, 6);

  return (
    <section className="py-16 px-4 bg-white overflow-hidden w-full">
      <div className="space-y-12 w-full">
        {rows.map((row, rowIndex) => {
          const repeatedRow = Array(20).fill(row).flat(); // Repeat to scroll infinitely

          return (
            <div key={rowIndex} className="relative overflow-hidden w-full">
              <motion.div
                className="flex w-max"
                animate={{
                  x: rowIndex % 2 === 0 ? ['0%', '-50%'] : ['-50%', '0%'],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 600, // slower animation
                  ease: 'linear',
                }}
              >
                {repeatedRow.map((logo, i) => (
                  <div
                    key={`${rowIndex}-${i}`}
                    className="flex items-center justify-center w-[16.66vw] h-[60px]"
                  >
                    <Image
                      src={`/images/Clients/${logo}`}
                      alt={`Logo ${logo}`}
                      width={120}
                      height={60}
                      className="object-contain max-h-[60px]"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
