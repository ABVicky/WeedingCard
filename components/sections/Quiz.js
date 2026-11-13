"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import wedding from "@/data/wedding";
import { sfx } from "../audio";
import { EASE, Reveal, SectionTitle } from "../ornaments";

const { intro, questions, results } = wedding.quiz;
const step = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
  exit: { opacity: 0, x: -60, transition: { duration: 0.3 } },
};

function HeartIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 22" className={className} aria-hidden="true">
      <path d="M12 22S0 14.5 0 6.6A6.4 6.4 0 0 1 12 3.3 6.4 6.4 0 0 1 24 6.6C24 14.5 12 22 12 22Z" fill="currentColor" />
    </svg>
  );
}

export default function Quiz({ onFinish }) {
  const [stage, setStage] = useState("intro"); // intro | question | result
  const [qi, setQi] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);

  const begin = () => {
    sfx.click();
    setQi(0);
    setScore(0);
    setPicked(null);
    setStage("question");
  };

  const choose = (i) => {
    if (picked !== null) return;
    const correct = i === questions[qi].answer;
    setPicked(i);
    if (correct) {
      setScore((s) => s + 1);
      sfx.chime();
    } else sfx.wrong();

    setTimeout(() => {
      setPicked(null);
      if (qi + 1 < questions.length) setQi(qi + 1);
      else {
        setStage("result");
        sfx.success();
        confetti({ particleCount: 120, spread: 90, startVelocity: 35, origin: { y: 0.6 }, scalar: 0.85, colors: ["#A8472F", "#E0A96D", "#D4A256", "#F2D2C4"], disableForReducedMotion: true });
      }
    }, 1300);
  };

  const q = questions[qi];
  const result = results.find((r) => score >= r.min) ?? results[results.length - 1];

  return (
    <section id="quiz" className="relative bg-blush-200/80 px-5 pb-24 pt-20">
      <SectionTitle label="Join the Celebration" lines={["Celebrate", "With Us"]} sub="A few fun questions before the big day!" divider emoji="🌻" />

      <Reveal delay={0.2} className="mx-auto mt-10 max-w-[360px]">
        <div className="relative min-h-[360px] overflow-hidden rounded-[24px] border border-[#F3E0D6] bg-white px-5 py-7 shadow-card">
          <AnimatePresence mode="wait">
            {stage === "intro" && (
              <motion.div key="intro" {...step} className="flex min-h-[300px] flex-col items-center justify-center text-center">
                <motion.div animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 1.4, repeat: Infinity }}>
                  <HeartIcon className="h-10 w-10 text-terra" />
                </motion.div>
                <p className="mt-5 font-heading italic text-[26px] sm:text-[30px] leading-tight text-terra font-semibold">{intro}</p>
                <p className="mt-2 font-serif text-[15px] italic text-cocoa-soft">{questions.length} quick questions · tap your answer</p>
                <button type="button" onClick={begin} className="pill mt-7 px-8 py-3 text-[11px]">
                  Start the Quiz
                </button>
              </motion.div>
            )}

            {stage === "question" && (
              <motion.div key={`q${qi}`} {...step}>
                <div className="flex items-center justify-between font-caps text-[10px] uppercase tracking-[0.2em] text-[#9B7B6B]">
                  <span>
                    Question {qi + 1} of {questions.length}
                  </span>
                  <span className="flex items-center gap-1 text-terra">
                    <HeartIcon className="h-3 w-3" /> {score}
                  </span>
                </div>
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-[#F6E4DA]">
                  <motion.div
                    className="h-full rounded-full bg-terra-btn"
                    initial={{ width: `${(qi / questions.length) * 100}%` }}
                    animate={{ width: `${((qi + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.6, ease: EASE }}
                  />
                </div>
                <p className="mt-6 text-center font-serif text-[22px] font-semibold leading-snug text-[#3B2A22]">{q.question}</p>
                <div className="mt-6 space-y-3">
                  {q.options.map((opt, i) => {
                    const isAnswer = i === q.answer;
                    const show = picked !== null;
                    const style = !show
                      ? "border-[#EED7CB] bg-blush-50 text-[#4A3328]"
                      : isAnswer
                        ? "border-terra-btn bg-terra-btn text-white"
                        : i === picked
                          ? "border-[#E6B9AE] bg-[#FBE9E4] text-[#B07A6E] line-through"
                          : "border-[#F1E2DA] bg-white text-[#B9A399]";
                    return (
                      <motion.button
                        key={opt}
                        type="button"
                        onClick={() => choose(i)}
                        disabled={show}
                        className={`flex w-full items-center justify-between rounded-full border px-5 py-3 text-left font-serif text-[17px] transition-colors duration-300 ${style}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={show && isAnswer ? { opacity: 1, y: 0, scale: [1, 1.04, 1] } : { opacity: 1, y: 0 }}
                        transition={{ delay: show ? 0 : 0.08 * i, duration: 0.4 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span>{opt}</span>
                        {show && isAnswer && <HeartIcon className="h-4 w-4 text-white" />}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {stage === "result" && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1, transition: { type: "spring", stiffness: 180, damping: 16 } }}
                exit={{ opacity: 0 }}
                className="flex min-h-[300px] flex-col items-center justify-center text-center"
              >
                <p className="label-caps">Your score</p>
                <p className="mt-2 font-serif text-[56px] font-bold leading-none text-terra lining-nums">
                  {score}
                  <span className="text-[28px] text-[#C9A08F]"> / {questions.length}</span>
                </p>
                <p className="mt-4 font-heading italic text-[28px] sm:text-[32px] text-terra font-semibold flex items-center justify-center gap-2">
                  <span className="text-[20px]">🌻</span>
                  <span>{result.title}</span>
                  <span className="text-[20px]">🌻</span>
                </p>
                <p className="mt-1 font-serif text-[16px] italic text-cocoa-soft">{result.message}</p>
                <div className="mt-7 flex gap-3">
                  <button type="button" onClick={begin} className="rounded-full border border-terra-btn px-5 py-2.5 font-caps text-[10px] uppercase tracking-[0.2em] text-terra active:scale-95">
                    Play Again
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      sfx.click();
                      onFinish();
                    }}
                    className="pill"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}
