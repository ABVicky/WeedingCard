import wedding from "@/data/wedding";
import { HeartDivider, Reveal } from "../ornaments";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-wine px-6 pb-28 pt-24 text-center">
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
        <h2 className="font-names text-[46px] sm:text-[58px] leading-[1.2] text-gold-light">
          <span className="block">{wedding.groom.name}</span>
          <span className="block font-heading italic text-[28px] text-gold">&amp;</span>
          <span className="block">{wedding.bride.name}</span>
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <HeartDivider className="mt-6" />
      </Reveal>
    </footer>
  );
}
