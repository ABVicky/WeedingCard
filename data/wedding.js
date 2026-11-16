// ─────────────────────────────────────────────────────────────
//  WEDDING CONFIG: every editable detail of the invitation.
// ─────────────────────────────────────────────────────────────

const wedding = {
  title: "Aashutosh & Atisha — A Sacred Union",
  description: "We cordially invite you to witness the beginning of our forever and celebrate the wedding ceremony of",
  // Public URL after deploying (used for WhatsApp / social link previews).
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  // ── Opening envelope ──
  envelope: {
    monogram: "AA", // embossed on the wax seal
    tapText: "Tap to Open",
  },

  // ── 1. Hero / blessings ──
  shloka: ["श्री गणेशाय नमः"],
  blessingLine:
    "We cordially invite you to witness the beginning of our forever and celebrate the wedding ceremony of",
  bride: {
    name: "Atisha",
    parents: "Daughter of Mr. Krishna Gopal Tibrewal & Mrs. Uma Devi Tibrewal",
    familyMembers: ["Mr. Krishna Gopal Tibrewal", "Mrs. Uma Devi Tibrewal"],
    grandparents: null,
  },
  groom: {
    name: "Aashutosh",
    parents: "Son of Late Dilip Kumar Jaiswal & Mrs. Lakhi Devi Jaiswal",
    familyMembers: ["Late Dilip Kumar Jaiswal", "Mrs. Lakhi Devi Jaiswal"],
    grandparents: null,
  },

  // ── 2. Save the date (scratch hearts + countdown) ──
  // Countdown target, ISO format with Indian timezone offset.
  weddingDate: "2026-12-04T18:00:00+05:30",
  scratch: [
    { label: "Day", value: "04" },
    { label: "Month", value: "December" },
    { label: "Year", value: "2026" },
  ],
  journeyLine: "The start of a beautiful journey...",

  // ── 3. Gallery ──
  gallery: {
    caption: "A moment captured in time, forever in our hearts",
    autoplayMs: 4000,
    photos: [
      { src: "/images/gallery-1.jpeg", alt: "Aashutosh & Atisha — Royal Love" },
      { src: "/images/gallery-2.jpeg", alt: "Aashutosh & Atisha — Endless Smiles" },
      { src: "/images/gallery-3.jpeg", alt: "Aashutosh & Atisha — Sacred Vows" },
      { src: "/images/gallery-4.jpeg", alt: "Aashutosh & Atisha — Moments Together" },
      { src: "/images/gallery-5.jpeg", alt: "Aashutosh & Atisha — Joyful Journey" },
    ],
  },

  // ── 4. Events ──
  // `scene` picks the built-in animated card art: "night" | "day" | "royal".
  events: [
    {
      name: "Tilak & Sangeet",
      cardTitle: "Tilak & Sangeet Ceremony",
      tagline: "An evening of traditional blessings, music & celebration",
      date: "1st December, 2026",
      weekday: "Tuesday",
      day: "01",
      monthYear: "December 2026",
      time: "6:00 Pm Onwards",
      venue: "Tilak & Sangeet Venue",
      address: null,
      mapUrl: "https://maps.app.goo.gl/f5chAFgZDP7yeUky6",
      scene: "sangeet",
      media: { type: "video", src: "/images/sangeet.mp4" },
      showOverlay: false,
    },
    {
      name: "Wedding",
      cardTitle: "Wedding Ceremony",
      tagline: "Sacred vows, seven pheras & eternal beginnings",
      date: "4th December, 2026",
      weekday: "Friday",
      day: "04",
      monthYear: "December 2026",
      time: "6:00 Pm Onwards",
      venue: "Wedding Ceremony Venue",
      address: null,
      mapUrl: "https://maps.app.goo.gl/z7HbXDrM9WqpAMxH7",
      scene: "wedding",
      media: { type: "video", src: "/images/saadi.mp4" },
      showOverlay: false,
    },
  ],

  // ── 5. Quiz ──
  // `answer` is the index (0-based) of the correct option.
  quiz: {
    intro: "How well do you know Aashutosh & Atisha?",
    questions: [
      {
        question: "Which side are you from?",
        options: [
          "Aashutosh's Side",
          "Atisha's Side",
          "Both Sides",
          "Neither 😄"
        ],
        answer: null,
      },
      {
        question: "How do you know the couple?",
        options: [
          "Friend",
          "Relative",
          "Family",
          "Colleague / Acquaintance"
        ],
        answer: null,
      },
      {
        question: "Where did the couple first meet?",
        options: [
          "At college",
          "At a friend's wedding",
          "With family",
          "At work"
        ],
        answer: 2,
      },
      {
        question: "Who made the first move?",
        options: [
          "Aashutosh",
          "Atisha",
          "Both made a move",
          "It's a secret! 🤫"
        ],
        answer: null,
      },
      {
        question: "Your wish for the couple ❤️",
        options: [
          "Wishing you a lifetime of love & happiness! ❤️",
          "Stay blessed and keep smiling together! 🥰",
          "May your love grow stronger every day! 💕",
          "Lots of laughter, adventures & beautiful memories! 🎉",
          "Happily Ever After! 💍"
        ],
        answer: null,
      },
    ],
    results: [
      {
        min: 5,
        title: "Soulmate Squad! ❤️",
        message: "You know the couple so well!"
      },
      {
        min: 3,
        title: "True Friend! 🥰",
        message: "You clearly share a special bond with the couple!"
      },
      {
        min: 0,
        title: "Wedding Vibes! 🎉",
        message: "Your presence and blessings mean the world to us!"
      },
    ],
  },

  // ── 7. Thank-you popup (shown when the quiz is finished) ──
  thankYou: {
    title: "Thank You!",
    message: "We can't wait to celebrate with you!",
  },

  // ── Images & audio ──
  images: {
    ganesh: "/images/ganesh.png", // a transparent PNG works too
  },
  music: "/audio/bg.mp3", // background music; leave "" to disable
  musicVolume: 0.55,
};

export default wedding;
