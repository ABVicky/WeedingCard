"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import wedding from "@/data/wedding";
import { EASE } from "../ornaments";

// Real authentic royal Indian wedding background with marigold & mogra garlands, brass bells, and raw silk texture
function Backdrop() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
      <Image
        src="/images/hero-bg.jpg"
        alt="Royal Indian Wedding Background"
        fill
        sizes="(max-width: 480px) 100vw, 480px"
        priority
        className="object-cover object-top"
      />
      {/* Soft gradient wash at the very bottom to blend seamlessly into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blush-50 to-transparent" />
    </div>
  );
}

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
        className="font-names text-[38px] xs:text-[44px] sm:text-[52px] font-normal leading-[1.12] tracking-wide text-[#6A1220] drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]"
      >
        {person.name}
      </motion.h2>
      <motion.div {...show(revealed, delay + 0.15)} className="mt-1 xs:mt-1.5 max-w-[340px] px-2">
        <p className="font-serif text-[13.5px] xs:text-[15px] sm:text-[16px] font-semibold leading-relaxed text-[#2C140D] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
          {person.parents}
        </p>
        {person.grandparents && (
          <p className="mt-0.5 font-serif text-[12.5px] xs:text-[13.5px] italic font-medium leading-snug text-[#4A261B] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]" aria-label={relation}>
            {person.grandparents}
          </p>
        )}
      </motion.div>
    </div>
  );
}

export default function Hero({ revealed }) {
  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden px-3 xs:px-4 pb-8 xs:pb-12 pt-[18vh] xs:pt-[21vh] sm:pt-[24vh] flex flex-col items-center justify-between text-center">
      <Backdrop />

      {/* Main invitation content placed cleanly below the garlands and bells */}
      <div className="relative z-10 flex flex-col items-center max-w-[360px] mx-auto w-full my-auto">
        {/* Shri Ganesh */}
        <motion.div
          {...show(revealed, 0.25)}
          className="h-[46px] w-[42px] xs:h-[54px] xs:w-[50px]"
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
              sizes="50px"
              priority
              className="object-contain"
              unoptimized={wedding.images.ganesh.endsWith(".svg")}
            />
          </motion.div>
        </motion.div>

        {/* Auspicious Shloka */}
        <motion.div
          {...show(revealed, 0.4)}
          className="mt-2.5 xs:mt-3 space-y-0.5 xs:space-y-1 font-deva text-[13px] xs:text-[14px] sm:text-[15px] font-bold leading-[1.6] xs:leading-[1.65] tracking-[0.1em] xs:tracking-[0.14em] text-[#801322] drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]"
        >
          {wedding.shloka.map((l) => (
            <p key={l}>
              ॥ {l} ॥
            </p>
          ))}
        </motion.div>

        {/* Blessing Line */}
        <motion.p
          {...show(revealed, 0.55)}
          className="mt-2.5 xs:mt-3 max-w-[330px] font-serif text-[14px] xs:text-[15px] sm:text-[16px] font-semibold italic leading-[1.55] xs:leading-[1.6] text-[#361B13] drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)] px-2"
        >
          {wedding.blessingLine}
        </motion.p>

        {/* Flower & Gold Filigree Ornament */}
        <motion.div
          {...show(revealed, 0.65)}
          className="my-2 xs:my-3 flex items-center justify-center gap-2.5"
          aria-hidden="true"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#8A5A30]" />
          <span className="text-[17px] leading-none drop-shadow-[0_1px_3px_rgba(226,188,114,0.5)]">🪷</span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#8A5A30]" />
        </motion.div>

        {/* Groom */}
        <div className="w-full">
          <Person person={wedding.groom} revealed={revealed} delay={0.75} relation="Groom" />
        </div>

        {/* & Connector */}
        <motion.div
          {...show(revealed, 1.05)}
          className="my-2 xs:my-2.5 flex items-center justify-center gap-2.5"
          aria-hidden="true"
        >
          <span className="h-px w-14 bg-gradient-to-r from-transparent via-[#8A5A30] to-[#8A5A30]" />
          <span className="text-[13px] opacity-90">🌹</span>
          <span className="font-heading italic text-[26px] xs:text-[30px] sm:text-[34px] font-semibold text-[#801322] px-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">&amp;</span>
          <span className="text-[13px] opacity-90">🌹</span>
          <span className="h-px w-14 bg-gradient-to-l from-transparent via-[#8A5A30] to-[#8A5A30]" />
        </motion.div>

        {/* Bride */}
        <div className="w-full">
          <Person person={wedding.bride} revealed={revealed} delay={1.2} relation="Bride" />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#save-the-date"
        className="relative z-10 mt-4 flex flex-col items-center text-[#6E5A50]"
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
