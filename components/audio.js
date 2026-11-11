"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// ── Sound effects, synthesised with Web Audio (no extra files to download) ──

let ctx = null;
let sfxMuted = false;
let noiseBuffer = null;

function getCtx() {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

function getNoise(ac) {
  if (noiseBuffer) return noiseBuffer;
  noiseBuffer = ac.createBuffer(1, ac.sampleRate * 0.25, ac.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  return noiseBuffer;
}

function tone(ac, { freq, start = 0, dur = 0.6, gain = 0.12, type = "sine" }) {
  const t = ac.currentTime + start;
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(gain, t + 0.015);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g).connect(ac.destination);
  osc.start(t);
  osc.stop(t + dur + 0.05);
}

export const sfx = {
  unlock() {
    getCtx();
  },
  setMuted(m) {
    sfxMuted = m;
  },
  click() {
    const ac = !sfxMuted && getCtx();
    if (!ac) return;
    tone(ac, { freq: 880, dur: 0.12, gain: 0.06 });
    tone(ac, { freq: 1320, start: 0.02, dur: 0.1, gain: 0.03 });
  },
  scratch() {
    const ac = !sfxMuted && getCtx();
    if (!ac) return;
    const src = ac.createBufferSource();
    src.buffer = getNoise(ac);
    const filter = ac.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 2200 + Math.random() * 1600;
    filter.Q.value = 0.9;
    const g = ac.createGain();
    const t = ac.currentTime;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.05, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
    src.connect(filter).connect(g).connect(ac.destination);
    src.start(t, Math.random() * 0.15, 0.09);
  },
  whoosh() {
    const ac = !sfxMuted && getCtx();
    if (!ac) return;
    const t = ac.currentTime;
    const src = ac.createBufferSource();
    src.buffer = getNoise(ac);
    src.loop = true;
    const filter = ac.createBiquadFilter();
    filter.type = "bandpass";
    filter.Q.value = 1.2;
    filter.frequency.setValueAtTime(350, t);
    filter.frequency.exponentialRampToValueAtTime(1800, t + 0.7);
    const g = ac.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.06, t + 0.25);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.8);
    src.connect(filter).connect(g).connect(ac.destination);
    src.start(t);
    src.stop(t + 0.85);
  },
  chime() {
    const ac = !sfxMuted && getCtx();
    if (!ac) return;
    [1046.5, 1318.5, 1568, 2093].forEach((f, i) => {
      tone(ac, { freq: f, start: i * 0.08, dur: 1.2, gain: 0.07 });
      tone(ac, { freq: f * 2.01, start: i * 0.08, dur: 0.6, gain: 0.015 });
    });
  },
  success() {
    const ac = !sfxMuted && getCtx();
    if (!ac) return;
    [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, i) =>
      tone(ac, { freq: f, start: i * 0.1, dur: 1, gain: 0.07, type: "triangle" })
    );
  },
  wrong() {
    const ac = !sfxMuted && getCtx();
    if (!ac) return;
    tone(ac, { freq: 330, dur: 0.25, gain: 0.05, type: "triangle" });
    tone(ac, { freq: 262, start: 0.12, dur: 0.3, gain: 0.05, type: "triangle" });
  },
};

// ── Background music with smooth fades and tab-visibility handling ──

export function useBackgroundMusic(src, targetVolume = 0.55) {
  const audioRef = useRef(null);
  const fadeRef = useRef(0);
  const wantPlayingRef = useRef(false); // what the guest chose (not tab visibility)
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    if (!src) return;
    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0;
    audioRef.current = audio;
    return () => {
      cancelAnimationFrame(fadeRef.current);
      audio.pause();
      audioRef.current = null;
    };
  }, [src]);

  const fadeTo = useCallback((to, ms, onDone) => {
    const audio = audioRef.current;
    if (!audio) return;
    cancelAnimationFrame(fadeRef.current);
    const from = audio.volume;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - start) / ms);
      audio.volume = Math.max(0, Math.min(1, from + (to - from) * p));
      if (p < 1) fadeRef.current = requestAnimationFrame(step);
      else onDone?.();
    };
    fadeRef.current = requestAnimationFrame(step);
  }, []);

  const fadeIn = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio
      .play()
      .then(() => fadeTo(targetVolume, 1800))
      .catch(() => {}); // missing file or blocked: sound effects still work
  }, [fadeTo, targetVolume]);

  const fadeOut = useCallback(
    (ms = 700) => {
      const audio = audioRef.current;
      if (!audio) return;
      fadeTo(0, ms, () => audio.pause());
    },
    [fadeTo]
  );

  // Must be called from inside a tap/click handler (autoplay policy).
  const start = useCallback(() => {
    wantPlayingRef.current = true;
    setSoundOn(true);
    sfx.setMuted(false);
    fadeIn();
  }, [fadeIn]);

  const toggle = useCallback(() => {
    if (wantPlayingRef.current) {
      wantPlayingRef.current = false;
      setSoundOn(false);
      sfx.setMuted(true);
      fadeOut();
    } else {
      start();
    }
  }, [fadeOut, start]);

  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) fadeOut(300);
      else if (wantPlayingRef.current) fadeIn();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [fadeIn, fadeOut]);

  return { soundOn, start, toggle };
}
