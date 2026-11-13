import Image from "next/image";
import { HeartDivider, Reveal } from "../ornaments";

export default function Footer() {
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
    </footer>
  );
}
