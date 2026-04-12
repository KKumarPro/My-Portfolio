# Karan Kumar — Portfolio

A modern, dark-luxury editorial portfolio built with pure **HTML, CSS & JavaScript**. No frameworks. No build step. Just open `index.html`.

## File Structure

```
Karan-Portfolio/
├── index.html          ← Main entry point
├── css/
│   └── style.css       ← All styles, animations, design tokens
├── js/
│   └── main.js         ← All interactions, scroll effects, animations
├── assets/
│   ├── karan.png       ← Hero photo
│   ├── 1karan.png      ← About photo
│   ├── logo.png        ← Sidebar logo
│   ├── Glimmer.png     ← Project thumbnail
│   ├── reuseIT.png     ← Project thumbnail
│   ├── train.png       ← Project thumbnail
│   ├── avatar-3.svg    ← Testimonial avatar
│   ├── avatar-4.svg    ← Testimonial avatar
│   └── Karan_Kumar_Resume.pdf
└── README.md
```

## Features

- **Custom animated cursor** with magnetic hover effect
- **Scroll-triggered reveal animations** (fade-up, slide-left, slide-right, staggered delays)
- **Animated counter** numbers in About stats
- **Typing effect** cycling through roles in Hero
- **Parallax hero orbs** tied to scroll position
- **Smooth tab system** for Experience section with per-item stagger
- **Filterable project grid** with animated show/hide
- **Auto-advancing testimonial slider** with touch swipe support
- **Magnetic buttons** that subtly follow mouse
- **Scroll progress bar** at the top
- **Page loader** with animated KK monogram
- **Responsive sidebar nav** with tooltip labels and mobile hamburger
- **Contact form** wired to EmailJS
- **CSS noise grain** texture overlay for depth
- **CSS grid lines** on hero background

## Setup

1. Open `index.html` in a browser (no build step required).
2. For the **contact form**, replace these 3 values in `index.html` and `js/main.js`:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`
   (Get these from [emailjs.com](https://emailjs.com))

## Deployment

Drop the entire `Karan-Portfolio/` folder on **Vercel**, **Netlify**, or any static host.
