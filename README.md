# Muhammad Abdullah — Portfolio

React + Vite + Tailwind CSS v4 + GSAP (ScrollTrigger) + Lenis smooth scroll + AOS.

## Run locally
```
npm install
npm run dev
```
Open the localhost link it prints (usually http://localhost:5173).

## Build for production
```
npm run build
```
Output goes to the `dist/` folder.

## Deploy for free

### Vercel (easiest)
1. Push this folder to a new GitHub repo
2. Go to vercel.com → New Project → import that repo
3. Vercel auto-detects Vite — click Deploy
4. Live in about a minute, with a free `.vercel.app` link (custom domain optional)

### Netlify
1. Run `npm run build`
2. Go to app.netlify.com/drop and drag in the `dist` folder
   (or connect the GitHub repo for auto-deploys on every push)

## Where things live
- `src/components/Navbar.jsx` — nav, mobile menu, testimonial modal
- `src/components/Portfolio.jsx` — interactive cursor-reveal landing section
- `src/components/Hero.jsx` — intro, rotating role words, bio, socials
- `src/components/Welcome.jsx` — about text, stats, testimonial marquee
- `src/components/Credentials.jsx` — your certifications (Google, PSEB, Cisco)
- `src/components/Services.jsx` — the 6-service curved carousel
- `src/components/Contact.jsx` — WhatsApp-integrated contact form
- `src/components/Footer.jsx` — marquee, avatar, CTA buttons, links
- `src/components/SocialIcons.jsx` — Instagram/LinkedIn/Facebook icons

## Things to update later
- **Testimonials**: `Welcome.jsx` — the 3 cards are clearly marked placeholders. Swap in real client feedback once you have it.
- **WhatsApp number**: currently `923267642918` — search for it across files if it ever changes.
- **Photos**: already wired in from `src/assets/` (profile-hero.jpg, profile-lens.jpg, profile-avatar.jpg). Replace those files directly to update images everywhere they're used — keep the same filenames or update the imports.
- **Services/colors**: edit the `services` array at the top of `Services.jsx`.
