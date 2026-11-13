// ─────────────────────────────────────────────────────────────
//  WEDDING CONFIG: every editable detail of the invitation.
// ─────────────────────────────────────────────────────────────

const wedding = {
  title: "Aashutosh & Atisha — A Sacred Union",
  description: "With the blessings of the Almighty & our respected elders, Aashutosh & Atisha invite you to celebrate their wedding.",
  // Public URL after deploying (used for WhatsApp / social link previews).
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  // ── Opening envelope ──
  envelope: {
    monogram: "AA", // embossed on the wax seal
    tapText: "Tap to Open",
  },

  // ── 1. Hero / blessings ──
  shloka: ["वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ", "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा"],
  blessingLine:
    "With the blessings of the Almighty & our respected elders, we joyfully request your gracious presence on the wedding celebration of",
  groom: {
    name: "Aashutosh Jaiswal",
    parents: "Son of Late Dilip Kumar Jaiswal & Mrs. Lakhi Devi Jaiswal",
    grandparents: null,
  },
  bride: {
    name: "Atisha Tibrewal",
    parents: "Daughter of Mr. Krishna Gopal Tibrewal & Mrs. Uma Devi Tibrewal",
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
      address: "Tap below for live route navigation & directions",
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
      address: "Tap below for live route navigation & directions",
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
        question: "Where did Aashutosh & Atisha first meet?",
        options: ["At college", "At a friend's wedding", "On a trip to Goa", "At work"],
        answer: 1,
      },
      {
        question: "Who said “I love you” first?",
        options: ["Aashutosh", "Atisha", "Both at the same time", "Still waiting!"],
        answer: 0,
      },
      {
        question: "What is their favourite date-night food?",
        options: ["Pizza", "Pani puri", "Biryani", "Dosa"],
        answer: 2,
      },
      {
        question: "Where did Aashutosh propose?",
        options: ["On a beach", "In the mountains", "At home", "At a rooftop café"],
        answer: 3,
      },
      {
        question: "Who is the better dancer?",
        options: ["Aashutosh", "Atisha", "Neither 😄", "We'll find out at the Sangeet!"],
        answer: 3,
      },
    ],
    results: [
      { min: 5, title: "Soulmate Squad!", message: "You know us better than we know ourselves!" },
      { min: 3, title: "True Friend!", message: "You clearly pay attention. We love that!" },
      { min: 0, title: "Let's Catch Up!", message: "Come to the wedding and we'll tell you all our stories." },
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
