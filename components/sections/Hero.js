"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import wedding from "@/data/wedding";
import { Butterfly, CornerBrackets, EASE } from "../ornaments";

// Royal Indian wedding backdrop: festive marigold & jasmine garlands, palace mandap arch, and warm ambient sparkles.
function Backdrop() {
  const marigoldGarland = (x, y, count, len, angle = 0) => {
    const spacing = len / count;
    return (
      <g transform={`translate(${x} ${y}) rotate(${angle})`}>
        <line x1="0" y1="0" x2="0" y2={len} stroke="#B8860B" strokeWidth="0.8" opacity="0.4" />
        {Array.from({ length: count }, (_, i) => {
          const cy = (i + 0.5) * spacing;
          const isJasmine = i % 3 === 2;
          const isOrange = i % 2 === 1;
          if (isJasmine) {
            return (
              <g key={i}>
                <circle cx="0" cy={cy} r="3" fill="#FFFDF8" stroke="#EFE4CF" strokeWidth="0.5" />
                <circle cx="0" cy={cy} r="1" fill="#E8CD82" />
              </g>
            );
          }
          return (
            <g key={i}>
              <circle cx="0" cy={cy} r="6.5" fill={isOrange ? "#E86A17" : "#F5B82E"} />
              <circle cx="0" cy={cy} r="4.2" fill={isOrange ? "#C0392B" : "#F39C12"} opacity="0.65" />
              <circle cx="0" cy={cy} r="2" fill="#FFF" opacity="0.3" />
            </g>
          );
        })}
        {/* Golden bell tassel */}
        <path d={`M-3 ${len} L3 ${len} L2 ${len + 5} L-2 ${len + 5} Z`} fill="#D4AF37" />
        <circle cx="0" cy={len + 6.5} r="1.5" fill="#F1C40F" />
      </g>
    );
  };

  const rose = (x, y, r, c1, c2) => (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill={c1} />
      <path
        d={`M${-r * 0.55} 0a${r * 0.55} ${r * 0.55} 0 1 1 ${r * 1.1} 0M${-r * 0.3} ${r * 0.1}a${r * 0.32} ${r * 0.3} 0 1 1 ${r * 0.62} 0M${-r * 0.75} ${r * 0.2}c${r * 0.2} ${r * 0.6} ${r * 1.3} ${r * 0.6} ${r * 1.5} 0`}
        fill="none"
        stroke={c2}
        strokeWidth={r * 0.09}
        strokeLinecap="round"
      />
    </g>
  );

  const leaf = (x, y, rot, s = 1) => (
    <path d="M0 0C8-10 24-10 34 0 24 10 8 10 0 0Z" fill="#7FA469" opacity="0.85" transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`} />
  );

  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 860" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FBF2EB" />
          <stop offset="0.4" stopColor="#FFF9F5" />
          <stop offset="1" stopColor="#F6E7DB" />
        </linearGradient>
        <filter id="soft">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
      </defs>
      <rect width="400" height="860" fill="url(#heroSky)" />

      {/* Subtle royal mandala watermark in center */}
      <g fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.14" transform="translate(200 430)">
        <circle r="120" />
        <circle r="95" strokeDasharray="3 4" />
        <circle r="65" />
        <circle r="35" />
        {Array.from({ length: 12 }, (_, i) => (
          <path key={i} d="M0 0 L0 120" transform={`rotate(${i * 30})`} />
        ))}
      </g>

      {/* Floating golden sparkle / diya orbs */}
      <g opacity="0.6">
        {[
          { cx: 35, cy: 220, r: 8, o: 0.4 },
          { cx: 365, cy: 260, r: 10, o: 0.45 },
          { cx: 50, cy: 420, r: 7, o: 0.35 },
          { cx: 350, cy: 480, r: 9, o: 0.4 },
          { cx: 25, cy: 620, r: 11, o: 0.5 },
          { cx: 375, cy: 650, r: 12, o: 0.5 },
        ].map((d, i) => (
          <g key={i}>
            <circle cx={d.cx} cy={d.cy} r={d.r * 1.8} fill="#FFE29A" opacity={d.o * 0.4} />
            <circle cx={d.cx} cy={d.cy} r={d.r} fill="#F9A825" opacity={d.o} />
            <circle cx={d.cx} cy={d.cy} r={d.r * 0.4} fill="#FFF9E6" />
          </g>
        ))}
      </g>

      {/* Festive corner roses and mango leaves */}
      <g filter="url(#soft)" opacity="0.75">
        {leaf(-4, 35, -20, 1.4)}
        {leaf(60, 16, 30)}
        {leaf(150, 45, -40)}
        {leaf(250, 18, 20, 1.2)}
        {leaf(330, 50, -30, 1.3)}
        {leaf(380, 25, 45, 1.2)}
        {rose(20, 18, 28, "#F29B9B", "#D65A5A")}
        {rose(95, 40, 22, "#F7BAA8", "#DF7A62")}
        {rose(165, 10, 26, "#F5A3A3", "#D86060")}
        {rose(240, 44, 20, "#FAC6B0", "#E5876E")}
        {rose(305, 14, 28, "#F29999", "#D65555")}
        {rose(380, 42, 24, "#F7BAAA", "#DE7864")}
      </g>

      {/* Cascading Marigold & Jasmine garlands */}
      <g filter="url(#soft)" opacity="0.88">
        {marigoldGarland(16, 0, 14, 240, 3)}
        {marigoldGarland(32, 0, 9, 150, -2)}
        {marigoldGarland(384, 0, 14, 240, -3)}
        {marigoldGarland(368, 0, 9, 150, 2)}
      </g>

      {/* Traditional Palace Mandap arch at bottom */}
      <g opacity="0.45" filter="url(#soft)">
        <path d="M0 860V680h35v180H0Z" fill="#E8D5C4" />
        <path d="M400 860V680h-35v180H400Z" fill="#E8D5C4" />
        <rect x="0" y="670" width="40" height="10" fill="#D4AF37" opacity="0.8" />
        <rect x="360" y="670" width="40" height="10" fill="#D4AF37" opacity="0.8" />
        <path
          d="M35 680 C80 660 120 620 160 635 C180 610 200 580 200 575 C200 580 220 610 240 635 C280 620 320 660 365 680"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="3.5"
        />
        <circle cx="200" cy="565" r="4" fill="#C49A4A" />
        <path d="M197 561 L203 561 L200 552 Z" fill="#E2BC72" />
        <rect x="30" y="820" width="340" height="40" fill="#F0E2D4" opacity="0.8" />
        <line x1="0" y1="820" x2="400" y2="820" stroke="#C49A4A" strokeWidth="2" opacity="0.5" />
      </g>

      <rect width="400" height="860" fill="#FFF9F5" opacity="0.25" />
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
    <>
      <motion.h2 {...show(revealed, delay)} className="gold-gradient-text font-names text-[44px] sm:text-[54px] leading-[1.2]">
        {person.name}
      </motion.h2>
      <motion.div {...show(revealed, delay + 0.15)}>
        <p className="mt-1 font-serif text-[14px] font-medium text-[#2E2220]">{person.parents}</p>
        {person.grandparents && (
          <p className="mt-0.5 font-serif text-[12.5px] italic leading-snug text-[#3B2A24]" aria-label={relation}>
            {person.grandparents}
          </p>
        )}
      </motion.div>
    </>
  );
}

export default function Hero({ revealed }) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden px-4 pb-28 pt-[13svh]">
      <Backdrop />
      <CornerBrackets inset={20} size={58} className="border-gold/70" />
      <Butterfly color="#B9A6E8" className="left-[6%] top-[62%]" />
      <motion.div
        className="pointer-events-none absolute right-[8%] top-[24%]"
        animate={{ x: [0, -14, 6, 0], y: [0, -18, -6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Butterfly color="#F2A7A0" className="relative" />
      </motion.div>

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

        <motion.div {...show(revealed, 0.4)} className="mt-5 font-deva text-[12.5px] font-medium leading-[1.6] tracking-[0.18em] text-[#9E242B]">
          {wedding.shloka.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </motion.div>

        <motion.p {...show(revealed, 0.55)} className="mx-auto mt-5 max-w-[330px] font-serif text-[16px] italic leading-[1.55] text-[#4A2F27]">
          {wedding.blessingLine}
        </motion.p>

        <div className="mt-5">
          <Person person={wedding.groom} revealed={revealed} delay={0.75} relation="Groom" />
        </div>

        <motion.div {...show(revealed, 1.05)} className="my-3 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="h-px w-[72px] bg-gold/50" />
          <span className="gold-gradient-text font-heading text-[30px] leading-none">&amp;</span>
          <span className="h-px w-[72px] bg-gold/50" />
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
