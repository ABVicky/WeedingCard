"use client";

import Image from "next/image";
import wedding from "@/data/wedding";
import { sfx } from "../audio";
import { HeartDivider, Reveal } from "../ornaments";

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    sfx.click();
    const heroEl = document.getElementById("hero");
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-wine px-6 pb-28 pt-20 text-center">
      {/* Auspicious golden mandala arch in background */}
      <div className="pointer-events-none absolute inset-x-0 -top-6 flex justify-center opacity-25" aria-hidden="true">
        <svg width="260" height="130" viewBox="0 0 260 130" fill="none" stroke="#D4AF37">
          <circle cx="130" cy="0" r="110" strokeWidth="1" strokeDasharray="3 4" />
          <circle cx="130" cy="0" r="90" strokeWidth="1" />
          <circle cx="130" cy="0" r="65" strokeWidth="1" strokeDasharray="2 3" />
          <circle cx="130" cy="0" r="40" strokeWidth="1" />
          <circle cx="130" cy="0" r="18" strokeWidth="1" />
        </svg>
      </div>

      {/* Monogram Logo2 */}
      <Reveal>
        <div className="relative mx-auto w-[200px] sm:w-[240px] aspect-[2041/2803]">
          <Image
            src="/images/logo2.png"
            alt="Aashutosh & Atisha Monogram Logo"
            fill
            sizes="(max-width: 640px) 200px, 240px"
            className="object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]"
            priority
          />
        </div>
      </Reveal>

      {/* With Love & We await your noble presence */}
      <Reveal delay={0.1}>
        <div className="mt-8 text-center">
          <p className="font-heading font-serif italic text-[26px] sm:text-[30px] leading-tight text-gold-light drop-shadow-sm">
            With Love
          </p>
          <p className="mt-1.5 font-serif text-[15px] sm:text-[16px] text-[#F7E7D4]/95 tracking-wide">
            We await your noble presence
          </p>
          <div className="mx-auto mt-3.5 flex w-32 items-center gap-1.5 opacity-60" aria-hidden="true">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-[10px] text-gold">✦</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>
      </Reveal>

      {/* 2 Cards: Groom & Bride */}
      <Reveal delay={0.2}>
        <div className="mx-auto mt-7 grid w-full max-w-[340px] sm:max-w-[580px] grid-cols-1 sm:grid-cols-2 gap-4 text-center">
          {/* Groom Card */}
          <div className="relative rounded-2xl border border-gold/45 bg-gradient-to-b from-[#581520]/90 to-[#430F17]/95 p-5 shadow-[0_10px_28px_rgba(0,0,0,0.35)] backdrop-blur">
            {/* Corner brackets */}
            <span className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t border-l border-gold/70" />
            <span className="pointer-events-none absolute top-2 right-2 h-2 w-2 border-t border-r border-gold/70" />
            <span className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b border-l border-gold/70" />
            <span className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b border-r border-gold/70" />

            <span className="inline-block rounded-full border border-gold/40 bg-gold/15 px-3 py-0.5 font-caps text-[9px] uppercase tracking-[0.24em] text-gold-light font-semibold">
              The Groom
            </span>
            <h4 className="mt-2.5 font-names text-[34px] sm:text-[38px] leading-tight text-[#FFE8B8]">
              {wedding.groom.name}
            </h4>
            <p className="mt-2 font-serif text-[13px] sm:text-[13.5px] leading-relaxed text-[#F3E2CF]/85">
              {wedding.groom.parents}
            </p>
          </div>

          {/* Bride Card */}
          <div className="relative rounded-2xl border border-gold/45 bg-gradient-to-b from-[#581520]/90 to-[#430F17]/95 p-5 shadow-[0_10px_28px_rgba(0,0,0,0.35)] backdrop-blur">
            {/* Corner brackets */}
            <span className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t border-l border-gold/70" />
            <span className="pointer-events-none absolute top-2 right-2 h-2 w-2 border-t border-r border-gold/70" />
            <span className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b border-l border-gold/70" />
            <span className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b border-r border-gold/70" />

            <span className="inline-block rounded-full border border-gold/40 bg-gold/15 px-3 py-0.5 font-caps text-[9px] uppercase tracking-[0.24em] text-gold-light font-semibold">
              The Bride
            </span>
            <h4 className="mt-2.5 font-names text-[34px] sm:text-[38px] leading-tight text-[#FFE8B8]">
              {wedding.bride.name}
            </h4>
            <p className="mt-2 font-serif text-[13px] sm:text-[13.5px] leading-relaxed text-[#F3E2CF]/85">
              {wedding.bride.parents}
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.25}>
        <HeartDivider className="mt-9" />
      </Reveal>

      {/* Tap button to directly go to the hero section */}
      <Reveal delay={0.3}>
        <a
          href="#hero"
          onClick={scrollToTop}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/60 bg-gold/15 px-6 py-2.5 font-caps text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-light shadow-[0_4px_16px_rgba(0,0,0,0.35)] backdrop-blur transition-all duration-300 hover:bg-gold/25 hover:border-gold hover:scale-105 active:scale-95"
          aria-label="Back to invitation hero section"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
          <span>Back to Top</span>
        </a>
      </Reveal>
    </footer>
  );
}
