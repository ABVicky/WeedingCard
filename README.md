<div align="center">

# 💍 Aashutosh & Atisha — A Sacred Union
### *॥ शुभ विवाह ॥*

An immersive, interactive digital wedding invitation crafted with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.  
Designed to deliver a bespoke royal Indian wedding experience on every screen.

---

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Web Audio API](https://img.shields.io/badge/Web_Audio-Synthesized_SFX-E2BC72?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
[![Vercel](https://img.shields.io/badge/Vercel-Ready-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

---

</div>

<br />

## ✨ Experience Highlights

* **💌 Royal 3D Envelope & Wax Seal**  
  Rich maroon embossed paper texture, luxury gold border motifs, and an authentic embossed **"AA" gold wax seal**. Tapping the seal triggers an interactive flap unseal, slide-out preview card, and a celestial light burst.

* **🎵 Ambient Background Music & Synthesized SFX**  
  Audio unlocks on user interaction adhering to browser autoplay policies. Features smooth volume fade-in/out, automatic pause when the tab loses focus, and synthesized Web Audio sound effects (paper whoosh, seal crackle, scratch sounds, and celebrations) requiring zero external sound assets.

* **🎬 Custom Video Ceremonies**  
  Dedicated MP4 animated illustration loops for ceremonies:
  * **Tilak & Sangeet** (`sangeet.mp4`) — Romantic dance under glowing chandeliers.
  * **Wedding Ceremony** (`saadi.mp4`) — Sacred mandap vows surrounded by falling rose petals.
  * Direct Google Maps navigation buttons for venue directions.

* **💖 Interactive Scratch Card & Countdown**  
  Interactive foil scratch cards reveal the wedding date (*04 · December · 2026*), complemented by a live countdown timer.

* **📸 Romantic Photo Gallery**  
  Touch-friendly carousel with smooth auto-progression and elegant framing.

* **🎉 Couple Trivia Quiz**  
  Interactive 5-question wedding quiz for guests with instant scoring and a celebratory confetti modal.

* **📱 Mobile-First Native App Feel**  
  Meticulously tuned viewport geometry, smooth compositor transforms, haptic vibration support, and buttery 60 FPS transitions.

<br />

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/ABVicky/WeedingCard.git
cd WeedingCard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the invitation.

### 4. Build for production
```bash
npm run build
npm start
```

<br />

---

## ⚙️ Configuration (`data/wedding.js`)

All celebration details, event dates, media, and family texts are managed in a single central config file: [`data/wedding.js`](./data/wedding.js).

| Section | Keys | Description |
| :--- | :--- | :--- |
| **Envelope** | `envelope.monogram`, `envelope.tapText` | Text on the wax seal & tap-to-reveal prompt |
| **Blessings & Hero** | `shloka`, `blessingLine`, `groom`, `bride` | Sanskrit shlokas, couple names, and parents' details |
| **Save The Date** | `weddingDate`, `scratch` | ISO date with `+05:30` offset for countdown & scratch card digits |
| **Ceremony Events** | `events[]` | Event title, date, time, weekday, Google Maps link, and custom media (`/images/sangeet.mp4`, `/images/saadi.mp4`) |
| **Gallery** | `gallery.photos` | List of photo assets with custom alt text |
| **Quiz** | `quiz.questions[]`, `quiz.results` | Fun questions, options, correct answer index, and score messages |
| **Background Music** | `music`, `musicVolume` | Audio path (`/audio/bg.mp3`) and default volume level (0.0 to 1.0) |

<br />

---

## 📁 Project Architecture

```plaintext
weeding-card/
├── app/
│   ├── globals.css           # Tailwind layers, gradients, shimmer & paper grain
│   ├── layout.js             # Google Fonts (Great Vibes, Playfair, Cormorant, Cinzel) & SEO metadata
│   ├── opengraph-image.js    # Dynamic social media / WhatsApp link preview generator
│   └── page.js               # Root page entrypoint
├── components/
│   ├── Envelope.js           # 3D flap, Royal Gold Wax Seal, embossed line art
│   ├── Experience.js         # Master state controller (envelope reveal, music, modal)
│   ├── MusicButton.js        # Floating glassmorphic audio control
│   ├── ThankYouModal.js      # Quiz completion modal with animated confetti
│   ├── audio.js              # Synthesized Web Audio API sound effects & audio manager
│   ├── ornaments.js          # Shared visual flourishes (dividers, petals, borders)
│   └── sections/
│       ├── Hero.js           # Ganesha invocation, shlokas & couple introduction
│       ├── SaveTheDate.js    # Interactive canvas scratch cards & countdown timer
│       ├── Gallery.js        # Auto-advancing memories carousel
│       ├── Events.js         # Sacred Ceremonies with video cards & Google Maps links
│       ├── EventScene.js     # Fallback CSS/SVG animated ceremony art
│       ├── Quiz.js           # Interactive couple trivia game
│       └── Footer.js         # Heartfelt closing message & RSVP notes
├── data/
│   └── wedding.js            # Central wedding configuration & content
└── public/
    ├── audio/                # Background soundtrack (bg.mp3)
    └── images/               # Media assets (seal.png, saadi.mp4, sangeet.mp4, ganesh.png)
```

<br />

---

## 🌐 Deploy to Vercel

The easiest way to share your invitation with guests:

1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **Add New → Project**.
3. Import `WeedingCard` and click **Deploy**.
4. In **Settings → Environment Variables**, set:
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```
   *(This ensures high-resolution WhatsApp and iMessage rich preview cards render properly when sharing the link).*

<br />

---

<div align="center">

Crafted with ❤️ for **Aashutosh & Atisha**  
*May love, laughter, and happily-ever-after guide this sacred journey.*

</div>
