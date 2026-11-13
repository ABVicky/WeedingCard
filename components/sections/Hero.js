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

// Aesthetic Royal Indian Wedding Backdrop
// Subtle marigold & mogra garland framing, Rajput jharokha arch, and soft sacred mandala watermark
function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
      {/* Warm raw-silk watercolor canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBF7] via-[#FAF3EA] to-[#FFF8F4]" />

      {/* Paper texture overlay for authentic stationery touch */}
      <div className="paper-noise absolute inset-0 opacity-30" />

      {/* SVG Royal Indian Wedding Art */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 860"
        preserveAspectRatio="xMidYMin slice"
        fill="none"
      >
        <defs>
          <radialGradient id="diyaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFEAA7" stopOpacity="0.75" />
            <stop offset="45%" stopColor="#F39C12" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F39C12" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="goldArchGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E2BC72" stopOpacity="0" />
            <stop offset="25%" stopColor="#C49A4A" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#E2BC72" stopOpacity="0.55" />
            <stop offset="75%" stopColor="#C49A4A" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#E2BC72" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 1. Sacred Central Mandala Watermark (Low opacity for high elegance) */}
        <g transform="translate(200 420)" opacity="0.08" stroke="#C49A4A" strokeWidth="1">
          <circle r="140" strokeDasharray="3 5" />
          <circle r="120" />
          <circle r="95" strokeWidth="1.2" />
          <circle r="70" strokeDasharray="2 4" />
          <circle r="45" />
          <circle r="20" fill="#C49A4A" fillOpacity="0.1" />
          {/* 12 Floral Petals */}
          {Array.from({ length: 12 }, (_, i) => (
            <g key={i} transform={`rotate(${i * 30})`}>
              <path d="M0 -45 C15 -70 15 -95 0 -120 C-15 -95 -15 -70 0 -45 Z" fill="#C49A4A" fillOpacity="0.04" />
              <path d="M0 -20 C8 -32 8 -40 0 -45 C-8 -40 -8 -32 0 -20 Z" />
              <circle cx="0" cy="-130" r="2.5" fill="#C49A4A" fillOpacity="0.5" />
            </g>
          ))}
        </g>

        {/* 2. Top Royal Rajput Jharokha Arch Framing */}
        <g stroke="url(#goldArchGrad)" strokeWidth="1.2">
          {/* Outer elegant arch sweep */}
          <path d="M-10 120 C60 110 120 70 160 55 C180 40 200 15 200 10 C200 15 220 40 240 55 C280 70 340 110 410 120" />
          {/* Inner double hairline arch */}
          <path d="M-10 135 C60 125 120 85 160 70 C180 55 200 30 200 25 C200 30 220 55 240 70 C280 85 340 125 410 135" strokeDasharray="3 4" strokeWidth="0.8" opacity="0.6" />
          {/* Central crest finial */}
          <circle cx="200" cy="10" r="3" fill="#C49A4A" fillOpacity="0.6" />
          <path d="M197 6 L203 6 L200 0 Z" fill="#E2BC72" fillOpacity="0.8" />
        </g>

        {/* 3. Subtle hanging marigold & jasmine garlands with temple bells */}
        {/* Left side garland cascade */}
        <g opacity="0.75">
          <line x1="25" y1="0" x2="25" y2="170" stroke="#C49A4A" strokeWidth="0.7" strokeOpacity="0.4" />
          <line x1="65" y1="0" x2="65" y2="120" stroke="#C49A4A" strokeWidth="0.7" strokeOpacity="0.35" />
          <line x1="105" y1="0" x2="105" y2="75" stroke="#C49A4A" strokeWidth="0.7" strokeOpacity="0.3" />

          {/* Marigold and jasmine blossoms */}
          {[
            { x: 25, y: 35, r: 5.5, c: "#F39C12" },
            { x: 25, y: 55, r: 5.5, c: "#E67E22" },
            { x: 25, y: 75, r: 3.5, c: "#FFFDF9" },
            { x: 25, y: 95, r: 5.5, c: "#F39C12" },
            { x: 25, y: 115, r: 5.5, c: "#E67E22" },
            { x: 25, y: 135, r: 3.5, c: "#FFFDF9" },
            { x: 25, y: 155, r: 5, c: "#F1C40F" },

            { x: 65, y: 30, r: 5, c: "#E67E22" },
            { x: 65, y: 50, r: 3.5, c: "#FFFDF9" },
            { x: 65, y: 70, r: 5, c: "#F39C12" },
            { x: 65, y: 90, r: 5, c: "#E67E22" },
            { x: 65, y: 110, r: 4.5, c: "#F1C40F" },

            { x: 105, y: 25, r: 4.5, c: "#F39C12" },
            { x: 105, y: 45, r: 3, c: "#FFFDF9" },
            { x: 105, y: 65, r: 4.5, c: "#E67E22" },
          ].map((f, i) => (
            <g key={`lf-${i}`} transform={`translate(${f.x} ${f.y})`}>
              <circle r={f.r} fill={f.c} opacity="0.85" />
              <circle r={f.r * 0.5} fill="#D35400" opacity="0.4" />
            </g>
          ))}

          {/* Golden temple bells */}
          <path d="M22 170 C22 166 28 166 28 170 L29 175 L21 175 Z" fill="#D4AF37" opacity="0.8" />
          <circle cx="25" cy="177" r="1.2" fill="#F1C40F" />

          <path d="M62 120 C62 116 68 116 68 120 L69 125 L61 125 Z" fill="#D4AF37" opacity="0.8" />
          <circle cx="65" cy="127" r="1.2" fill="#F1C40F" />

          <path d="M102 75 C102 71 108 71 108 75 L109 80 L101 80 Z" fill="#D4AF37" opacity="0.8" />
          <circle cx="105" cy="82" r="1.2" fill="#F1C40F" />
        </g>

        {/* Right side garland cascade */}
        <g opacity="0.75">
          <line x1="375" y1="0" x2="375" y2="170" stroke="#C49A4A" strokeWidth="0.7" strokeOpacity="0.4" />
          <line x1="335" y1="0" x2="335" y2="120" stroke="#C49A4A" strokeWidth="0.7" strokeOpacity="0.35" />
          <line x1="295" y1="0" x2="295" y2="75" stroke="#C49A4A" strokeWidth="0.7" strokeOpacity="0.3" />

          {[
            { x: 375, y: 35, r: 5.5, c: "#F39C12" },
            { x: 375, y: 55, r: 5.5, c: "#E67E22" },
            { x: 375, y: 75, r: 3.5, c: "#FFFDF9" },
            { x: 375, y: 95, r: 5.5, c: "#F39C12" },
            { x: 375, y: 115, r: 5.5, c: "#E67E22" },
            { x: 375, y: 135, r: 3.5, c: "#FFFDF9" },
            { x: 375, y: 155, r: 5, c: "#F1C40F" },

            { x: 335, y: 30, r: 5, c: "#E67E22" },
            { x: 335, y: 50, r: 3.5, c: "#FFFDF9" },
            { x: 335, y: 70, r: 5, c: "#F39C12" },
            { x: 335, y: 90, r: 5, c: "#E67E22" },
            { x: 335, y: 110, r: 4.5, c: "#F1C40F" },

            { x: 295, y: 25, r: 4.5, c: "#F39C12" },
            { x: 295, y: 45, r: 3, c: "#FFFDF9" },
            { x: 295, y: 65, r: 4.5, c: "#E67E22" },
          ].map((f, i) => (
            <g key={`rf-${i}`} transform={`translate(${f.x} ${f.y})`}>
              <circle r={f.r} fill={f.c} opacity="0.85" />
              <circle r={f.r * 0.5} fill="#D35400" opacity="0.4" />
            </g>
          ))}

          <path d="M372 170 C372 166 378 166 378 170 L379 175 L371 175 Z" fill="#D4AF37" opacity="0.8" />
          <circle cx="375" cy="177" r="1.2" fill="#F1C40F" />

          <path d="M332 120 C332 116 338 116 338 120 L339 125 L331 125 Z" fill="#D4AF37" opacity="0.8" />
          <circle cx="335" cy="127" r="1.2" fill="#F1C40F" />

          <path d="M292 75 C292 71 298 71 298 75 L299 80 L291 80 Z" fill="#D4AF37" opacity="0.8" />
          <circle cx="295" cy="82" r="1.2" fill="#F1C40F" />
        </g>

        {/* 4. Soft Floating Diya / Sparkle Orbs */}
        {[
          { cx: 35, cy: 320, r: 16 },
          { cx: 365, cy: 360, r: 18 },
          { cx: 45, cy: 580, r: 15 },
          { cx: 355, cy: 620, r: 17 },
          { cx: 200, cy: 220, r: 22 },
        ].map((d, i) => (
          <circle key={`diya-${i}`} cx={d.cx} cy={d.cy} r={d.r} fill="url(#diyaGlow)" opacity="0.4" />
        ))}

        {/* 5. Delicate Indian Wedding Corner Motifs */}
        <g transform="translate(14 14)" stroke="#C49A4A" strokeWidth="0.8" strokeOpacity="0.45" fill="none">
          <path d="M0 32 C0 14 14 0 32 0" />
          <path d="M0 24 C0 10 10 0 24 0" strokeDasharray="1.5 2" />
          <circle cx="6" cy="6" r="1.5" fill="#C49A4A" fillOpacity="0.5" />
        </g>
        <g transform="translate(386 14) scale(-1 1)" stroke="#C49A4A" strokeWidth="0.8" strokeOpacity="0.45" fill="none">
          <path d="M0 32 C0 14 14 0 32 0" />
          <path d="M0 24 C0 10 10 0 24 0" strokeDasharray="1.5 2" />
          <circle cx="6" cy="6" r="1.5" fill="#C49A4A" fillOpacity="0.5" />
        </g>
      </svg>

      {/* Gentle bottom feather into SaveTheDate section */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-blush-50 to-transparent" />
    </div>
  );
}

function Person({ person, revealed, delay, relation }) {
  return (
    <div className="flex flex-col items-center">
      <motion.h2
        {...show(revealed, delay)}
        className="gold-gradient-text font-names text-[40px] xs:text-[46px] sm:text-[54px] font-normal leading-[1.15] drop-shadow-[0_2px_12px_rgba(226,188,114,0.3)] px-2"
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
      className="relative min-h-[100svh] overflow-hidden px-4 pb-14 pt-[9vh] xs:pt-[11vh] sm:pt-[13vh] flex flex-col items-center justify-between text-center"
    >
      {/* Aesthetic Indian Wedding Background */}
      <HeroBackdrop />

      {/* Main invitation content rendered directly with clean, spacious elegance */}
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
