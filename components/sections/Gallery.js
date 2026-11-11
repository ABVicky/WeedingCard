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

  const photo = photos[index];

  return (
    <section id="gallery" className="relative bg-gradient-to-b from-blush-200/80 to-blush-300/80 px-5 pb-20 pt-20">
      <SectionTitle label="A Glimpse of Us" lines={["Our Beautiful", "Moments"]} divider />

      <Reveal delay={0.2} y={40} className="mx-auto mt-10 w-[84%] max-w-[340px]">
        <div className="relative aspect-[2/3]">
          {/* stacked cards behind for depth */}
          <div className="absolute inset-0 translate-x-2 rotate-[4deg] rounded-[24px] border border-[#F0D9CD] bg-white/70" />
          <div className="absolute inset-0 -translate-x-1 -rotate-[2.5deg] rounded-[24px] border border-[#F0D9CD] bg-white/80" />

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
                  if (info.offset.x < -50) go(1);
                  else if (info.offset.x > 50) go(-1);
                }}
                className="absolute inset-0 cursor-grab touch-pan-y rounded-[24px] border border-[#F0D9CD] bg-white p-[7px] shadow-card active:cursor-grabbing"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[18px]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 480px) 84vw, 340px"
                    className="pointer-events-none object-cover"
                    unoptimized={photo.src.endsWith(".svg")}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <p className="mt-6 text-center font-serif text-[15px] italic text-[#8A6A5A]">{caption}</p>
      </Reveal>
    </section>
  );
}
