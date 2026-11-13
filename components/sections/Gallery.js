"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import wedding from "@/data/wedding";
import { Reveal, SectionTitle } from "../ornaments";

const { photos, caption, autoplayMs } = wedding.gallery;

const slide = {
  enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0, rotate: dir > 0 ? 4 : -4 }),
  center: { x: 0, opacity: 1, rotate: 0 },
  exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0, rotate: dir > 0 ? -4 : 4 }),
};

export default function Gallery() {
  const [[index, dir], setState] = useState([0, 1]);
  const [paused, setPaused] = useState(false);

  const go = useCallback((d) => setState(([i]) => [(i + d + photos.length) % photos.length, d]), []);

  useEffect(() => {
    if (paused || photos.length < 2) return;
    const id = setTimeout(() => go(1), autoplayMs);
    return () => clearTimeout(id);
  }, [index, paused, go]);

  // Preload all gallery images into browser memory immediately
  useEffect(() => {
    if (typeof window === "undefined") return;
    photos.forEach((p) => {
      const img = new window.Image();
      img.src = p.src;
    });
  }, []);

  const photo = photos[index];

  return (
    <section id="gallery" className="relative bg-gradient-to-b from-blush-200/80 to-blush-300/80 px-5 pb-20 pt-20">
      <SectionTitle label="A Glimpse of Us" lines={["Our Beautiful", "Moments"]} divider emoji="🌹" />

      {/* Hidden preloader ensuring zero loading lag during transitions */}
      <div className="hidden" aria-hidden="true">
        {photos.map((p) => (
          <Image
            key={p.src}
            src={p.src}
            alt=""
            width={340}
            height={476}
            priority
          />
        ))}
      </div>

      <Reveal delay={0.2} y={40} className="mx-auto mt-10 w-[88%] max-w-[340px]">
        <div className="relative aspect-[5/7]">
          {/* stacked cards behind for depth */}
          <div className="absolute inset-0 translate-x-2 rotate-[4deg] rounded-[24px] border border-gold/40 bg-white/70 shadow-sm" />
          <div className="absolute inset-0 -translate-x-1.5 -rotate-[2.5deg] rounded-[24px] border border-gold/40 bg-white/80 shadow-sm" />

          <div
            className="absolute inset-0 overflow-hidden rounded-[24px]"
            onPointerEnter={() => setPaused(true)}
            onPointerLeave={() => setPaused(false)}
          >
            <AnimatePresence initial={false} custom={dir} mode="popLayout">
              <motion.div
                key={index}
                custom={dir}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.5}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -40) go(1);
                  else if (info.offset.x > 40) go(-1);
                }}
                className="absolute inset-0 cursor-grab touch-pan-y rounded-[24px] border border-gold/50 bg-white p-[7px] shadow-card active:cursor-grabbing"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[18px]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 480px) 88vw, 340px"
                    className="pointer-events-none object-cover"
                    priority={index === 0}
                  />
                  {/* Subtle inner gold frame */}
                  <div className="pointer-events-none absolute inset-0 rounded-[18px] border border-gold/25" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="mt-5 flex items-center justify-center gap-2">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setState([i, i > index ? 1 : -1])}
              className={`h-2 transition-all duration-300 rounded-full ${
                i === index
                  ? "w-7 bg-gold shadow-[0_0_8px_rgba(226,188,114,0.7)]"
                  : "w-2 bg-[#D9C4B5]/70 hover:bg-[#D9C4B5]"
              }`}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next controls */}
        <div className="mt-4 flex items-center justify-center gap-5">
          <button
            onClick={() => go(-1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 bg-white/85 text-gold shadow-sm backdrop-blur transition-transform active:scale-90 hover:bg-gold/10"
            aria-label="Previous photo"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <span className="font-caps text-[11px] tracking-[0.25em] text-[#8A6A5A]">
            {index + 1} / {photos.length}
          </span>
          <button
            onClick={() => go(1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 bg-white/85 text-gold shadow-sm backdrop-blur transition-transform active:scale-90 hover:bg-gold/10"
            aria-label="Next photo"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <p className="mt-4 text-center font-serif text-[15px] italic text-[#8A6A5A] flex items-center justify-center gap-2">
          <span className="text-[13px]">🌹</span>
          <span>{caption}</span>
          <span className="text-[13px]">🌹</span>
        </p>
      </Reveal>
    </section>
  );
}
