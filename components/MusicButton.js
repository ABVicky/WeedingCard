"use client";

import { motion } from "framer-motion";

export default function MusicButton({ on, onToggle }) {
  return (
    <div className="phone-fixed z-40">
      <motion.button
        type="button"
        onClick={onToggle}
        aria-label={on ? "Mute music" : "Play music"}
        className="pointer-events-auto absolute bottom-6 right-5 flex h-[46px] w-[46px] items-center justify-center rounded-full border-2 border-white/30 bg-terra-btn text-white shadow-[0_8px_18px_-6px_rgba(120,40,20,0.6)]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
      >
        {on && (
          <motion.span
            className="absolute inset-0 rounded-full border border-terra-btn"
            animate={{ scale: [1, 1.55], opacity: [0.6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 9h3l5-4v14l-5-4H4Z" />
          {on ? (
            <>
              <motion.path d="M15.5 9.5a3.5 3.5 0 0 1 0 5" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.2, repeat: Infinity }} />
              <motion.path d="M18 7a7 7 0 0 1 0 10" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }} />
            </>
          ) : (
            <path d="m16 10 5 5m0-5-5 5" />
          )}
        </svg>
      </motion.button>
    </div>
  );
}
