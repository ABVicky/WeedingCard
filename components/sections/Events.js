"use client";

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

export default function Events() {
  return (
    <section id="events" className="relative bg-blush-100/80 px-5 pb-16 pt-20">
      <SectionTitle label="The Celebration Unfolds" lines={["Sacred", "Ceremonies"]} divider />

      <div className="mt-6">
        {wedding.events.map((ev, i) => (
          <article key={ev.name} className="pt-10">
            <Reveal>
              {i > 0 && <DotDivider className="mb-8" />}
              <p className="text-center font-caps text-[12px] uppercase tracking-[0.3em] text-[#8A5A48]">{ev.date}</p>
              <h3 className="mt-1 text-center font-heading font-serif text-[34px] sm:text-[38px] italic leading-tight text-terra font-semibold">{ev.name}</h3>
            </Reveal>

            <Reveal delay={0.1} y={50} scale={0.96} className="mx-auto mt-5 w-[86%] max-w-[340px]">
              <div className="relative aspect-[9/14] overflow-hidden rounded-[24px] border-2 border-gold/40 shadow-card">
                {ev.media ? <Media media={ev.media} /> : <EventScene scene={ev.scene} />}
                {ev.showOverlay && <CardText ev={ev} light={ev.scene === "day" && !ev.media} />}
              </div>
            </Reveal>

            <Reveal delay={0.15} className="mx-auto mt-4 w-[86%] max-w-[340px]">
              <div className="rounded-2xl border border-gold/30 bg-white/95 px-4 py-4 text-center shadow-soft">
                {ev.time && (
                  <div className="mb-2 flex items-center justify-center gap-2 font-serif text-[15px] font-semibold text-[#4A2618]">
                    <span>{ev.weekday}</span>
                    <span className="h-3 w-px bg-gold/60" />
                    <span className="text-terra">{ev.time}</span>
                  </div>
                )}
                {ev.venue ? (
                  <p className="font-serif text-[15px] italic text-[#4A3328]">Venue: {ev.venue}</p>
                ) : (
                  <p className="font-caps text-[11px] uppercase tracking-[0.2em] text-[#8A5A48]">{ev.name} Location</p>
                )}
                <a
                  href={mapsUrl(ev)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sfx.click()}
                  className="pill mt-2.5 inline-flex items-center gap-2 px-6 py-2.5 text-[10.5px]"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}
