"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import wedding from "@/data/wedding";
import { sfx } from "./audio";

// Envelope geometry (percent of screen height), measured from the reference.
const HINGE = 21; // where the top flap folds
const TIP = 55; // flap point, where the seal sits
const FLAP_H = TIP - HINGE;
const SIDE = 32; // flap edge meets the screen sides here
const EMBOSS_H = 46; // the embossed flowers cover the top of the envelope

const MAROON = "#58141F";

// Line-art flowers that get "embossed" into the paper.
function FlowerArt() {
  const flower = (x, y, r, rot = 0) => (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx="0" cy={-r} rx={r * 0.55} ry={r} transform={`rotate(${a})`} />
      ))}
      <circle r={r * 0.32} />
    </g>
  );
  const leaf = (x, y, s, rot) => (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <path d="M0 0C10-12 30-12 42 0 30 12 10 12 0 0Z" />
      <path d="M2 0h36M12 0l7-5M22 0l7-5M12 0l7 5M22 0l7 5" />
    </g>
  );
  const bud = (x, y, s, rot) => (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <path d="M0 0C-12-6-12-24 0-34 12-24 12-6 0 0Z" />
      <path d="M0 0C-5-10-5-20 0-34M0 0C5-10 5-20 0-34" />
      <path d="M0 0c-2 18 0 34 6 50" />
    </g>
  );
  return (
    <>
      {flower(92, 128, 15, 10)}
      {flower(300, 150, 11, -15)}
      {flower(220, 60, 9, 30)}
      {leaf(20, 70, 1, -35)}
      {leaf(140, 190, 0.8, 25)}
      {leaf(330, 70, 0.9, -120)}
      {leaf(370, 210, 0.7, -60)}
      {bud(170, 112, 0.9, 15)}
      {bud(270, 250, 0.8, -20)}
      {bud(48, 255, 0.7, -10)}
      <path d="M92 145c-6 40 4 80 30 110M300 165c10 30 6 60-12 90M220 75c-20 20-30 50-24 80" />
      <circle cx="200" cy="240" r="3" />
      <circle cx="212" cy="250" r="2" />
      <circle cx="350" cy="120" r="2.5" />
      <circle cx="60" cy="190" r="2" />
    </>
  );
}

// Same artwork drawn three times (shadow, highlight, face) = letterpress emboss.
function Emboss({ className = "", style }) {
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      style={style}
      viewBox="0 0 400 320"
      preserveAspectRatio="xMidYMin slice"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <g stroke="rgba(20,3,3,0.65)" strokeWidth="2.2" transform="translate(1.2 1.6)">
        <FlowerArt />
      </g>
      <g stroke="rgba(255,215,160,0.18)" strokeWidth="1.6" transform="translate(-0.8 -0.9)">
        <FlowerArt />
      </g>
      <g stroke={MAROON} strokeWidth="1.4">
        <FlowerArt />
      </g>
    </svg>
  );
}

function SideBorder({ className = "", flip = false }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 z-[2] w-12 overflow-hidden opacity-25 ${className}`}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <svg className="h-full w-full" viewBox="0 0 48 800" preserveAspectRatio="none" fill="none">
        <pattern id="side-circles" width="48" height="120" patternUnits="userSpaceOnUse">
          <circle cx="0" cy="60" r="38" stroke="#E2BC72" strokeWidth="0.8" strokeOpacity="0.45" />
          <circle cx="0" cy="60" r="28" stroke="#E2BC72" strokeWidth="0.6" strokeOpacity="0.35" />
          <path d="M0 22 C24 38 24 82 0 98" stroke="#E2BC72" strokeWidth="0.75" strokeOpacity="0.35" fill="none" />
          <circle cx="16" cy="60" r="2" fill="#E2BC72" fillOpacity="0.55" />
        </pattern>
        <rect width="48" height="800" fill="url(#side-circles)" />
      </svg>
    </div>
  );
}

function RoyalWaxSeal() {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/images/seal.png"
        alt="Royal Wax Seal"
        fill
        sizes="180px"
        priority
        className="object-contain drop-shadow-[0_16px_28px_rgba(15,2,3,0.85)]"
      />
    </div>
  );
}

// Opening timeline (seconds after the tap). Refined for a regal, luxurious opening experience.
const T = { flap: 0.5, card: 1.8, reveal: 5.4, done: 6.8 };
const GLIDE = [0.22, 1, 0.36, 1];

const rand = (i, salt) => {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
};
const DUST = Array.from({ length: 16 }, (_, i) => ({
  left: `${8 + rand(i, 1) * 84}%`,
  top: `${15 + rand(i, 2) * 75}%`,
  size: 2 + rand(i, 3) * 2.5,
  "--o": 0.4 + rand(i, 4) * 0.5,
  "--dx": `${rand(i, 5) * 30 - 15}px`,
  "--dur": `${6 + rand(i, 6) * 6}s`,
  "--delay": `-${rand(i, 7) * 10}s`,
}));

function PreviewCard({ fading }) {
  return (
    <div className="relative h-full w-full rounded-[14px] bg-[#FFFDF9] shadow-[0_-8px_35px_rgba(40,10,8,0.45),0_0_20px_rgba(226,188,114,0.25)] overflow-hidden">
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-between py-3.5 px-3 text-center"
        animate={{ opacity: fading ? 0 : 1 }}
        transition={{ duration: 0.35 }}
      >
        {/* Double ornate gold border */}
        <div className="absolute inset-[6px] rounded-[10px] border border-gold/70 pointer-events-none" />
        <div className="absolute inset-[9px] rounded-[8px] border border-gold/30 pointer-events-none" />

        {/* 4 Corner brackets */}
        <span className="pointer-events-none absolute top-3 left-3 h-2.5 w-2.5 border-t-2 border-l-2 border-gold/80" />
        <span className="pointer-events-none absolute top-3 right-3 h-2.5 w-2.5 border-t-2 border-r-2 border-gold/80" />
        <span className="pointer-events-none absolute bottom-3 left-3 h-2.5 w-2.5 border-b-2 border-l-2 border-gold/80" />
        <span className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b-2 border-r-2 border-gold/80" />

        {/* Top: Ganesha + Invocation */}
        <div className="flex flex-col items-center mt-0.5">
          <div className="relative h-5 w-5">
            <Image
              src="/images/ganesh_gold.png"
              alt="Shri Ganesh"
              fill
              sizes="20px"
              priority
              className="object-contain"
            />
          </div>
          <p className="mt-1 font-deva text-[10px] sm:text-[10.5px] font-semibold tracking-[0.2em] text-[#9E242B]">
            ॥ श्री गणेशाय नमः ॥
          </p>
          <p className="mt-0.5 font-caps text-[8.5px] tracking-[0.28em] uppercase text-[#8A5A48] font-medium">
            Save The Date
          </p>
        </div>

        {/* Center: Couple Names */}
        <div className="flex flex-col items-center my-auto w-full px-2">
          <p className="gold-gradient-text font-heading italic text-[20px] sm:text-[23px] font-semibold leading-tight">
            {wedding.groom.name}
          </p>
          <span className="font-serif italic text-gold text-[14px] leading-none my-0.5">&amp;</span>
          <p className="gold-gradient-text font-heading italic text-[20px] sm:text-[23px] font-semibold leading-tight">
            {wedding.bride.name}
          </p>
          <div className="mt-1 flex items-center justify-center gap-2" aria-hidden="true">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/70" />
            <span className="h-1 w-1 rotate-45 bg-gold shadow-[0_0_4px_#E2BC72]" />
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/70" />
          </div>
          <p className="mt-0.5 font-serif italic text-[11px] text-[#5A382E]">
            The Jaiswal &amp; Tibrewal Families
          </p>
        </div>

        {/* Bottom: Date badge */}
        <div className="mb-0.5 inline-flex items-center rounded-full border border-gold/50 bg-gold/15 px-3 py-0.5 font-caps text-[9px] font-semibold tracking-[0.2em] text-[#9E242B]">
          04 · DECEMBER · 2026
        </div>
      </motion.div>
    </div>
  );
}

export default function Envelope({ onOpen, onReveal, onDone }) {
  const [phase, setPhase] = useState("idle"); // idle → open → card → reveal
  const [ready, setReady] = useState(true);
  const timers = useRef([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const opened = phase !== "idle";
  const cardOut = phase === "card" || phase === "reveal";
  const revealing = phase === "reveal";

  const handleTap = () => {
    if (revealing) return;
    // If card is already out and user taps, immediately advance to reveal
    if (phase === "card") {
      timers.current.forEach(clearTimeout);
      timers.current = [];
      setPhase("reveal");
      onReveal();
      timers.current.push(setTimeout(onDone, 1200));
      return;
    }
    if (opened) return;
    setPhase("open");
    navigator.vibrate?.(12);
    onOpen(); // inside the tap handler so audio is allowed to start
    const at = (s, fn) => timers.current.push(setTimeout(fn, s * 1000));
    at(T.card, () => {
      setPhase("card");
      sfx.whoosh();
    });
    at(T.reveal, () => {
      setPhase("reveal");
      onReveal();
    });
    at(T.done, onDone);
  };

  // Every envelope layer drops away together during the reveal.
  const drop = { y: revealing ? "26%" : 0 };
  const dropTransition = { y: { duration: 1.0, ease: [0.33, 1, 0.68, 1] } };

  // The flap holds its slice of the full-screen emboss so the pattern lines up.
  const flapNoiseStyle = { left: 0, width: "100%", top: `${(-HINGE / FLAP_H) * 100}%`, height: `${(100 / FLAP_H) * 100}%` };
  const flapEmbossStyle = { ...flapNoiseStyle, height: `${(EMBOSS_H / FLAP_H) * 100}%` };
  const flapShape = `polygon(0 0, 100% 0, 100% ${((SIDE - HINGE) / FLAP_H) * 100}%, 50% 100%, 0 ${((SIDE - HINGE) / FLAP_H) * 100}%)`;

  return (
    <motion.div
      className="fixed inset-y-0 left-1/2 z-50 w-full max-w-[480px] -translate-x-1/2 cursor-pointer select-none overflow-hidden"
      style={{ perspective: 1800, background: MAROON }}
      onClick={handleTap}
      role="button"
      tabIndex={0}
      aria-label="Tap to reveal the invitation"
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleTap()}
      initial={false}
      animate={{ opacity: revealing ? 0 : 1 }}
      transition={{ duration: 0.8, delay: revealing ? 0.2 : 0, ease: "easeInOut" }}
    >
      {/* Back of the envelope + paper grain */}
      <motion.div className="absolute inset-0" style={{ background: MAROON }} animate={drop} transition={dropTransition}>
        <div className="paper-noise absolute inset-0 opacity-60" />
        <Emboss className="inset-x-0 top-0 w-full" style={{ height: `${EMBOSS_H}%` }} />
        <SideBorder className="left-0" />
        <SideBorder className="right-0" flip />
      </motion.div>

      {/* Cream lining, visible once the flap lifts */}
      <motion.div
        className="absolute inset-x-0"
        style={{
          top: `${HINGE + 0.6}%`,
          height: `${FLAP_H + 1.4}%`,
          background: "linear-gradient(180deg,#E9DECB 0%,#F4ECDF 55%,#FBF6EE 100%)",
        }}
        animate={drop}
        transition={dropTransition}
      />

      {/* Warm glow as the card slides out */}
      <motion.div
        className="pointer-events-none absolute left-1/2 h-[46%] w-[120%] -translate-x-1/2 rounded-full"
        style={{ top: "22%", background: "radial-gradient(closest-side, rgba(255,236,214,0.95), rgba(255,236,214,0))" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: cardOut ? 0.9 : 0, ...drop }}
        transition={{ opacity: { duration: 0.9 }, ...dropTransition }}
      />

      {/* Invitation card, tucked inside the pocket until it slides out */}
      <motion.div
        className="absolute left-[9%] right-[9%]"
        style={{ top: "57%", height: "38%", zIndex: 2, transformOrigin: "50% 0%" }}
        animate={revealing ? { y: "-116%", scaleX: 1.12, scaleY: 1.9 } : { y: cardOut ? "-104%" : 0, scaleX: 1, scaleY: 1 }}
        transition={revealing ? { duration: 0.9, ease: GLIDE } : { duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <PreviewCard fading={revealing} />
      </motion.div>

      {/* Front pocket */}
      <motion.div
        className="absolute inset-0"
        style={{
          zIndex: 3,
          clipPath: `polygon(0 ${SIDE}%, 46% ${TIP - 2.4}%, 50% ${TIP - 1.6}%, 54% ${TIP - 2.4}%, 100% ${SIDE}%, 100% 100%, 0 100%)`,
          background: `linear-gradient(180deg, #3D0D15 0%, ${MAROON} 30%, #5E1522 100%)`,
        }}
        animate={drop}
        transition={dropTransition}
      >
        <div className="paper-noise absolute inset-0 opacity-60" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d={`M0 ${SIDE + 30} L50 ${TIP + 10} L100 ${SIDE + 30}`} fill="none" stroke="rgba(226,188,114,0.2)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
        </svg>
      </motion.div>

      {/* Shadow cast by the closed flap */}
      <motion.div
        className="absolute inset-x-0"
        style={{
          zIndex: 3,
          top: `${HINGE + 1.5}%`,
          height: `${FLAP_H}%`,
          clipPath: flapShape,
          background: "rgba(15,3,3,0.45)",
          filter: "blur(6px)",
        }}
        animate={{ opacity: opened ? 0 : 1 }}
        transition={{ duration: 0.3, delay: opened ? T.flap : 0 }}
      />

      {/* Top flap, hinged at HINGE; drops behind the card once it is open */}
      <motion.div
        className="absolute inset-x-0"
        style={{
          zIndex: cardOut ? 1 : 4,
          top: `${HINGE}%`,
          height: `${FLAP_H}%`,
          transformOrigin: "50% 0%",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        animate={{ rotateX: opened ? 180 : 0, ...drop }}
        transition={{ rotateX: { duration: 1.3, delay: opened ? T.flap : 0, ease: [0.33, 1, 0.68, 1] }, ...dropTransition }}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: flapShape, background: MAROON, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="paper-noise absolute" style={{ ...flapNoiseStyle, opacity: 0.6 }} />
          <Emboss style={flapEmbossStyle} />
          {/* Subtle gold foil edge along the flap V */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polyline
              points={`0,${((SIDE - HINGE) / FLAP_H) * 100} 50,100 100,${((SIDE - HINGE) / FLAP_H) * 100}`}
              fill="none"
              stroke="#E2BC72"
              strokeWidth="0.8"
              strokeOpacity="0.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
        {/* Wax seal, stuck to the flap tip: it lifts up with the flap */}
        <div
          className="absolute bottom-0 left-1/2 h-[174px] w-[174px] -translate-x-1/2 translate-y-1/2"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          {/* stamp in from above */}
          <div className="h-full w-full">
            <motion.div
              className="relative h-full w-full"
              animate={opened ? { scale: [0.94, 1.05, 1] } : { scale: 1 }}
              transition={opened ? { duration: 0.35, ease: "easeOut" } : { duration: 0.2 }}
              whileTap={{ scale: 0.94 }}
            >
              <RoyalWaxSeal />
              {/* gold glint sweeping across the wax */}
              {!opened && (
                <div className="pointer-events-none absolute inset-[5%] overflow-hidden rounded-full">
                  <motion.div
                    className="absolute inset-y-0 w-1/2"
                    style={{ background: "linear-gradient(105deg, transparent 0%, rgba(255,246,225,0.7) 50%, transparent 100%)", mixBlendMode: "soft-light" }}
                    initial={{ x: "-120%" }}
                    animate={{ x: ["-120%", "320%"] }}
                    transition={{ duration: 1.3, ease: "easeInOut", repeat: Infinity, repeatDelay: 3.2, delay: 1 }}
                  />
                </div>
              )}
            </motion.div>
          </div>
        </div>
        <div
          className="absolute inset-0"
          style={{
            transform: "rotateX(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            clipPath: flapShape,
            background: "linear-gradient(0deg,#4A2220,#3C1A18)",
          }}
        />
      </motion.div>

      {/* Overhead light, vignette and drifting gold dust */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[4]"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 38%, rgba(255,214,190,0.13), rgba(255,214,190,0) 70%), radial-gradient(ellipse 120% 90% at 50% 45%, rgba(0,0,0,0) 55%, rgba(18,4,4,0.55) 100%)",
        }}
        animate={{ opacity: cardOut ? 0 : 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.div className="pointer-events-none absolute inset-0 z-[4]" animate={{ opacity: opened ? 0 : ready ? 1 : 0 }} transition={{ duration: opened ? 0.4 : 1.5, delay: opened ? 0 : 1.2 }}>
        {DUST.map(({ left, top, size, ...vars }, i) => (
          <span
            key={i}
            className="dust absolute rounded-full bg-[#F1CF8E]"
            style={{ left, top, width: size, height: size, boxShadow: "0 0 6px 1px rgba(241,207,142,0.6)", ...vars }}
          />
        ))}
      </motion.div>

      {/* Tap hint above seal */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 z-[5] flex flex-col items-center text-center px-4"
        style={{ top: "27%" }}
        initial={{ opacity: 0.95, y: 0 }}
        animate={
          opened
            ? { opacity: 0, y: -12 }
            : { opacity: [0.8, 1, 0.8], y: [0, -3, 0] }
        }
        transition={
          opened
            ? { duration: 0.3 }
            : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <span className="font-caps text-[11.5px] sm:text-[12.5px] font-semibold tracking-[0.38em] uppercase text-[#E2BC72] drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
          A Sacred Union
        </span>
        <div className="my-1.5 flex items-center gap-2 opacity-85" aria-hidden="true">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold shadow-[0_0_6px_#E2BC72]" />
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold" />
        </div>
        <span className="font-serif italic text-[15px] sm:text-[16px] text-[#F7E8D8] tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
          Tap the royal seal to open
        </span>
      </motion.div>

    </motion.div>
  );
}
