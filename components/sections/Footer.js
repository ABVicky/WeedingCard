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
    <footer className="relative overflow-hidden bg-wine px-4 xs:px-6 pb-28 pt-20 text-center">
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

      {/* With Love & We await your noble presence */}
      <Reveal>
        <div className="text-center">
          <p className="font-heading font-serif italic text-[24px] xs:text-[26px] sm:text-[30px] leading-tight text-gold-light drop-shadow-sm">
            With Love
          </p>
          <p className="mt-1 font-serif text-[14px] xs:text-[15px] sm:text-[16px] italic text-[#FDF4E7]/90 tracking-wide px-2">
            We await your noble presence
          </p>
          <div className="mx-auto mt-3 flex w-32 items-center gap-1.5 opacity-60" aria-hidden="true">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-[10px] text-gold">✦</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>
      </Reveal>

      {/* 2 Cards: Groom & Bride in Royal Ivory & Gold Silk Stationery (Above Logo1) */}
      <Reveal delay={0.1}>
        <div className="mx-auto mt-7 flex flex-col sm:grid sm:grid-cols-2 gap-4 w-full max-w-[340px] sm:max-w-[600px] text-center">
          {/* Groom Card */}
          <div className="relative rounded-[20px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#F5E9D8] px-3.5 py-4 xs:px-4 xs:py-5 sm:px-5 sm:py-6 text-center border border-gold/70 shadow-[0_12px_32px_rgba(0,0,0,0.35),0_2px_12px_rgba(226,188,114,0.2)] overflow-hidden">
            {/* Inner fine gold filigree border */}
            <div className="pointer-events-none absolute inset-[4px] rounded-[16px] border border-gold/35" />

            {/* Corner gold brackets */}
            <span className="pointer-events-none absolute top-2 left-2 h-2.5 w-2.5 border-t border-l border-gold/90" />
            <span className="pointer-events-none absolute top-2 right-2 h-2.5 w-2.5 border-t border-r border-gold/90" />
            <span className="pointer-events-none absolute bottom-2 left-2 h-2.5 w-2.5 border-b border-l border-gold/90" />
            <span className="pointer-events-none absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r border-gold/90" />

            {/* Role Badge */}
            <span className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-[#F4E6D2]/80 px-3 py-0.5 font-caps text-[9px] uppercase tracking-[0.24em] font-semibold text-[#8C5832]">
              <span>👑</span>
              <span>The Groom</span>
            </span>

            {/* Groom Name (First & Last name on balanced lines to prevent overflow) */}
            <h4 className="relative z-10 mt-2.5 font-names text-[26px] xs:text-[28px] sm:text-[32px] leading-[1.08] text-[#7D1422] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
              <span className="block">{wedding.groom.name.split(" ")[0]}</span>
              {wedding.groom.name.split(" ").length > 1 && (
                <span className="block mt-0.5">{wedding.groom.name.split(" ").slice(1).join(" ")}</span>
              )}
            </h4>

            {/* Small Gold Divider */}
            <div className="relative z-10 my-2.5 mx-auto flex w-24 items-center gap-1 opacity-50" aria-hidden="true">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
              <span className="text-[8px] text-gold">✦</span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
            </div>

            {/* Parents Line */}
            <p className="relative z-10 font-serif text-[12.5px] xs:text-[13px] sm:text-[13.5px] font-medium leading-relaxed text-[#4A281E] px-1">
              {wedding.groom.parents}
            </p>
          </div>

          {/* Bride Card */}
          <div className="relative rounded-[20px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#F5E9D8] px-3.5 py-4 xs:px-4 xs:py-5 sm:px-5 sm:py-6 text-center border border-gold/70 shadow-[0_12px_32px_rgba(0,0,0,0.35),0_2px_12px_rgba(226,188,114,0.2)] overflow-hidden">
            {/* Inner fine gold filigree border */}
            <div className="pointer-events-none absolute inset-[4px] rounded-[16px] border border-gold/35" />

            {/* Corner gold brackets */}
            <span className="pointer-events-none absolute top-2 left-2 h-2.5 w-2.5 border-t border-l border-gold/90" />
            <span className="pointer-events-none absolute top-2 right-2 h-2.5 w-2.5 border-t border-r border-gold/90" />
            <span className="pointer-events-none absolute bottom-2 left-2 h-2.5 w-2.5 border-b border-l border-gold/90" />
            <span className="pointer-events-none absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r border-gold/90" />

            {/* Role Badge */}
            <span className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-[#F4E6D2]/80 px-3 py-0.5 font-caps text-[9px] uppercase tracking-[0.24em] font-semibold text-[#8C5832]">
              <span>👰</span>
              <span>The Bride</span>
            </span>

            {/* Bride Name (First & Last name on balanced lines to prevent overflow) */}
            <h4 className="relative z-10 mt-2.5 font-names text-[26px] xs:text-[28px] sm:text-[32px] leading-[1.08] text-[#7D1422] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
              <span className="block">{wedding.bride.name.split(" ")[0]}</span>
              {wedding.bride.name.split(" ").length > 1 && (
                <span className="block mt-0.5">{wedding.bride.name.split(" ").slice(1).join(" ")}</span>
              )}
            </h4>

            {/* Small Gold Divider */}
            <div className="relative z-10 my-2.5 mx-auto flex w-24 items-center gap-1 opacity-50" aria-hidden="true">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
              <span className="text-[8px] text-gold">✦</span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
            </div>

            {/* Parents Line */}
            <p className="relative z-10 font-serif text-[12.5px] xs:text-[13px] sm:text-[13.5px] font-medium leading-relaxed text-[#4A281E] px-1">
              {wedding.bride.parents}
            </p>
          </div>
        </div>
      </Reveal>

      {/* Monogram Logo1 below the Cards */}
      <Reveal delay={0.2}>
        <div className="relative mx-auto mt-10 xs:mt-12 w-[200px] xs:w-[230px] sm:w-[270px] aspect-[828/1103]">
          <Image
            src="/images/logo1.png"
            alt="Aashutosh & Atisha Logo"
            fill
            sizes="(max-width: 640px) 230px, 270px"
            className="object-contain drop-shadow-[0_6px_28px_rgba(0,0,0,0.5)]"
            priority
          />
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
