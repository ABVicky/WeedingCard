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

      {/* 2 Family Cards: Groom's Family & Bride's Family in Royal Ivory & Gold Silk Stationery (Above Logo1) */}
      <Reveal delay={0.1}>
        <div className="mx-auto mt-7 flex flex-col sm:grid sm:grid-cols-2 gap-4 w-full max-w-[340px] sm:max-w-[620px] text-center items-stretch">
          {/* Groom's Family Card */}
          <div className="relative h-full flex flex-col justify-between rounded-[20px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#F5E9D8] px-3.5 py-4 xs:px-4 xs:py-5 sm:px-5 sm:py-6 text-center border border-gold/70 shadow-[0_12px_32px_rgba(0,0,0,0.35),0_2px_12px_rgba(226,188,114,0.2)] overflow-hidden">
            {/* Inner fine gold filigree border */}
            <div className="pointer-events-none absolute inset-[4px] rounded-[16px] border border-gold/35" />

            {/* Corner gold brackets */}
            <span className="pointer-events-none absolute top-2 left-2 h-2.5 w-2.5 border-t border-l border-gold/90" />
            <span className="pointer-events-none absolute top-2 right-2 h-2.5 w-2.5 border-t border-r border-gold/90" />
            <span className="pointer-events-none absolute bottom-2 left-2 h-2.5 w-2.5 border-b border-l border-gold/90" />
            <span className="pointer-events-none absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r border-gold/90" />

            {/* Card Heading */}
            <div className="relative z-10 flex items-center justify-center">
              <h4 className="font-heading italic text-[17px] xs:text-[18.5px] sm:text-[20px] font-semibold text-[#7D1422] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] whitespace-nowrap">
                Groom&apos;s Family
              </h4>
            </div>

            {/* Small Gold Divider */}
            <div className="relative z-10 my-2.5 xs:my-3 mx-auto flex w-24 items-center gap-1 opacity-60" aria-hidden="true">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
              <span className="text-[8px] text-gold">✦</span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
            </div>

            {/* Family Members' Names */}
            <div className="relative z-10 my-auto space-y-2 px-1 py-1">
              {(wedding.groom.familyMembers || [wedding.groom.parents.replace(/^Son of\s+/i, "")]).map((member) => (
                <p key={member} className="font-serif text-[14.5px] xs:text-[15.5px] sm:text-[16px] font-semibold leading-snug text-[#3D241E]">
                  {member}
                </p>
              ))}
            </div>
          </div>

          {/* Bride's Family Card */}
          <div className="relative h-full flex flex-col justify-between rounded-[20px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#F5E9D8] px-3.5 py-4 xs:px-4 xs:py-5 sm:px-5 sm:py-6 text-center border border-gold/70 shadow-[0_12px_32px_rgba(0,0,0,0.35),0_2px_12px_rgba(226,188,114,0.2)] overflow-hidden">
            {/* Inner fine gold filigree border */}
            <div className="pointer-events-none absolute inset-[4px] rounded-[16px] border border-gold/35" />

            {/* Corner gold brackets */}
            <span className="pointer-events-none absolute top-2 left-2 h-2.5 w-2.5 border-t border-l border-gold/90" />
            <span className="pointer-events-none absolute top-2 right-2 h-2.5 w-2.5 border-t border-r border-gold/90" />
            <span className="pointer-events-none absolute bottom-2 left-2 h-2.5 w-2.5 border-b border-l border-gold/90" />
            <span className="pointer-events-none absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r border-gold/90" />

            {/* Card Heading */}
            <div className="relative z-10 flex items-center justify-center">
              <h4 className="font-heading italic text-[17px] xs:text-[18.5px] sm:text-[20px] font-semibold text-[#7D1422] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] whitespace-nowrap">
                Bride&apos;s Family
              </h4>
            </div>

            {/* Small Gold Divider */}
            <div className="relative z-10 my-2.5 xs:my-3 mx-auto flex w-24 items-center gap-1 opacity-60" aria-hidden="true">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
              <span className="text-[8px] text-gold">✦</span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
            </div>

            {/* Family Members' Names */}
            <div className="relative z-10 my-auto space-y-2 px-1 py-1">
              {(wedding.bride.familyMembers || [wedding.bride.parents.replace(/^Daughter of\s+/i, "")]).map((member, i) => (
                <p
                  key={member}
                  className={`font-serif text-[14.5px] xs:text-[15.5px] sm:text-[16px] font-semibold leading-snug text-[#3D241E] ${i === 2 ? "pt-1.5" : ""}`}
                >
                  {member}
                </p>
              ))}
            </div>
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

      {/* Footer Watermark */}
      <Reveal delay={0.35}>
        <div className="mt-10 pt-5 border-t border-gold/15">
          <a
            href="https://gajarhalwa.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sfx.click()}
            className="group inline-flex items-center justify-center gap-1.5 font-serif text-[11.5px] xs:text-[12.5px] italic text-gold-light/75 hover:text-gold-light transition-colors duration-200"
          >
            <span className="not-italic text-[12px]">🧡</span>
            <span>
              Made with Pyaar, Served with Mithaas —{" "}
              <span className="font-semibold text-gold underline underline-offset-4 decoration-gold/40 group-hover:decoration-gold transition-colors">
                Gajar Halwa
              </span>
            </span>
          </a>
        </div>
      </Reveal>
    </footer>
  );
}
