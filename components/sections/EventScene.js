"use client";

import { memo } from "react";

const rand = (i, s) => {
  const x = Math.sin(i * 91.17 + s * 47.3) * 10000;
  return x - Math.floor(x);
};

function Bokeh({ count, colors, maxSize = 36 }) {
  return Array.from({ length: count }, (_, i) => {
    const size = 8 + rand(i, 1) * maxSize;
    return (
      <span
        key={i}
        className="bokeh absolute rounded-full"
        style={{
          left: `${rand(i, 2) * 100}%`,
          top: `${10 + rand(i, 3) * 75}%`,
          width: size,
          height: size,
          background: `radial-gradient(circle, ${colors[i % colors.length]} 0%, transparent 70%)`,
          "--o": 0.35 + rand(i, 4) * 0.5,
          "--dur": `${5 + rand(i, 5) * 5}s`,
          "--delay": `-${rand(i, 6) * 6}s`,
          "--dx": `${rand(i, 7) * 16 - 8}px`,
          "--dy": `${-6 - rand(i, 8) * 14}px`,
        }}
      />
    );
  });
}

function Stars({ count }) {
  return Array.from({ length: count }, (_, i) => (
    <span
      key={i}
      className="twinkle absolute h-[2px] w-[2px] rounded-full bg-white"
      style={{
        left: `${rand(i, 9) * 100}%`,
        top: `${rand(i, 10) * 70}%`,
        "--dur": `${1.6 + rand(i, 11) * 2.4}s`,
        "--delay": `-${rand(i, 12) * 3}s`,
      }}
    />
  ));
}

function FairyLights() {
  return (
    <div className="sway absolute inset-x-0 top-0 flex justify-between px-2" aria-hidden="true">
      {Array.from({ length: 14 }, (_, i) => {
        const len = 25 + rand(i, 13) * 45;
        const color = i % 2 === 0 ? "#FFD700" : "#FFA500";
        return (
          <div key={i} className="flex flex-col items-center">
            <span className="w-px bg-gold/50" style={{ height: len }} />
            <span
              className="twinkle -mt-1 h-[6px] w-[6px] rounded-full"
              style={{
                background: color,
                boxShadow: `0 0 10px 3px ${color}`,
                "--dur": `${1.4 + rand(i, 14) * 2}s`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

// ── 1. Bespoke Tilak & Sangeet Scene ──
// Festive royal twilight, glowing diyas, dholak rhythm, and floating musical sparkles
function SangeetScene() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(180deg,#19082B_0%,#2D0F44_45%,#3D144A_100%)]">
      <Stars count={35} />
      <FairyLights />
      <Bokeh count={14} colors={["rgba(255,214,120,0.85)", "rgba(255,170,80,0.75)", "rgba(235,140,255,0.5)"]} />

      {/* Hanging marigold festoon swag */}
      <svg className="absolute inset-x-0 top-0 w-full" viewBox="0 0 300 50" aria-hidden="true">
        {[0, 1, 2].map((k) => (
          <path
            key={k}
            d={`M${k * 100} 0 Q${k * 100 + 50} 38 ${(k + 1) * 100} 0`}
            fill="none"
            stroke="#F39C12"
            strokeWidth="5"
            strokeDasharray="2 5"
            strokeLinecap="round"
            opacity="0.8"
          />
        ))}
      </svg>

      {/* Floating musical notes */}
      <div className="pointer-events-none absolute inset-0 text-gold-light/60 text-[18px]" aria-hidden="true">
        <span className="twinkle absolute left-[12%] top-[38%]" style={{ "--dur": "3s" }}>♪</span>
        <span className="twinkle absolute right-[14%] top-[34%]" style={{ "--dur": "2.6s", "--delay": "-1s" }}>♫</span>
        <span className="twinkle absolute left-[20%] top-[72%]" style={{ "--dur": "3.2s", "--delay": "-1.5s" }}>♬</span>
        <span className="twinkle absolute right-[18%] top-[75%]" style={{ "--dur": "2.8s", "--delay": "-0.5s" }}>♪</span>
      </div>

      {/* Bottom festive illustration: Traditional Dholak & glowing Diya */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 300 130" preserveAspectRatio="none" aria-hidden="true">
        {/* Glow halo */}
        <circle cx="150" cy="85" r="60" fill="url(#sangeetGlow)" />
        <defs>
          <radialGradient id="sangeetGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F39C12" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F39C12" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Traditional Indian Dholak */}
        <g transform="translate(150, 88)">
          <ellipse cx="0" cy="0" rx="46" ry="24" fill="#782E1A" stroke="#D4AF37" strokeWidth="1.8" />
          <ellipse cx="-46" cy="0" rx="8" ry="18" fill="#D4AF37" stroke="#4A190C" strokeWidth="1.2" />
          <ellipse cx="46" cy="0" rx="8" ry="18" fill="#D4AF37" stroke="#4A190C" strokeWidth="1.2" />
          {/* Lacings and tuning rings */}
          <path d="M-46 -14 L46 -14 M-46 14 L46 14 M-46 0 L0 -24 L46 0 L0 24 Z" stroke="#F1C40F" strokeWidth="1.2" fill="none" opacity="0.9" />
          {/* Tilak with Chandan & Kumkum */}
          <ellipse cx="0" cy="-34" rx="3.5" ry="7" fill="#C0392B" />
          <circle cx="0" cy="-24" r="2" fill="#F1C40F" />
          {/* Diya behind */}
          <path d="M-18 -26 Q0 -18 18 -26 L12 -22 Q0 -15 -12 -22 Z" fill="#D4AF37" />
          <circle cx="0" cy="-35" r="9" fill="#F39C12" opacity="0.35" />
        </g>
      </svg>
    </div>
  );
}

// ── 2. Bespoke Wedding Ceremony Scene ──
// Sacred Vivah Mandap, holy Havan Agni (seven vows), Kalash, and royal crimson & gold aura
function WeddingScene() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(180deg,#3A0812_0%,#580F1E_45%,#6E1627_100%)]">
      <Stars count={30} />
      <FairyLights />
      <Bokeh count={14} colors={["rgba(255,214,120,0.85)", "rgba(255,180,90,0.8)", "rgba(240,110,130,0.5)"]} />

      {/* Auspicious Devanagari header watermark */}
      <div className="pointer-events-none absolute inset-x-0 top-7 text-center font-deva text-[13px] tracking-[0.25em] text-gold-light/60 font-semibold" aria-hidden="true">
        ॥ शुभ विवाह ॥
      </div>

      {/* Hanging marigold & rose garlands */}
      <svg className="absolute inset-x-0 top-0 w-full" viewBox="0 0 300 65" aria-hidden="true">
        {[0, 1, 2].map((k) => (
          <path
            key={k}
            d={`M${k * 100} 0 Q${k * 100 + 50} 42 ${(k + 1) * 100} 0`}
            fill="none"
            stroke="#E74C3C"
            strokeWidth="5"
            strokeDasharray="2 4"
            strokeLinecap="round"
            opacity="0.85"
          />
        ))}
        {[0, 1, 2].map((k) => (
          <path
            key={k}
            d={`M${k * 100 + 10} 0 Q${k * 100 + 50} 30 ${(k + 1) * 100 - 10} 0`}
            fill="none"
            stroke="#F1C40F"
            strokeWidth="3.5"
            strokeDasharray="2 4"
            strokeLinecap="round"
            opacity="0.9"
          />
        ))}
      </svg>

      {/* Bottom sacred Vivah Mandap, Havan Kund & Mangal Kalash */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 300 140" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <radialGradient id="fireGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F39C12" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#F39C12" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Sacred Mandap Arch Silhouette */}
        <path d="M20 140 V50 Q150 15 280 50 V140" fill="none" stroke="#D4AF37" strokeWidth="2.5" opacity="0.45" />
        <path d="M35 140 V60 Q150 30 265 60 V140" fill="none" stroke="#E2BC72" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.4" />
        {/* Pillar caps */}
        <rect x="15" y="46" width="12" height="6" fill="#D4AF37" opacity="0.6" />
        <rect x="273" y="46" width="12" height="6" fill="#D4AF37" opacity="0.6" />

        {/* Fire glow */}
        <circle cx="150" cy="85" r="55" fill="url(#fireGlow)" />

        {/* Sacred Havan Kund (Agni for Saat Phere) */}
        <g transform="translate(150, 95)">
          {/* Stepped copper/brass altar */}
          <polygon points="-42,22 42,22 34,34 -34,34" fill="#C49A4A" stroke="#8A4A1F" strokeWidth="1" />
          <polygon points="-34,10 34,10 27,22 -27,22" fill="#8B263E" stroke="#C49A4A" strokeWidth="0.8" />
          <polygon points="-26,0 26,0 20,10 -20,10" fill="#D4AF37" />
          {/* Sacred Flame */}
          <path d="M-14 0 Q0 -24 0 -28 Q0 -10 14 0 Z" fill="#E67E22" />
          <path d="M-9 0 Q0 -16 0 -20 Q0 -4 9 0 Z" fill="#F1C40F" />
          <circle cx="0" cy="-6" r="3" fill="#FFF" opacity="0.85" />
        </g>

        {/* Mangal Kalash with Coconut on left */}
        <g transform="translate(60, 105)">
          <circle cx="0" cy="0" r="14" fill="#C49A4A" stroke="#8A4A1F" strokeWidth="1" />
          {/* Mango leaves */}
          <path d="M-10 -10 Q0 -24 -6 -28 Q0 -18 6 -10 Z" fill="#27AE60" />
          <path d="M10 -10 Q0 -24 6 -28 Q0 -18 -6 -10 Z" fill="#2E7D32" />
          {/* Coconut & sacred thread */}
          <ellipse cx="0" cy="-14" rx="6" ry="8" fill="#6D4C41" />
          <line x1="-12" y1="0" x2="12" y2="0" stroke="#C0392B" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

const SCENES = {
  sangeet: SangeetScene,
  wedding: WeddingScene,
  night: SangeetScene,
  royal: WeddingScene,
  day: WeddingScene,
};

export default memo(function EventScene({ scene }) {
  const Scene = SCENES[scene] ?? WeddingScene;
  return <Scene />;
});
