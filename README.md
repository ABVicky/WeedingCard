# Aashutosh & Atisha — A Sacred Union

Digital wedding invitation · Next.js 14 (App Router) · Tailwind CSS · Framer Motion

## Run locally

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

## Deploy on Vercel

1. Push this folder to a GitHub repo (the `.mov` recording is git-ignored).
2. On vercel.com → **Add New → Project** → import the repo → **Deploy** (no settings needed).
3. In **Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL` = your live URL
   (e.g. `https://rahul-weds-priya.vercel.app`) and redeploy so WhatsApp link previews work.

## Editing everything in `data/wedding.js`

| To change… | Edit |
| --- | --- |
| Page title / description | `title`, `description` |
| Envelope text & seal monogram | `envelope.tapText`, `envelope.message`, `envelope.monogram` |
| Shloka & blessing line | `shloka` (array of lines), `blessingLine` |
| Names, parents, grandparents | `groom`, `bride` |
| Countdown target | `weddingDate`, ISO format with `+05:30` |
| Scratch-heart values | `scratch` (label/value ×3) |
| Gallery photos | `gallery.photos` — `{ src, alt }` |
| Events | `events[]` — name, date, weekday, day, monthYear, time, venue |
| Event artwork | `events[].media` = `{ type: "image" \| "video", src }`; set `showOverlay: false` if your art already has text. Without media, the built-in animated `scene` (`night` / `day` / `royal`) is used. |
| Quiz | `quiz.questions[]` — `question`, `options`, `answer` (0-based index of the correct option); `quiz.results` sets the score messages |
| Thank-you popup | `thankYou` |
| Ganesh image | `images.ganesh` (a transparent PNG is ideal) |
| Music | `music` (default `/audio/bg.mp3`), `musicVolume` |

### Photos
Put files in `public/images/` (JPG/PNG/WebP) and point the config at them, e.g.
`{ src: "/images/us-1.jpg", alt: "Aashutosh & Atisha" }`. Portrait 2:3 works best for the gallery
and 9:16 for event cards. Images are lazy-loaded and served as optimised WebP/AVIF.

### Music & sounds
- Place your track at `public/audio/bg.mp3` (128 kbps, under ~3 MB recommended).
- It starts when the guest taps the envelope (browsers block autoplay), fades in and out,
  and pauses automatically when the tab is hidden. The floating button mutes and unmutes it.
- Scratch, chime and click sounds are generated in the browser with Web Audio, so they need no files.

## Structure

```
app/                   layout (fonts, meta, viewport), page, OG preview image, global CSS
components/
  Experience.js        page shell: envelope → sections, music, thank-you modal
  Envelope.js          maroon embossed envelope, ivory wax seal, flap + light-burst opening
  audio.js             background-music hook (fades, visibility) + synthesised SFX
  MusicButton.js       floating mute/unmute button
  ThankYouModal.js
  ornaments.js         Reveal, corner brackets, dividers, section titles, butterflies, petals
  sections/            Hero, SaveTheDate (scratch hearts + countdown), Gallery,
                       Events (+ EventScene art), Quiz, Footer
data/wedding.js        ← all editable content
public/images, public/audio
```
