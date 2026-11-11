"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import wedding from "@/data/wedding";
import { sfx } from "../audio";
import { EASE, Reveal, SectionTitle } from "../ornaments";

const HEART_W = 112;
const HEART_H = 102;
const REVEAL_AT = 0.55; // fraction of the heart scratched before it auto-clears
const CONFETTI_COLORS = ["#C43D4E", "#E67E22", "#F1C40F", "#D4AF37", "#FF6B81", "#FFFFFF"];

// Heart outline in a 1×1 box (also used as the CSS clip-path).
function heartPath(ctx, w, h) {
  ctx.beginPath();
  ctx.moveTo(0.5 * w, 0.97 * h);
  ctx.bezierCurveTo(0.18 * w, 0.74 * h, 0, 0.56 * h, 0, 0.3 * h);
  ctx.bezierCurveTo(0, 0.12 * h, 0.14 * w, 0, 0.29 * w, 0);
  ctx.bezierCurveTo(0.4 * w, 0, 0.47 * w, 0.06 * h, 0.5 * w, 0.15 * h);
  ctx.bezierCurveTo(0.53 * w, 0.06 * h, 0.6 * w, 0, 0.71 * w, 0);
  ctx.bezierCurveTo(0.86 * w, 0, w, 0.12 * h, w, 0.3 * h);
  ctx.bezierCurveTo(w, 0.56 * h, 0.82 * w, 0.74 * h, 0.5 * w, 0.97 * h);
  ctx.closePath();
}

const HEART_CLIP = "url(#heart-clip)";

function ScratchHeart({ label, value, onRevealed, done }) {
  const canvasRef = useRef(null);
  const state = useRef({ drawing: false, last: null, total: 0, moves: 0, lastSound: 0, done: false });
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = HEART_W * dpr;
    canvas.height = HEART_H * dpr;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.scale(dpr, dpr);

    heartPath(ctx, HEART_W, HEART_H);
    const g = ctx.createLinearGradient(0, 0, HEART_W, HEART_H);
    g.addColorStop(0, "#B82939");
    g.addColorStop(0.5, "#9B1D2C");
    g.addColorStop(1, "#7D1321");
    ctx.fillStyle = g;
    ctx.fill();
    state.current.total = countOpaque(ctx, canvas);

    // next/font gives the font a hashed family name, so read it from the CSS variable.
    document.fonts.ready.then(() => {
      if (state.current.moves) return;
      const family = getComputedStyle(document.documentElement).getPropertyValue("--font-caps") || "Georgia, serif";
      ctx.fillStyle = "rgba(255,255,255,0.92)";
      ctx.font = `500 8.5px ${family}`;
      ctx.textAlign = "center";
      if ("letterSpacing" in ctx) ctx.letterSpacing = "2px";
      ctx.fillText("SCRATCH", HEART_W / 2 + 1, HEART_H * 0.45);
    });
  }, []);

  function countOpaque(ctx, canvas) {
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let n = 0;
    for (let i = 3; i < data.length; i += 4 * 8) if (data[i] > 0) n++;
    return n;
  }

  const point = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return { x: ((e.clientX - rect.left) / rect.width) * HEART_W, y: ((e.clientY - rect.top) / rect.height) * HEART_H };
  };

  const scratch = (p) => {
    const s = state.current;
    const ctx = canvasRef.current.getContext("2d");
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 26;
    ctx.beginPath();
    ctx.moveTo((s.last ?? p).x, (s.last ?? p).y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    s.last = p;

    const now = performance.now();
    if (now - s.lastSound > 70) {
      sfx.scratch();
      s.lastSound = now;
    }
    if (++s.moves % 6 === 0) {
      const left = countOpaque(ctx, canvasRef.current);
      if (s.total && 1 - left / s.total >= REVEAL_AT) finish();
    }
  };

  const finish = () => {
    if (state.current.done) return;
    state.current.done = true;
    state.current.drawing = false;
    setRevealed(true);
    sfx.chime();
    const r = canvasRef.current.getBoundingClientRect();
    confetti({
      particleCount: 60,
      spread: 70,
      startVelocity: 28,
      scalar: 0.8,
      ticks: 160,
      colors: CONFETTI_COLORS,
      origin: { x: (r.left + r.width / 2) / window.innerWidth, y: (r.top + r.height / 2) / window.innerHeight },
      disableForReducedMotion: true,
    });
    onRevealed();
  };

  const handlers = {
    onPointerDown: (e) => {
      if (state.current.done) return;
      e.currentTarget.setPointerCapture(e.pointerId);
      state.current.drawing = true;
      state.current.last = null;
      scratch(point(e));
    },
    onPointerMove: (e) => {
      if (!state.current.drawing || state.current.done) return;
      scratch(point(e));
    },
    onPointerUp: () => {
      state.current.drawing = false;
      state.current.last = null;
    },
  };

  return (
    <motion.div
      className="relative"
      style={{ width: HEART_W, height: HEART_H }}
      animate={done ? { filter: "drop-shadow(0 10px 14px rgba(150,70,50,0.18))" } : {}}
    >
      <div
        className="absolute inset-0 flex flex-col items-center justify-center pb-3 transition-colors duration-700"
        style={{ clipPath: HEART_CLIP, background: done ? "#FFFFFF" : "#FBE7DD" }}
      >
        <span className="font-caps text-[9.5px] uppercase tracking-[0.2em] text-[#8A5A48]">{label}</span>
        <span className={`mt-0.5 font-serif font-bold leading-none text-terra lining-nums ${value.length > 5 ? "text-[21px]" : "text-[30px]"}`}>
          {value}
        </span>
      </div>
      <motion.canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full touch-none"
        style={{ cursor: revealed ? "default" : "grab" }}
        animate={{ opacity: revealed ? 0 : 1 }}
        transition={{ duration: 0.6 }}
        aria-label={`Scratch to reveal the ${label.toLowerCase()}`}
        {...handlers}
      />
    </motion.div>
  );
}

function Countdown() {
  const [t, setT] = useState({ Days: 0, Hrs: 0, Mins: 0, Secs: 0 });

  useEffect(() => {
    const target = new Date(wedding.weddingDate).getTime();
    const tick = () => {
      const d = Math.max(0, target - Date.now());
      setT({
        Days: Math.floor(d / 86400000),
        Hrs: Math.floor((d / 3600000) % 24),
        Mins: Math.floor((d / 60000) % 60),
        Secs: Math.floor((d / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mt-6 flex justify-center gap-3">
      {Object.entries(t).map(([k, v], i) => (
        <motion.div
          key={k}
          className="flex h-[66px] w-[62px] flex-col items-center justify-center rounded-xl border border-gold/30 bg-white/95 shadow-[0_8px_20px_-12px_rgba(150,50,40,0.35)]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: EASE }}
        >
          <span className="font-serif text-[26px] font-bold leading-none text-terra lining-nums">{String(v).padStart(2, "0")}</span>
          <span className="mt-1 font-caps text-[8.5px] uppercase tracking-[0.15em] text-[#9B7B6B]">{k}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function SaveTheDate() {
  const [count, setCount] = useState(0);
  const total = wedding.scratch.length;
  const allDone = count >= total;

  useEffect(() => {
    if (!allDone) return;
    sfx.success();
    const end = Date.now() + 1600;
    const frame = () => {
      confetti({ particleCount: 7, angle: 270, spread: 160, startVelocity: 12, gravity: 0.7, scalar: 0.75, ticks: 300, colors: CONFETTI_COLORS, origin: { x: Math.random(), y: -0.05 }, disableForReducedMotion: true });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, [allDone]);

  return (
    <section id="save-the-date" className="relative bg-blush-50/80 px-5 pb-20 pt-20">
      {/* shared heart clip-path */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <clipPath id="heart-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.5,0.97 C0.18,0.74 0,0.56 0,0.3 C0,0.12 0.14,0 0.29,0 C0.4,0 0.47,0.06 0.5,0.15 C0.53,0.06 0.6,0 0.71,0 C0.86,0 1,0.12 1,0.3 C1,0.56 0.82,0.74 0.5,0.97 Z" />
        </clipPath>
      </svg>

      <SectionTitle label="Save The Date" lines={["Reveal Our", "Big Day"]} sub="Scratch the hearts to reveal" />

      <Reveal delay={0.25} className="mt-8 flex justify-center gap-3">
        {wedding.scratch.map((s) => (
          <ScratchHeart key={s.label} label={s.label} value={s.value} done={allDone} onRevealed={() => setCount((c) => c + 1)} />
        ))}
      </Reveal>

      <AnimatePresence>
        {allDone && (
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE }}>
            <p className="mt-10 whitespace-nowrap text-center font-heading font-serif italic text-[23px] sm:text-[26px] leading-tight text-terra">{wedding.journeyLine}</p>
            <Countdown />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
