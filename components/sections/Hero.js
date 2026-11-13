"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import wedding from "@/data/wedding";
import { CornerBrackets, EASE } from "../ornaments";

// Royal Indian Wedding Backdrop: Auspicious Marigold (Genda) & Mango Leaf (Aam Patta) Toran,
// Hanging Brass Temple Bells (Pital Ghanti), Rajasthani Mehrab Arch & Sacred Golden Mandala.
function Backdrop() {
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 860" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="heroBgGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFBF5" />
          <stop offset="35%" stopColor="#FAF2E4" />
          <stop offset="70%" stopColor="#F5E4D0" />
          <stop offset="100%" stopColor="#ECD2BC" />
        </linearGradient>

        {/* Marigold flower radial gradients */}
        <radialGradient id="orangeGenda" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A81D1D" />
          <stop offset="35%" stopColor="#D84315" />
          <stop offset="70%" stopColor="#E65100" />
          <stop offset="100%" stopColor="#F57C00" />
        </radialGradient>

        <radialGradient id="yellowGenda" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E65100" />
          <stop offset="35%" stopColor="#F9A825" />
          <stop offset="75%" stopColor="#FBC02D" />
          <stop offset="100%" stopColor="#FFF176" />
        </radialGradient>

        {/* Brass Bell gradient */}
        <linearGradient id="brassBellGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7A581F" />
          <stop offset="25%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFF3B8" />
          <stop offset="75%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#6E4A14" />
        </linearGradient>

        {/* Mango leaf gradient */}
        <linearGradient id="mangoLeafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2D6A4F" />
          <stop offset="100%" stopColor="#1B4332" />
        </linearGradient>

        {/* Diya flame gradient */}
        <linearGradient id="diyaFlameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#E65100" />
          <stop offset="45%" stopColor="#F57C00" />
          <stop offset="80%" stopColor="#FFD54F" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>

        {/* Genda flower symbols */}
        <g id="genda-orange">
          <circle cx="0" cy="0" r="10.5" fill="url(#orangeGenda)" />
          <path d="M-10.5 0 Q-7.5 -5.5 0 -10.5 Q7.5 -5.5 10.5 0 Q7.5 5.5 0 10.5 Q-7.5 5.5 -10.5 0 Z" fill="#BF360C" opacity="0.45" />
          <circle cx="0" cy="0" r="7.5" fill="#E65100" opacity="0.8" />
          <circle cx="0" cy="0" r="5" fill="#F57C00" />
          <circle cx="0" cy="0" r="2.8" fill="#FFE082" opacity="0.9" />
          <circle cx="0" cy="0" r="1.3" fill="#B71C1C" />
        </g>

        <g id="genda-yellow">
          <circle cx="0" cy="0" r="10.5" fill="url(#yellowGenda)" />
          <path d="M-10.5 0 Q-7.5 -5.5 0 -10.5 Q7.5 -5.5 10.5 0 Q7.5 5.5 0 10.5 Q-7.5 5.5 -10.5 0 Z" fill="#E65100" opacity="0.4" />
          <circle cx="0" cy="0" r="7.5" fill="#F9A825" opacity="0.8" />
          <circle cx="0" cy="0" r="5" fill="#FBC02D" />
          <circle cx="0" cy="0" r="2.8" fill="#FFFDE7" opacity="0.9" />
          <circle cx="0" cy="0" r="1.3" fill="#E65100" />
        </g>

        {/* Mango leaf */}
        <g id="mango-leaf">
          <path d="M0 0 C-6 12 -8 28 0 46 C8 28 6 12 0 0 Z" fill="url(#mangoLeafGrad)" />
          <path d="M0 0 L0 46" stroke="#95D5B2" strokeWidth="0.8" opacity="0.55" />
          <path d="M0 12 L-4 18 M0 22 L-5 28 M0 32 L-4 38 M0 12 L4 18 M0 22 L5 28 M0 32 L4 38" stroke="#95D5B2" strokeWidth="0.5" opacity="0.35" />
        </g>

        {/* Hanging Brass Bell */}
        <g id="brass-bell">
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
      <g fill="none" stroke="#D4AF37" strokeWidth="1.3" opacity="0.5">
        <path d="M18 180 C18 95 80 38 200 38 C320 38 382 95 382 180" />
        <path d="M24 180 C24 102 84 44 200 44 C316 44 376 102 376 180" strokeDasharray="3 3" strokeWidth="0.8" />
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

      {/* Auspicious Mango Leaves across Top Toran */}
      <g>
        {[
          { x: 24, y: -10, r: 16, s: 0.85 },
          { x: 54, y: -12, r: 8, s: 0.9 },
          { x: 88, y: -14, r: -5, s: 0.9 },
          { x: 122, y: -15, r: 12, s: 0.85 },
          { x: 156, y: -15, r: -8, s: 0.9 },
          { x: 188, y: -16, r: 5, s: 0.95 },
          { x: 212, y: -16, r: -5, s: 0.95 },
          { x: 244, y: -15, r: 8, s: 0.9 },
          { x: 278, y: -15, r: -12, s: 0.85 },
          { x: 312, y: -14, r: 5, s: 0.9 },
          { x: 346, y: -12, r: -8, s: 0.9 },
          { x: 376, y: -10, r: -16, s: 0.85 },
        ].map((leaf, i) => (
          <use key={i} href="#mango-leaf" x={leaf.x} y={leaf.y} transform={`rotate(${leaf.r} ${leaf.x} ${leaf.y}) scale(${leaf.s})`} />
        ))}
      </g>

      {/* Top Auspicious Marigold Bar */}
      <g>
        {Array.from({ length: 19 }, (_, i) => (
          <use key={i} href={i % 2 === 0 ? "#genda-orange" : "#genda-yellow"} x={16 + i * 20.5} y={8} />
        ))}
      </g>

      {/* Festive Marigold Garland Festoon (Left Loop) */}
      <g>
        <path d="M20 10 Q110 52 200 15" fill="none" stroke="#8D6E2F" strokeWidth="0.8" opacity="0.45" />
        {[
          [40, 23], [62, 34], [86, 41], [110, 44], [134, 41], [158, 34], [180, 23],
        ].map(([x, y], i) => (
          <use key={i} href={i % 2 === 0 ? "#genda-orange" : "#genda-yellow"} x={x} y={y} />
        ))}
      </g>

      {/* Festive Marigold Garland Festoon (Right Loop) */}
      <g>
        <path d="M200 15 Q290 52 380 10" fill="none" stroke="#8D6E2F" strokeWidth="0.8" opacity="0.45" />
        {[
          [220, 23], [242, 34], [266, 41], [290, 44], [314, 41], [338, 34], [360, 23],
        ].map(([x, y], i) => (
          <use key={i} href={i % 2 === 0 ? "#genda-yellow" : "#genda-orange"} x={x} y={y} />
        ))}
      </g>

      {/* Hanging Vertical Marigold Strands (Left) */}
      <g>
        <line x1="16" y1="10" x2="16" y2="255" stroke="#C0392B" strokeWidth="0.8" opacity="0.5" />
        {Array.from({ length: 12 }, (_, k) => (
          <use key={k} href={k % 2 === 0 ? "#genda-orange" : "#genda-yellow"} x="16" y={24 + k * 19} />
        ))}
        <use href="#brass-bell" x="16" y="258" />
      </g>

      {/* Hanging Vertical Marigold Strands (Right) */}
      <g>
        <line x1="384" y1="10" x2="384" y2="255" stroke="#C0392B" strokeWidth="0.8" opacity="0.5" />
        {Array.from({ length: 12 }, (_, k) => (
          <use key={k} href={k % 2 === 0 ? "#genda-orange" : "#genda-yellow"} x="384" y={24 + k * 19} />
        ))}
        <use href="#brass-bell" x="384" y="258" />
      </g>

      {/* Center Arch Bell */}
      <g>
        <use href="#brass-bell" x="200" y="44" />
      </g>

      {/* Inner Shorter Hanging Bells */}
      <g>
        <use href="#brass-bell" x="38" y="160" />
        <use href="#brass-bell" x="362" y="160" />
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

      {/* Bottom Royal Mandap Rail & Sacred Diya */}
      <g transform="translate(0 765)">
        <line x1="18" y1="0" x2="382" y2="0" stroke="#D4AF37" strokeWidth="1.2" opacity="0.5" />
        <line x1="18" y1="5" x2="382" y2="5" stroke="#D4AF37" strokeWidth="0.7" strokeDasharray="3 3" opacity="0.4" />

        {/* Sacred Golden Diya at Center */}
        <g transform="translate(200 46)">
          <path d="M-18 6 C-14 18 14 18 18 6 C12 6 -12 6 -18 6 Z" fill="url(#brassBellGrad)" stroke="#7A581F" strokeWidth="0.8" />
          <ellipse cx="0" cy="6" rx="16" ry="2.8" fill="#A07828" />
          <path d="M0 -14 C-5 -4 -4 5 0 6 C4 5 5 -4 0 -14 Z" fill="url(#diyaFlameGrad)" />
          <circle cx="0" cy="-4" r="14" fill="#FFD54F" opacity="0.22" />
        </g>

        {/* Delicate Golden Lotus Motifs */}
        <g stroke="#D4AF37" strokeWidth="0.85" fill="none" opacity="0.5">
          <g transform="translate(85 48)">
            <path d="M0 0 C-7 -14 0 -22 0 -22 C0 -22 7 -14 0 0 Z" />
            <path d="M-2 -2 C-13 -12 -7 -20 -7 -20 C-7 -20 -2 -14 -2 -2 Z" />
            <path d="M2 -2 C13 -12 7 -20 7 -20 C7 -20 2 -14 2 -2 Z" />
          </g>
          <g transform="translate(315 48)">
            <path d="M0 0 C-7 -14 0 -22 0 -22 C0 -22 7 -14 0 0 Z" />
            <path d="M-2 -2 C-13 -12 -7 -20 -7 -20 C-7 -20 -2 -14 -2 -2 Z" />
            <path d="M2 -2 C13 -12 7 -20 7 -20 C7 -20 2 -14 2 -2 Z" />
          </g>
        </g>
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
    <section className="relative min-h-[100svh] overflow-hidden px-4 pb-28 pt-[13svh]">
      <Backdrop />
      <CornerBrackets inset={20} size={58} className="border-gold/70" />

      <motion.div
        className="relative overflow-hidden rounded-[26px] bg-ivory/[0.93] px-3 pb-10 pt-8 text-center shadow-[0_20px_50px_-20px_rgba(120,40,40,0.35)] backdrop-blur-[2px]"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={revealed ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: EASE }}
      >
        <CornerBrackets inset={16} size={30} className="border-gold/60" />

        {/* Auspicious marigold & gold floral toran header */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-4" aria-hidden="true">
          <svg className="h-full w-full" viewBox="0 0 400 16" preserveAspectRatio="none">
            {[0, 40, 80, 120, 160, 200, 240, 280, 320, 360].map((x) => (
              <g key={x}>
                <path d={`M${x} 0 Q${x + 20} 11 ${x + 40} 0`} fill="none" stroke="#E67E22" strokeWidth="1.8" strokeDasharray="2 3" strokeLinecap="round" opacity="0.85" />
                <circle cx={x + 20} cy="8" r="2.2" fill="#F1C40F" />
                <circle cx={x + 20} cy="12" r="1.3" fill="#C0392B" />
              </g>
            ))}
          </svg>
        </div>

        <motion.div
          {...show(revealed, 0.25)}
          className="mx-auto h-[54px] w-[50px]"
        >
          <motion.div
            className="relative h-full w-full"
            animate={{ y: [0, -3, 0], filter: ["drop-shadow(0 0 0 rgba(226,188,114,0))", "drop-shadow(0 0 8px rgba(226,188,114,0.9))", "drop-shadow(0 0 0 rgba(226,188,114,0))"] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src={wedding.images.ganesh} alt="Shri Ganesh" fill sizes="50px" priority className="object-contain" unoptimized={wedding.images.ganesh.endsWith(".svg")} />
          </motion.div>
        </motion.div>

        <motion.div {...show(revealed, 0.4)} className="mt-5 space-y-1 font-deva text-[13px] sm:text-[14px] font-semibold leading-[1.65] tracking-[0.14em] text-[#9E242B]">
          {wedding.shloka.map((l) => (
            <p key={l} className="drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
              ॥ {l} ॥
            </p>
          ))}
        </motion.div>

        <motion.p
          {...show(revealed, 0.55)}
          className="mx-auto mt-5 max-w-[340px] font-serif text-[15.5px] sm:text-[16.5px] italic leading-[1.6] text-[#4A2F27]"
        >
          {wedding.blessingLine}
        </motion.p>

        <motion.div {...show(revealed, 0.65)} className="mx-auto mt-4 flex items-center justify-center gap-2.5 opacity-60" aria-hidden="true">
          <span className="h-px w-10 bg-gold" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          <span className="h-px w-10 bg-gold" />
        </motion.div>

        <div className="mt-5">
          <Person person={wedding.groom} revealed={revealed} delay={0.75} relation="Groom" />
        </div>

        <motion.div {...show(revealed, 1.05)} className="my-4 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-gold/70" />
          <span className="gold-gradient-text font-heading italic text-[32px] sm:text-[36px] leading-none px-2">&amp;</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent via-gold to-gold/70" />
        </motion.div>

        <Person person={wedding.bride} revealed={revealed} delay={1.2} relation="Bride" />
      </motion.div>

      <motion.a
        href="#save-the-date"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center text-[#6E5A50]"
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
