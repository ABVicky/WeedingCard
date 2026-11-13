"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import wedding from "@/data/wedding";
import { EASE } from "../ornaments";

const show = (revealed, delay) => ({
  initial: { opacity: 0, y: 22 },
  animate: revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
  transition: { duration: 1.1, delay: revealed ? delay : 0, ease: EASE },
});

function Person({ person, revealed, delay, relation }) {
  return (
    <div className="flex flex-col items-center">
      <motion.h2
        {...show(revealed, delay)}
        className="gold-gradient-text font-names text-[40px] xs:text-[46px] sm:text-[54px] font-normal leading-[1.15] drop-shadow-[0_2px_10px_rgba(226,188,114,0.3)] px-2"
      >
        {person.name}
      </motion.h2>
      <motion.div {...show(revealed, delay + 0.15)} className="mt-1.5 xs:mt-2 max-w-[340px] px-2">
        <p className="font-serif text-[14.5px] xs:text-[15.5px] sm:text-[16px] font-medium leading-relaxed text-[#3D241E]">
          {person.parents}
        </p>
        {person.grandparents && (
          <p className="mt-0.5 font-serif text-[12.5px] xs:text-[13px] italic leading-snug text-[#5A382E]" aria-label={relation}>
            {person.grandparents}
          </p>
        )}
      </motion.div>
    </div>
  );
}

export default function Hero({ revealed }) {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-blush-50 px-4 pb-14 pt-[9vh] xs:pt-[11vh] sm:pt-[13vh] flex flex-col items-center justify-between text-center"
    >
      {/* Main invitation content rendered directly with no card container */}
      <div className="relative z-10 flex flex-col items-center max-w-[380px] mx-auto w-full my-auto">
        {/* Shri Ganesh */}
        <motion.div
          {...show(revealed, 0.25)}
          className="h-[52px] w-[48px] xs:h-[58px] xs:w-[54px]"
        >
          <motion.div
            className="relative h-full w-full"
            animate={{
              y: [0, -3, 0],
              filter: [
                "drop-shadow(0 0 0 rgba(226,188,114,0))",
                "drop-shadow(0 0 10px rgba(226,188,114,0.9))",
                "drop-shadow(0 0 0 rgba(226,188,114,0))",
              ],
            }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={wedding.images.ganesh}
              alt="Shri Ganesh"
              fill
              sizes="54px"
              priority
              className="object-contain"
              unoptimized={wedding.images.ganesh.endsWith(".svg")}
            />
          </motion.div>
        </motion.div>

        {/* Auspicious Shloka */}
        <motion.div
          {...show(revealed, 0.4)}
          className="mt-3.5 xs:mt-4 space-y-1 font-deva text-[13.5px] xs:text-[14.5px] font-bold leading-[1.65] tracking-[0.12em] text-[#9E242B]"
        >
          {wedding.shloka.map((l) => (
            <p key={l} className="drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
              ॥ {l} ॥
            </p>
          ))}
        </motion.div>

        {/* Blessing Line */}
        <motion.p
          {...show(revealed, 0.55)}
          className="mt-3.5 xs:mt-4 max-w-[340px] font-serif text-[14.5px] xs:text-[15.5px] font-medium italic leading-[1.6] text-[#4A2F27] px-2"
        >
          {wedding.blessingLine}
        </motion.p>

        {/* Flower & Gold Filigree Ornament */}
        <motion.div
          {...show(revealed, 0.65)}
          className="my-3.5 xs:my-4 flex items-center justify-center gap-2.5 opacity-70"
          aria-hidden="true"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-[17px] leading-none">🪷</span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        {/* Groom */}
        <div className="w-full">
          <Person person={wedding.groom} revealed={revealed} delay={0.75} relation="Groom" />
        </div>

        {/* & Connector */}
        <motion.div
          {...show(revealed, 1.05)}
          className="my-3 xs:my-3.5 flex items-center justify-center gap-2.5"
          aria-hidden="true"
        >
          <span className="h-px w-14 bg-gradient-to-r from-transparent via-gold to-gold/70" />
          <span className="gold-gradient-text font-heading italic text-[30px] xs:text-[34px] sm:text-[38px] leading-none px-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">&amp;</span>
          <span className="h-px w-14 bg-gradient-to-l from-transparent via-gold to-gold/70" />
        </motion.div>

        {/* Bride */}
        <div className="w-full">
          <Person person={wedding.bride} revealed={revealed} delay={1.2} relation="Bride" />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#save-the-date"
        className="relative z-10 mt-6 flex flex-col items-center text-[#6E5A50]"
        initial={{ opacity: 0 }}
        animate={revealed ? { opacity: 1 } : {}}
        transition={{ delay: 1.8, duration: 1 }}
        aria-label="Scroll down"
      >
        <span className="font-caps text-[10px] tracking-[0.35em]">Scroll</span>
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="mt-1"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M12 4v16M6 14l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.a>
    </section>
  );
}
