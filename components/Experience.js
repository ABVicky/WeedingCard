"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import wedding from "@/data/wedding";
import { sfx, useBackgroundMusic } from "./audio";
import Envelope from "./Envelope";
import MusicButton from "./MusicButton";
import ThankYouModal from "./ThankYouModal";
import { FloatingPetals } from "./ornaments";
import Hero from "./sections/Hero";
import SaveTheDate from "./sections/SaveTheDate";
import Gallery from "./sections/Gallery";
import Events from "./sections/Events";
import Quiz from "./sections/Quiz";
import Footer from "./sections/Footer";

export default function Experience() {
  const [opened, setOpened] = useState(false);
  const [envelopeGone, setEnvelopeGone] = useState(false);
  const [thanks, setThanks] = useState(false);
  const music = useBackgroundMusic(wedding.music, wedding.musicVolume);

  useEffect(() => {
    document.body.classList.toggle("locked", !envelopeGone);
  }, [envelopeGone]);

  const handleOpen = () => {
    sfx.unlock();
    sfx.click();
    music.start();
    window.scrollTo(0, 0);
  };

  return (
    <MotionConfig reducedMotion="user">
      <main className="phone wedding-watermark min-h-screen">
        <Hero revealed={opened} />
        <SaveTheDate />
        <Gallery />
        <Events />
        <Quiz onFinish={() => setThanks(true)} />
        <Footer />
      </main>

      {opened && <FloatingPetals />}
      {envelopeGone && <MusicButton on={music.soundOn} onToggle={music.toggle} />}
      <ThankYouModal open={thanks} onClose={() => setThanks(false)} />

      <AnimatePresence>{!envelopeGone && <Envelope onOpen={handleOpen} onReveal={() => setOpened(true)} onDone={() => setEnvelopeGone(true)} />}</AnimatePresence>
    </MotionConfig>
  );
}
