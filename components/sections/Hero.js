"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import wedding from "@/data/wedding";
import { CornerBrackets, EASE } from "../ornaments";

// Royal Botanical Flower Backdrop matching the envelope's signature floral design
function Backdrop() {
  const flower = (x, y, r, rot = 0) => (
    <g transform={`translate(${x} ${y}) rotate(${rot})`} stroke="#D4AF37" strokeWidth="1.2" fill="none">
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx="0" cy={-r} rx={r * 0.54} ry={r} transform={`rotate(${a})`} fill="rgba(226,188,114,0.14)" />
      ))}
      <circle r={r * 0.32} fill="#D4AF37" />
    </g>
  );

  const leaf = (x, y, s, rot) => (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`} stroke="#D4AF37" strokeWidth="1.1" fill="none">
      <path d="M0 0C10-12 30-12 42 0 30 12 10 12 0 0Z" fill="rgba(226,188,114,0.1)" />
      <path d="M2 0h36M12 0l7-5M22 0l7-5M12 0l7 5M22 0l7 5" />
    </g>
  );

  const bud = (x, y, s, rot) => (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`} stroke="#D4AF37" strokeWidth="1.1" fill="none">
      <path d="M0 0C-12-6-12-24 0-34 12-24 12-6 0 0Z" fill="rgba(226,188,114,0.1)" />
      <path d="M0 0C-5-10-5-20 0-34M0 0C5-10 5-20 0-34" />
      <path d="M0 0c-2 18 0 34 6 50" />
    </g>
  );

  return (
    <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 400 860" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="heroBgGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFDF9" />
          <stop offset="35%" stopColor="#FAF4E8" />
          <stop offset="70%" stopColor="#F5E8D6" />
          <stop offset="100%" stopColor="#EED9C4" />
        </linearGradient>

        <linearGradient id="brassBellGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7A581F" />
          <stop offset="25%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFF3B8" />
          <stop offset="75%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#6E4A14" />
        </linearGradient>

        {/* Hanging Brass Bell */}
        <g id="hero-bell">
          <line x1="0" y1="-18" x2="0" y2="0" stroke="#C0392B" strokeWidth="1.4" strokeDasharray="2 1" />
          <circle cx="0" cy="0" r="2.2" fill="none" stroke="#7A581F" strokeWidth="1" />
          <path d="M-2 2 C-2 5 -8 13 -9 17 C-7 18.5 7 18.5 9 17 C8 13 2 5 2 2 Z" fill="url(#brassBellGrad)" />
          <ellipse cx="0" cy="17" rx="9" ry="2.2" fill="url(#brassBellGrad)" stroke="#6E4A14" strokeWidth="0.5" />
          <circle cx="0" cy="20" r="2" fill="#F1C40F" stroke="#7A581F" strokeWidth="0.5" />
          <circle cx="0" cy="22.5" r="1" fill="#D4AF37" />
        </g>
      </defs>

      {/* Warm Silk Background Canvas */}
      <rect width="400" height="860" fill="url(#heroBgGrad)" />

      {/* Ornate Royal Indian Mandala Watermark */}
      <g fill="none" stroke="#D4AF37" strokeWidth="0.75" opacity="0.16" transform="translate(200 425)">
        <circle r="145" />
        <circle r="128" strokeDasharray="3 4" />
        <circle r="106" />
        <circle r="86" strokeDasharray="4 4" />
        <circle r="60" />
        <circle r="34" />
        {Array.from({ length: 16 }, (_, i) => (
          <g key={i} transform={`rotate(${i * 22.5})`}>
            <path d="M0 -34 C-12 -65 12 -65 0 -34" fill="#D4AF37" fillOpacity="0.04" />
            <path d="M0 -60 C-18 -106 18 -106 0 -60" />
          </g>
        ))}
      </g>

      {/* Royal Rajput / Mughal Cusped Mehrab Arch */}
      <g fill="none" stroke="#D4AF37" strokeWidth="1.3" opacity="0.45">
        <path d="M18 190 C18 95 80 38 200 38 C320 38 382 95 382 190" />
        <path d="M24 190 C24 102 84 44 200 44 C316 44 376 102 376 190" strokeDasharray="3 3" strokeWidth="0.8" />
        <path d="M200 22 L200 38 M196 30 L204 30" stroke="#D4AF37" strokeWidth="1.2" />
        <circle cx="200" cy="20" r="2.2" fill="#D4AF37" />
      </g>

      {/* Side Royal Lattice Lines */}
      <g stroke="#D4AF37" strokeWidth="0.8" opacity="0.3">
        <line x1="16" y1="0" x2="16" y2="860" />
        <line x1="22" y1="0" x2="22" y2="860" strokeDasharray="2 3" />
        <line x1="378" y1="0" x2="378" y2="860" strokeDasharray="2 3" />
        <line x1="384" y1="0" x2="384" y2="860" />
      </g>

      {/* Top Crown Floral Garland (Matching Envelope FlowerArt) */}
      <g opacity="0.85">
        <path d="M20 55 C90 18 140 18 200 26 C260 18 310 18 380 55" fill="none" stroke="#D4AF37" strokeWidth="1.1" />
        <path d="M20 70 C70 42 120 38 180 36 M220 36 C280 38 330 42 380 70" fill="none" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />

        {/* Top Flowers & Buds */}
        {flower(55, 36, 12, -15)}
        {flower(120, 24, 11, 20)}
        {flower(200, 26, 13, 0)}
        {flower(280, 24, 11, -20)}
        {flower(345, 36, 12, 15)}

        {/* Top Leaves */}
        {leaf(26, 48, 0.85, -45)}
        {leaf(85, 26, 0.75, 25)}
        {leaf(155, 22, 0.75, -20)}
        {leaf(245, 22, 0.75, 20)}
        {leaf(315, 26, 0.75, -25)}
        {leaf(374, 48, 0.85, 45)}

        {/* Top Buds */}
        {bud(38, 30, 0.7, -35)}
        {bud(168, 18, 0.65, 10)}
        {bud(232, 18, 0.65, -10)}
        {bud(362, 30, 0.7, 35)}
      </g>

      {/* Left Vertical Cascading Floral Vine */}
      <g opacity="0.85">
        <path d="M18 90 C24 130 14 170 20 210 C24 235 18 250 18 260" fill="none" stroke="#D4AF37" strokeWidth="1.1" />
        {flower(20, 115, 10.5, 30)}
        {flower(18, 175, 11, -25)}
        {flower(22, 235, 9.5, 15)}
        {leaf(16, 85, 0.7, -120)}
        {leaf(24, 145, 0.75, 40)}
        {leaf(16, 205, 0.75, -50)}
        {bud(26, 135, 0.65, 25)}
        {bud(16, 195, 0.65, -20)}
        <use href="#hero-bell" x="18" y="265" />
      </g>

      {/* Right Vertical Cascading Floral Vine (Mirrored) */}
      <g opacity="0.85">
        <path d="M382 90 C376 130 386 170 380 210 C376 235 382 250 382 260" fill="none" stroke="#D4AF37" strokeWidth="1.1" />
        {flower(380, 115, 10.5, -30)}
        {flower(382, 175, 11, 25)}
        {flower(378, 235, 9.5, -15)}
        {leaf(384, 85, 0.7, 120)}
        {leaf(376, 145, 0.75, -40)}
        {leaf(384, 205, 0.75, 50)}
        {bud(374, 135, 0.65, -25)}
        {bud(384, 195, 0.65, 20)}
        <use href="#hero-bell" x="382" y="265" />
      </g>

      {/* Center Arch Bell */}
      <g>
        <use href="#hero-bell" x="200" y="44" />
      </g>

      {/* Floating Golden Sparkle / Diya Orbs */}
      <g opacity="0.75">
        {[
          { cx: 38, cy: 360, r: 4 },
          { cx: 362, cy: 380, r: 4.5 },
          { cx: 32, cy: 530, r: 4 },
          { cx: 368, cy: 560, r: 4.5 },
          { cx: 30, cy: 700, r: 5 },
          { cx: 370, cy: 710, r: 4 },
        ].map((d, i) => (
          <g key={i} transform={`translate(${d.cx} ${d.cy})`}>
            <circle cx="0" cy="0" r={d.r * 2.2} fill="#FFD54F" opacity="0.18" />
            <circle cx="0" cy="0" r={d.r} fill="#F57C00" opacity="0.45" />
            <circle cx="0" cy="0" r={d.r * 0.4} fill="#FFFDE7" opacity="0.9" />
          </g>
        ))}
      </g>

      {/* Bottom Floral Base Motif */}
      <g transform="translate(0 760)" opacity="0.75">
        <line x1="18" y1="0" x2="382" y2="0" stroke="#D4AF37" strokeWidth="1.2" opacity="0.5" />
        <line x1="18" y1="5" x2="382" y2="5" stroke="#D4AF37" strokeWidth="0.7" strokeDasharray="3 3" opacity="0.4" />

        {/* Center Floral Blossom & Leaves */}
        {flower(200, 40, 13, 0)}
        {leaf(170, 42, 0.8, -30)}
        {leaf(230, 42, 0.8, 30)}
        {bud(145, 36, 0.7, -40)}
        {bud(255, 36, 0.7, 40)}

        {/* Left & Right Corner Flower Accents */}
        {flower(70, 40, 10, -20)}
        {flower(330, 40, 10, 20)}
      </g>
    </svg>
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
        className="gold-gradient-text font-heading italic text-[36px] sm:text-[44px] font-semibold leading-[1.2] tracking-tight drop-shadow-[0_2px_12px_rgba(226,188,114,0.3)]"
      >
        {person.name}
      </motion.h2>
      <motion.div {...show(revealed, delay + 0.15)} className="mt-2 max-w-[340px] px-2">
        <p className="font-serif text-[15px] sm:text-[16px] font-medium leading-relaxed text-[#3D241E]">
          {person.parents}
        </p>
        {person.grandparents && (
          <p className="mt-1 font-serif text-[13px] italic leading-snug text-[#5A382E]" aria-label={relation}>
            {person.grandparents}
          </p>
        )}
      </motion.div>
    </div>
  );
}

export default function Hero({ revealed }) {
  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden px-4 pb-16 pt-20 flex flex-col items-center justify-between text-center">
      <Backdrop />
      <CornerBrackets inset={16} size={48} className="border-gold/60" />

      {/* Main invitation content placed directly on the royal Indian background */}
      <div className="relative z-10 flex flex-col items-center max-w-[360px] mx-auto w-full my-auto">
        {/* Shri Ganesh */}
        <motion.div
          {...show(revealed, 0.25)}
          className="h-[58px] w-[54px]"
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
          className="mt-4 space-y-1 font-deva text-[13.5px] sm:text-[14.5px] font-semibold leading-[1.65] tracking-[0.14em] text-[#9E242B]"
        >
          {wedding.shloka.map((l) => (
            <p key={l} className="drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
              ॥ {l} ॥
            </p>
          ))}
        </motion.div>

        {/* Blessing Line */}
        <motion.p
          {...show(revealed, 0.55)}
          className="mt-4 max-w-[330px] font-serif text-[15px] sm:text-[16px] italic leading-[1.6] text-[#4A2F27]"
        >
          {wedding.blessingLine}
        </motion.p>

        {/* Flower & Gold Filigree Ornament */}
        <motion.div
          {...show(revealed, 0.65)}
          className="my-3.5 flex items-center justify-center gap-2.5"
          aria-hidden="true"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-[17px] leading-none drop-shadow-[0_1px_4px_rgba(226,188,114,0.4)]">🪷</span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        {/* Groom */}
        <div className="w-full">
          <Person person={wedding.groom} revealed={revealed} delay={0.75} relation="Groom" />
        </div>

        {/* & Connector */}
        <motion.div
          {...show(revealed, 1.05)}
          className="my-3.5 flex items-center justify-center gap-2.5"
          aria-hidden="true"
        >
          <span className="h-px w-14 bg-gradient-to-r from-transparent via-gold to-gold/70" />
          <span className="text-[13px] opacity-85">🌹</span>
          <span className="gold-gradient-text font-heading italic text-[32px] sm:text-[36px] leading-none px-1">&amp;</span>
          <span className="text-[13px] opacity-85">🌹</span>
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
