"use client";

import { useState } from "react";
import Image from "next/image";
import wedding from "@/data/wedding";
import { sfx } from "../audio";
import { DotDivider, Reveal, SectionTitle } from "../ornaments";
import EventScene from "./EventScene";

const mapsUrl = (ev) => ev.mapUrl || (ev.venue ? `https://maps.google.com/?q=${encodeURIComponent(ev.venue)}` : "#");

function Media({ media }) {
  if (media.type === "video") {
    return <video className="absolute inset-0 h-full w-full object-cover" src={media.src} autoPlay muted loop playsInline preload="metadata" />;
  }
  return <Image src={media.src} alt="" fill sizes="(max-width: 480px) 84vw, 340px" className="object-cover" loading="lazy" />;
}

function CardText({ ev, light }) {
  const tone = light ? "text-[#3A2A1E]" : "text-[#FDF6EE]";
  return (
    <div className={`absolute inset-x-0 top-[22%] px-4 text-center ${tone}`} style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}>
      {ev.tagline && <p className="mb-1 font-serif text-[12px] italic tracking-wide text-gold-light/90">{ev.tagline}</p>}
      <p className="font-names text-[38px] sm:text-[44px] leading-[1.15] text-[#FFE8B8]">{ev.cardTitle ?? ev.name}</p>
      <div className="mt-2.5 flex items-center justify-center gap-2.5 font-serif text-[16px] font-semibold text-white/95">
        <span>{ev.weekday}</span>
        <span className="h-5 w-px bg-gold/60" />
        <span className="font-caps text-[28px] font-normal leading-none text-gold-light">{ev.day}</span>
        <span className="h-5 w-px bg-gold/60" />
        <span>{ev.monthYear}</span>
      </div>
      <p className="mt-2 font-serif text-[16px] font-semibold tracking-wider text-gold-light/95">{ev.time}</p>
      <div className="mx-auto mt-3 flex w-32 items-center gap-1 opacity-70" aria-hidden="true">
        <span className="h-px flex-1 bg-gold/60" />
        <span className="h-1 w-1 rotate-45 bg-gold" />
        <span className="h-px flex-1 bg-gold/60" />
      </div>
    </div>
  );
}

function EventMapViewer({ ev }) {
  const [showMap, setShowMap] = useState(true);
  const embedQuery = ev.venue || `${ev.name} Wedding Ceremony`;
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(embedQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="mt-3.5 w-full text-left">
      <div className="mb-1.5 flex items-center justify-between px-1">
        <span className="font-caps text-[10px] uppercase tracking-[0.2em] text-[#8C5832] font-semibold flex items-center gap-1.5">
          <span>🗺️</span>
          <span>Location Map</span>
        </span>
        <button
          type="button"
          onClick={() => {
            sfx.click();
            setShowMap((prev) => !prev);
          }}
          className="font-caps text-[9px] uppercase tracking-wider text-[#A26D3E] hover:text-terra transition-colors underline underline-offset-2"
        >
          {showMap ? "Hide Map" : "Show Map"}
        </button>
      </div>

      {showMap && (
        <div className="relative h-[160px] sm:h-[180px] w-full overflow-hidden rounded-xl border border-gold/50 bg-[#FAF4EB] shadow-[inset_0_2px_8px_rgba(0,0,0,0.06)]">
          <iframe
            title={`${ev.name} Location Map`}
            src={embedUrl}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Bottom Badge Bar */}
          <div className="pointer-events-none absolute bottom-1.5 inset-x-2 flex items-center justify-between rounded-lg bg-white/95 px-2.5 py-1 text-[11px] font-serif text-[#4A2618] border border-gold/40 shadow-sm backdrop-blur-sm">
            <span className="truncate flex items-center gap-1 font-semibold">
              <span className="text-[12px] text-terra">📍</span>
              <span className="truncate">{ev.venue || `${ev.name} Location`}</span>
            </span>
            <span className="shrink-0 ml-1 text-[9px] uppercase font-caps font-semibold tracking-wider text-[#8C5832]">
              Interactive Map
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

const EVENT_FLOWERS = {
  "Tilak & Sangeet": { left: "🌼", right: "🪻" },
  Wedding: { left: "🌹", right: "🪷" },
};

export default function Events() {
  return (
    <section id="events" className="relative bg-blush-100/80 px-5 pb-16 pt-20">
      <SectionTitle label="The Celebration Unfolds" lines={["Sacred", "Ceremonies"]} divider emoji="🪷" />

      <div className="mt-6">
        {wedding.events.map((ev, i) => (
          <article key={ev.name} className="pt-10">
            <Reveal>
              {i > 0 && <DotDivider emoji="🌺" className="mb-8" />}
              <p className="text-center font-caps text-[12px] uppercase tracking-[0.3em] text-[#8A5A48] flex items-center justify-center gap-2">
                <span className="text-[12px]">{EVENT_FLOWERS[ev.name]?.left || "🌸"}</span>
                <span>{ev.date}</span>
                <span className="text-[12px]">{EVENT_FLOWERS[ev.name]?.right || "🌸"}</span>
              </p>
              <h3 className="mt-1 text-center font-heading font-serif text-[34px] sm:text-[38px] italic leading-tight text-terra font-semibold">{ev.name}</h3>
            </Reveal>

            <Reveal delay={0.1} y={50} scale={0.96} className="mx-auto mt-5 w-[86%] max-w-[340px]">
              <div className="relative aspect-[9/14] overflow-hidden rounded-[24px] border-2 border-gold/40 shadow-card">
                {ev.media ? <Media media={ev.media} /> : <EventScene scene={ev.scene} />}
                {ev.showOverlay && <CardText ev={ev} light={ev.scene === "day" && !ev.media} />}
              </div>
            </Reveal>

            <Reveal delay={0.15} className="mx-auto mt-4 w-[86%] max-w-[340px]">
              <div className="relative rounded-2xl border border-gold/50 bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#F5E9D8] p-4 text-center shadow-soft">
                {/* Corner gold brackets matching royal theme */}
                <span className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t border-l border-gold/70" />
                <span className="pointer-events-none absolute top-2 right-2 h-2 w-2 border-t border-r border-gold/70" />
                <span className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b border-l border-gold/70" />
                <span className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b border-r border-gold/70" />

                {/* Date, Weekday & Time */}
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center gap-2 font-serif text-[15.5px] font-bold text-[#5C2418]">
                    <span className="text-[14px]">🗓️</span>
                    <span>{ev.date}</span>
                    <span className="text-[13px] font-normal text-[#8A5A48]">({ev.weekday})</span>
                  </div>
                  {ev.time && (
                    <div className="mt-1 flex items-center justify-center gap-1.5 font-serif text-[14px] font-medium text-terra">
                      <span className="text-[13px]">⏰</span>
                      <span>{ev.time}</span>
                    </div>
                  )}
                </div>

                {/* Ornate Gold Divider */}
                <div className="my-3 mx-auto flex w-36 items-center gap-1.5 opacity-60" aria-hidden="true">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
                  <span className="text-[10px] text-gold">✦</span>
                  <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
                </div>

                {/* Location / Venue Mention */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center gap-1.5 font-serif text-[15px] sm:text-[16px] font-semibold text-[#4A2618]">
                    <span className="text-[16px] text-terra">📍</span>
                    <span>{ev.venue || `${ev.name} Venue`}</span>
                  </div>
                  {ev.address && (
                    <p className="mt-0.5 font-serif text-[12px] italic text-[#7C5A48] max-w-[280px]">
                      {ev.address}
                    </p>
                  )}
                </div>

                {/* Short Map Viewer */}
                <EventMapViewer ev={ev} />

                {/* Action Button: Location Mentioned with the Button */}
                <a
                  href={mapsUrl(ev)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sfx.click()}
                  className="pill mt-3.5 inline-flex w-full items-center justify-center gap-2 px-3.5 py-2.5 text-[11px] font-medium shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg className="h-4 w-4 text-gold-light shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="truncate">View {ev.venue ? ev.venue : `${ev.name} Location`} on Google Maps</span>
                  <span className="text-gold-light text-[11px] shrink-0">↗</span>
                </a>
              </div>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}
