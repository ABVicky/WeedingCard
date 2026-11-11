"use client";

import { AnimatePresence, motion } from "framer-motion";
import wedding from "@/data/wedding";
import { sfx } from "./audio";

export default function ThankYouModal({ open, onClose }) {
  const close = () => {
    sfx.click();
    onClose();
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-y-0 left-1/2 z-[60] flex w-full max-w-[480px] -translate-x-1/2 items-center justify-center bg-[#2A0D14]/55 px-8 backdrop-blur-[3px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="thanks-title"
        >
          <motion.div
            className="relative w-full max-w-[320px] rounded-[26px] bg-white px-6 pb-8 pt-10 text-center shadow-2xl"
            initial={{ scale: 0.6, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1, transition: { type: "spring", stiffness: 220, damping: 18 } }}
            exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.2 } }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blush-200"
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 12 }}
            >
              <motion.svg viewBox="0 0 24 22" className="h-8 w-8 fill-terra-btn" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.6 }}>
                <path d="M12 22S0 14.5 0 6.6A6.4 6.4 0 0 1 12 3.3 6.4 6.4 0 0 1 24 6.6C24 14.5 12 22 12 22Z" />
              </motion.svg>
            </motion.div>
            <h3 id="thanks-title" className="mt-5 font-heading italic text-[36px] sm:text-[42px] leading-tight text-terra font-semibold">
              {wedding.thankYou.title}
            </h3>
            <p className="mt-2 font-serif text-[18px] italic text-cocoa-soft">{wedding.thankYou.message}</p>
            <button type="button" onClick={close} className="pill mt-7 px-10 py-3 text-[11px]">
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
