"use client";

import { memo } from "react";
import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

// Fade/slide in when scrolled into view.
export function Reveal({ children, delay = 0, y = 30, scale = 1, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

// Thin gold L-shaped corner brackets.
export function CornerBrackets({ inset = 16, size = 30, className = "border-gold/60" }) {
  const base = `pointer-events-none absolute ${className}`;
  const s = { width: size, height: size };
  return (
    <>
      <span className={`${base} border-l border-t`} style={{ ...s, left: inset, top: inset }} />
      <span className={`${base} border-r border-t`} style={{ ...s, right: inset, top: inset }} />
      <span className={`${base} border-b border-l`} style={{ ...s, left: inset, bottom: inset }} />
      <span className={`${base} border-b border-r`} style={{ ...s, right: inset, bottom: inset }} />
    </>
  );
}

// Signature 5-petal flower motif matching the envelope floral design
export function FloralBlossom({ size = 20, className = "" }) {
  const r = size * 0.44;
  return (
    <svg width={size} height={size} viewBox="-15 -15 30 30" fill="none" stroke="#D4AF37" strokeWidth="1.2" className={className} aria-hidden="true">
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx="0" cy={-r} rx={r * 0.52} ry={r} transform={`rotate(${a})`} fill="rgba(226,188,114,0.16)" />
      ))}
      <circle r={r * 0.32} fill="#D4AF37" />
    </svg>
  );
}

export function FloralDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-14 bg-gradient-to-r from-transparent via-gold to-gold/75" />
      {/* Left leaf */}
      <svg width="18" height="12" viewBox="0 0 24 16" fill="none" stroke="#D4AF37" strokeWidth="1.1" className="opacity-75">
        <path d="M22 8 C16 2 8 2 2 8 C8 14 16 14 22 8 Z" fill="rgba(226,188,114,0.12)" />
        <path d="M2 8 L22 8 M10 8 L6 4 M14 8 L10 4 M10 8 L6 12 M14 8 L10 12" />
      </svg>
      {/* Center signature 5-petal blossom */}
      <FloralBlossom size={22} />
      {/* Right leaf (flipped) */}
      <svg width="18" height="12" viewBox="0 0 24 16" fill="none" stroke="#D4AF37" strokeWidth="1.1" className="opacity-75" style={{ transform: "scaleX(-1)" }}>
        <path d="M22 8 C16 2 8 2 2 8 C8 14 16 14 22 8 Z" fill="rgba(226,188,114,0.12)" />
        <path d="M2 8 L22 8 M10 8 L6 4 M14 8 L10 4 M10 8 L6 12 M14 8 L10 12" />
      </svg>
      <span className="h-px w-14 bg-gradient-to-l from-transparent via-gold to-gold/75" />
    </div>
  );
}

export function StarDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`} aria-hidden="true">
      <span className="h-px w-[88px] bg-gold/70" />
      <svg width="10" height="10" viewBox="0 0 10 10" className="fill-gold">
        <path d="M5 0l1.4 3.3L10 3.6 7.3 5.9 8.1 9.4 5 7.6 1.9 9.4l.8-3.5L0 3.6l3.6-.3Z" />
      </svg>
      <span className="h-px w-[88px] bg-gold/70" />
    </div>
  );
}

export function DotDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-2.5 ${className}`} aria-hidden="true">
      <span className="h-px w-14 bg-gold/70" />
      <span className="h-1 w-1 rounded-full bg-gold" />
      <span className="h-px w-14 bg-gold/70" />
    </div>
  );
}

export function HeartDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gold/50" />
      <svg width="12" height="11" viewBox="0 0 24 22" className="fill-gold">
        <path d="M12 22S0 14.5 0 6.6A6.4 6.4 0 0 1 12 3.3 6.4 6.4 0 0 1 24 6.6C24 14.5 12 22 12 22Z" />
      </svg>
      <span className="h-px w-16 bg-gold/50" />
    </div>
  );
}

export function SectionTitle({ label, lines, sub, divider = false }) {
  return (
    <div className="text-center">
      <Reveal>
        <p className="label-caps">{label}</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="heading-script mt-3">
          {lines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </h2>
      </Reveal>
      {divider && (
        <Reveal delay={0.2}>
          <FloralDivider className="mt-3.5" />
        </Reveal>
      )}
      {sub && (
        <Reveal delay={0.2}>
          <p className="mt-4 font-serif text-[19px] italic text-cocoa-soft">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

export function Butterfly({ color = "#B9A6E8", className = "", style }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} style={style} aria-hidden="true">
      <motion.svg
        width="30"
        height="26"
        viewBox="0 0 30 26"
        animate={{ scaleX: [1, 0.35, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M15 13C11 3 2 0 1 5s4 8 14 8Z" fill={color} opacity="0.85" />
        <path d="M15 13C19 3 28 0 29 5s-4 8-14 8Z" fill={color} opacity="0.85" />
        <path d="M15 13c-4 2-10 8-7 11s6-4 7-11Zm0 0c4 2 10 8 7 11s-6-4-7-11Z" fill={color} opacity="0.65" />
        <path d="M15 7v12" stroke="#6b4a5a" strokeWidth="1" />
      </motion.svg>
    </div>
  );
}

// Petal colours: authentic Indian wedding shower petals (marigold gold, saffron, and festive crimson roses).
const PETAL_COLORS = ["#D93848", "#E67E22", "#F39C12", "#C0392B", "#F1C40F", "#E84393", "#FFA502", "#F8A5C2"];

// Deterministic pseudo-random so server and client render the same petals.
const rand = (i, salt) => {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

const PETALS = Array.from({ length: 16 }, (_, i) => ({
  left: `${Math.round(rand(i, 1) * 100)}%`,
  w: 5 + Math.round(rand(i, 2) * 6),
  h: 8 + Math.round(rand(i, 3) * 8),
  color: PETAL_COLORS[i % PETAL_COLORS.length],
  dur: `${11 + Math.round(rand(i, 4) * 10)}s`,
  delay: `-${Math.round(rand(i, 5) * 20)}s`,
  drift: `${Math.round(rand(i, 6) * 80 - 40)}px`,
}));

export const FloatingPetals = memo(function FloatingPetals() {
  return (
    <div className="phone-fixed overflow-hidden" aria-hidden="true">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="petal rounded-[60%_40%_60%_40%]"
          style={{
            left: p.left,
            width: p.w,
            height: p.h,
            background: p.color,
            opacity: 0.75,
            "--dur": p.dur,
            "--delay": p.delay,
            "--drift": p.drift,
          }}
        />
      ))}
    </div>
  );
});
