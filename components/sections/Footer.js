"use client";

import Image from "next/image";
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
      <Reveal>
        <div className="relative mx-auto w-[220px] sm:w-[260px] aspect-[2041/2803]">
          <Image
            src="/images/logo2.png"
            alt="Aashutosh & Atisha Monogram Logo"
            fill
            sizes="(max-width: 640px) 240px, 280px"
            className="object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]"
            priority
          />
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <HeartDivider className="mt-6" />
      </Reveal>

      {/* Tap button to directly go to the hero section */}
      <Reveal delay={0.25}>
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
