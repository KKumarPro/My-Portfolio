/* ================================================================
   KARAN KUMAR — MAIN JS
   GSAP 3 + ScrollTrigger · Vanilla · No other dependencies
   ================================================================ */
'use strict';

/* ── utils ── */
const $  = (s,p=document) => p.querySelector(s);
const $$ = (s,p=document) => [...p.querySelectorAll(s)];
const lerp = (a,b,t) => a+(b-a)*t;
const clamp = (v,lo,hi) => Math.min(Math.max(v,lo),hi);

/* ── GSAP register ── */
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/* ══════════════════════════════════════════
   1. (single fixed palette — no theme toggle)
══════════════════════════════════════════ */
const html = document.documentElement;

/* ════════════════════════════════════════════
   2. PRELOADER — animated counter
════════════════════════════════════════════ */
const preloader = $('#preloader');
const preNum    = $('#pre-num');
const preBar    = $('#pre-bar');
let pct = 0;

// Fake load progress ticks
const preInc = setInterval(() => {
  pct = Math.min(pct + Math.random() * 14, 92);
  preNum.textContent = Math.round(pct);
  preBar.style.width = pct + '%';
}, 90);

window.addEventListener('load', () => {
  clearInterval(preInc);

  // Animate counter to 100
  gsap.to({ n: pct }, {
    n: 100, duration: 0.4, ease: 'power2.out',
    onUpdate() {
      const v = Math.round(this.targets()[0].n);
      preNum.textContent = v;
      preBar.style.width = v + '%';
    },
    onComplete() {
      // Slide preloader up and out, then kick off the site
      gsap.to(preloader, {
        yPercent: -100, duration: 0.9, ease: 'expo.inOut', delay: 0.25,
        onComplete() {
          preloader.remove();
          startSite();          // ← called here, after loader is gone
        }
      });
    }
  });
});

/* ════════════════════════════════════════════
   3. HERO ENTRANCE (called after preloader exits)
════════════════════════════════════════════ */

// Safety fallback: if startSite() hasn't fired within 4s, force it
let siteStarted = false;
setTimeout(() => { if (!siteStarted) startSite(); }, 4000);

function startSite() {
  if (siteStarted) return;
  siteStarted = true;

  // Set initial states for hero elements
  gsap.set(['#h-pill','#h-sub','#h-desc','#h-ctas','#h-socials'], { opacity: 0, y: 20 });
  gsap.set('#hl1', { y: '105%', skewY: 2 });
  gsap.set('#hl2', { y: '105%', skewY: 1 });
  gsap.set('#hero-visual', { opacity: 0, x: 48 });
  gsap.set(['#fp1','#fp2','#fp3','#fp4'], { opacity: 0, scale: 0.7 });
  gsap.set('#scroll-ind', { opacity: 0, y: 12 });

  // Animate hero in
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl
    .to('#h-pill',    { opacity: 1, y: 0, duration: 0.8 }, 0.05)
    .to('#hl1',       { y: '0%', skewY: 0, duration: 1.1 }, 0.10)
    .to('#hl2',       { y: '0%', skewY: 0, duration: 1.1 }, 0.22)
    .to('#h-sub',     { opacity: 1, y: 0, duration: 0.8 }, 0.35)
    .to('#h-desc',    { opacity: 1, y: 0, duration: 0.8 }, 0.45)
    .to('#h-ctas',    { opacity: 1, y: 0, duration: 0.8 }, 0.55)
    .to('#h-socials', { opacity: 1, y: 0, duration: 0.8 }, 0.62)
    .to('#hero-visual', { opacity: 1, x: 0, duration: 1.3 }, 0.18)
    .to('#fp1',       { opacity: 1, scale: 1, duration: 0.6 }, 0.55)
    .to('#fp2',       { opacity: 1, scale: 1, duration: 0.6 }, 0.65)
    .to('#fp3',       { opacity: 1, scale: 1, duration: 0.6 }, 0.72)
    .to('#fp4',       { opacity: 1, scale: 1, duration: 0.6 }, 0.79)
    .to('#scroll-ind',{ opacity: 1, y: 0, duration: 0.6 }, 0.90);

  // Init role slider after delay
  setTimeout(initRoleSlider, 1800);

  // Init all scroll-driven animations
  initScrollAnimations();
}

/* ══════════════════════════════════════════
   4. ROLE WORD CYCLER
══════════════════════════════════════════ */
function initRoleSlider() {
  const words = $$('.hw');
  let ci = 0;
  const cycle = () => {
    words[ci].classList.remove('active');
    words[ci].classList.add('exit');
    setTimeout(() => words[ci].classList.remove('exit'), 560);
    ci = (ci + 1) % words.length;
    words[ci].classList.add('active');
  };
  setInterval(cycle, 2600);
}

/* ══════════════════════════════════════════
   5. ALL SCROLL ANIMATIONS (ScrollTrigger)
══════════════════════════════════════════ */
function initScrollAnimations() {

  /* ─── staggered fade-up for .reveal-up elements ─── */
  // Set initial hidden state via GSAP so there's no CSS flash
  gsap.set('.reveal-up', { opacity: 0, y: 48 });
  gsap.set('.reveal-right', { opacity: 0, x: 60 });

  ScrollTrigger.batch('.reveal-up', {
    start: 'top 90%',
    onEnter: els => gsap.to(els, {
      opacity: 1, y: 0, duration: 0.85,
      ease: 'expo.out', stagger: 0.09,
      overwrite: true,
    }),
    once: true,
  });

  ScrollTrigger.batch('.reveal-right', {
    start: 'top 88%',
    onEnter: els => gsap.to(els, {
      opacity: 1, x: 0, duration: 0.9,
      ease: 'expo.out', stagger: 0.1,
      overwrite: true,
    }),
    once: true,
  });

  /* ─── section title split lines ─── */
  $$('.split-title').forEach(el => {
    const lines = el.querySelectorAll('.line-inner');
    if (lines.length) {
      gsap.set(lines, { y: '105%', skewY: 2, opacity: 0 });
      gsap.to(lines, {
        y: '0%', skewY: 0, opacity: 1,
        duration: 1.1, ease: 'expo.out', stagger: 0.12,
        scrollTrigger: { trigger: el, start: 'top 84%', once: true }
      });
    } else {
      gsap.set(el, { y: 50, opacity: 0 });
      gsap.to(el, {
        y: 0, opacity: 1, duration: 1, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 84%', once: true }
      });
    }
  });

  /* ─── section eyebrows ─── */
  $$('.sec-eyebrow').forEach(el => {
    gsap.set(el, { x: -20, opacity: 0 });
    gsap.to(el, {
      x: 0, opacity: 1, duration: 0.7, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true }
    });
  });

  /* ─── about image ─── */
  gsap.set('.abt-img-wrap', { x: 80, opacity: 0 });
  gsap.to('.abt-img-wrap', {
    x: 0, opacity: 1, duration: 1.2, ease: 'expo.out',
    scrollTrigger: { trigger: '.abt-img-wrap', start: 'top 82%', once: true }
  });
  gsap.set(['.abt-corner.tl', '.abt-corner.br'], { scale: 0, opacity: 0 });
  gsap.to(['.abt-corner.tl', '.abt-corner.br'], {
    scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.5)', stagger: 0.15,
    scrollTrigger: { trigger: '.abt-img-wrap', start: 'top 78%', once: true }
  });

  /* ─── skill bars ─── */
  ScrollTrigger.create({
    trigger: '.bars', start: 'top 82%', once: true,
    onEnter() {
      $$('.bi-fill').forEach((fill, i) => {
        gsap.to(fill, {
          width: fill.closest('.bar-item').dataset.w + '%',
          duration: 1.4, ease: 'expo.out', delay: i * 0.13,
        });
      });
    }
  });

  /* ─── counters ─── */
  $$('[data-count]').forEach(el => {
    const end = parseInt(el.dataset.count);
    const sfx = el.dataset.suffix || '';
    ScrollTrigger.create({
      trigger: el, start: 'top 88%', once: true,
      onEnter() {
        gsap.fromTo({ v: 0 }, { v: 0 }, {
          v: end, duration: 1.8, ease: 'expo.out',
          onUpdate() { el.textContent = Math.round(this.targets()[0].v) + sfx; }
        });
      }
    });
  });

  /* ─── project rows ─── */
  $$('.proj-row').forEach((row, i) => {
    gsap.set(row, { y: 60, opacity: 0 });
    gsap.to(row, {
      y: 0, opacity: 1, duration: 0.9, ease: 'expo.out',
      scrollTrigger: { trigger: row, start: 'top 88%', once: true }
    });
  });

  /* ─── timeline items ─── */
  $$('.tl-item').forEach((item, i) => {
    gsap.set(item, { x: -30, opacity: 0 });
    gsap.to(item, {
      x: 0, opacity: 1, duration: 0.8, ease: 'expo.out',
      scrollTrigger: { trigger: item, start: 'top 89%', once: true }
    });
    // dot activation on scroll progress
    ScrollTrigger.create({
      trigger: item, start: 'top 65%', end: 'bottom 35%',
      onEnter:     () => item.querySelector('.tl-dot')?.classList.add('tl-dot-active'),
      onLeaveBack: () => item.querySelector('.tl-dot')?.classList.remove('tl-dot-active'),
    });
  });

  /* ─── service cards ─── */
  $$('.svc-card').forEach((card, i) => {
    gsap.set(card, { y: 50, opacity: 0 });
    gsap.to(card, {
      y: 0, opacity: 1, duration: 0.85, ease: 'expo.out', delay: i * 0.1,
      scrollTrigger: { trigger: card, start: 'top 88%', once: true }
    });
  });

  /* ─── testimonial cards ─── */
  $$('.ts-card').forEach((card, i) => {
    gsap.set(card, { y: 50, opacity: 0 });
    gsap.to(card, {
      y: 0, opacity: 1, duration: 0.85, ease: 'expo.out', delay: i * 0.1,
      scrollTrigger: { trigger: card, start: 'top 88%', once: true }
    });
  });

  /* ─── certification cards ─── */
  $$('.cert-card').forEach((card, i) => {
    gsap.set(card, { x: -40, opacity: 0 });
    gsap.to(card, {
      x: 0, opacity: 1, duration: 0.75, ease: 'expo.out', delay: i * 0.09,
      scrollTrigger: { trigger: card, start: 'top 88%', once: true }
    });
  });

  /* ─── contact headline ─── */
  gsap.set('.ct-headline', { y: 50, opacity: 0 });
  gsap.to('.ct-headline', {
    y: 0, opacity: 1, duration: 1, ease: 'expo.out',
    scrollTrigger: { trigger: '.ct-headline', start: 'top 84%', once: true }
  });

  /* ─── hero orbs parallax ─── */
  gsap.to('.orb-1', {
    y: 160, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5 }
  });
  gsap.to('.orb-2', {
    y: -100, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 2 }
  });

  /* ─── horizontal skill tags ─── */
  gsap.set('.skill-cols .sk-items span', { y: 20, opacity: 0 });
  gsap.to('.skill-cols .sk-items span', {
    y: 0, opacity: 1, duration: 0.55, ease: 'expo.out', stagger: 0.04,
    scrollTrigger: { trigger: '.skill-cols', start: 'top 84%', once: true }
  });

  /* ─── footer ─── */
  gsap.set('.footer', { opacity: 0, y: 30 });
  gsap.to('.footer', {
    opacity: 1, y: 0, duration: 0.8, ease: 'expo.out',
    scrollTrigger: { trigger: '.footer', start: 'top 96%', once: true }
  });
}

/* ══════════════════════════════════════════
   6. CURSOR
══════════════════════════════════════════ */
const cDot  = $('#c-dot');
const cRing = $('#c-ring');
const isTouch = !window.matchMedia('(pointer:fine)').matches;

if (isTouch) {
  cDot?.remove(); cRing?.remove();
  document.body.style.cursor = 'auto';
} else {
  let mx = -200, my = -200, rx = -200, ry = -200;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cDot.style.left = mx + 'px';
    cDot.style.top  = my + 'px';
  });

  // Ring follows with lerp
  (function loopCursor() {
    rx = lerp(rx, mx, .1);
    ry = lerp(ry, my, .1);
    cRing.style.left = rx + 'px';
    cRing.style.top  = ry + 'px';
    requestAnimationFrame(loopCursor);
  })();

  document.addEventListener('mouseleave', () => {
    gsap.to([cDot, cRing], { opacity: 0, duration: .3 });
  });
  document.addEventListener('mouseenter', () => {
    gsap.to([cDot, cRing], { opacity: 1, duration: .3 });
  });

  $$('a,button,.proj-row,.ts-card,.svc-card,.sk-items span,.pf,.ct-link-row,.cert-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('c-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('c-hover'));
  });

  document.addEventListener('mousedown', () => document.body.classList.add('c-down'));
  document.addEventListener('mouseup',   () => document.body.classList.remove('c-down'));
}

/* ══════════════════════════════════════════
   7. SCROLL PROGRESS BAR
══════════════════════════════════════════ */
const sp = $('#sp');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
  sp.style.width = clamp(pct, 0, 100) + '%';
}, { passive: true });

/* ══════════════════════════════════════════
   8. HEADER — hide on scroll down, show on up
══════════════════════════════════════════ */
const header = $('#header');
let prevY = 0, hidden = false;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 60);
  if (y > 200) {
    if (y - prevY > 10 && !hidden) {
      gsap.to(header, { y: '-100%', duration: .45, ease: 'expo.out' });
      hidden = true;
    } else if (prevY - y > 6 && hidden) {
      gsap.to(header, { y: '0%', duration: .45, ease: 'expo.out' });
      hidden = false;
    }
  } else {
    if (hidden) { gsap.to(header, { y: '0%', duration: .4, ease: 'expo.out' }); hidden = false; }
  }
  prevY = y;

  // Active nav link
  const sections = $$('section[id]');
  let cur = sections[0]?.id || '';
  sections.forEach(s => { if (y + 140 >= s.offsetTop) cur = s.id; });
  $$('.nav-center li a').forEach(a => {
    const match = a.getAttribute('href') === '#' + cur;
    a.classList.toggle('active', match);
  });
}, { passive: true });

/* ══════════════════════════════════════════
   9. MOBILE MENU
══════════════════════════════════════════ */
const burger  = $('#burger');
const mobMenu = $('#mob-menu');

const openMenu = () => {
  mobMenu.classList.add('open');
  burger.classList.add('open');
  document.body.style.overflow = 'hidden';
};
const closeMenu = () => {
  mobMenu.classList.remove('open');
  burger.classList.remove('open');
  document.body.style.overflow = '';
};

burger.addEventListener('click', () => mobMenu.classList.contains('open') ? closeMenu() : openMenu());
$$('.mob-link').forEach(l => l.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => e.key === 'Escape' && closeMenu());

/* ══════════════════════════════════════════
   10. SMOOTH SCROLL (GSAP ScrollToPlugin)
══════════════════════════════════════════ */
$$('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = $(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    closeMenu();
    const navH = parseInt(getComputedStyle(html).getPropertyValue('--nav-h')) || 68;
    gsap.to(window, {
      scrollTo: { y: target, offsetY: navH },
      duration: 1.1, ease: 'expo.inOut',
    });
  });
});

/* ══════════════════════════════════════════
   11. 3D TILT — hero image + project rows
══════════════════════════════════════════ */
function addTilt(sel, str = 8) {
  $$(sel).forEach(el => {
    let bounds;
    el.addEventListener('mouseenter', () => { bounds = el.getBoundingClientRect(); });
    el.addEventListener('mousemove', e => {
      if (!bounds) bounds = el.getBoundingClientRect();
      const x = (e.clientX - bounds.left) / bounds.width  - .5;
      const y = (e.clientY - bounds.top)  / bounds.height - .5;
      gsap.to(el, {
        rotationY: x * str, rotationX: -y * str,
        scale: 1.02, transformPerspective: 900,
        duration: .5, ease: 'expo.out',
      });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { rotationY: 0, rotationX: 0, scale: 1, duration: .7, ease: 'expo.out' });
    });
  });
}
addTilt('.hv-frame', 7);
addTilt('.abt-img-wrap', 5);
addTilt('.ts-card', 5);
addTilt('.svc-card', 4);
addTilt('.cert-card', 4);

/* ══════════════════════════════════════════
   12. MAGNETIC BUTTONS (primary CTAs only)
══════════════════════════════════════════ */
$$('.cta-primary').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width  / 2) * .2;
    const y = (e.clientY - r.top  - r.height / 2) * .25;
    gsap.to(btn, { x, y, duration: .4, ease: 'expo.out' });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { x: 0, y: 0, duration: .6, ease: 'elastic.out(1,0.5)' });
  });
});

/* ══════════════════════════════════════════
   13. HERO MOUSE PARALLAX (orbs + grid)
══════════════════════════════════════════ */
const heroSection = $('.hero');
if (heroSection) {
  heroSection.addEventListener('mousemove', e => {
    const { left, top, width, height } = heroSection.getBoundingClientRect();
    const x = (e.clientX - left - width  / 2) / width;
    const y = (e.clientY - top  - height / 2) / height;
    gsap.to('.hero-grid', { x: x * 18, y: y * 12, duration: 1, ease: 'expo.out' });
    gsap.to('.orb-1',     { x: x * 30, y: y * 20, duration: 1.5, ease: 'expo.out' });
    gsap.to('.orb-2',     { x: x * -20, y: y * -14, duration: 1.8, ease: 'expo.out' });
  });
  heroSection.addEventListener('mouseleave', () => {
    gsap.to(['.hero-grid','.orb-1','.orb-2'], { x: 0, y: 0, duration: 1.2, ease: 'expo.out' });
  });
}

/* ══════════════════════════════════════════
   14. PROJECT FILTER
══════════════════════════════════════════ */
$$('.pf').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.pf').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.f;

    $$('.proj-row').forEach((row, i) => {
      const cats = row.dataset.cat.split(',').map(c => c.trim());
      const show = f === 'All' || cats.includes(f);
      if (show) {
        gsap.to(row, { opacity: 1, y: 0, pointerEvents: 'all', duration: .5, ease: 'expo.out', delay: i * .06 });
        row.style.display = '';
      } else {
        gsap.to(row, {
          opacity: 0, y: 20, duration: .3, ease: 'expo.in',
          onComplete() { this.targets()[0].style.display = 'none'; }
        });
      }
    });
  });
});

/* ══════════════════════════════════════════
   15. MARQUEE — pause on hover
══════════════════════════════════════════ */
const mqi = $('.mq-inner');
if (mqi) {
  mqi.addEventListener('mouseenter', () => mqi.style.animationPlayState = 'paused');
  mqi.addEventListener('mouseleave', () => mqi.style.animationPlayState = 'running');
}

/* ══════════════════════════════════════════
   16. CONTACT FORM — FormSubmit
══════════════════════════════════════════ */
const form    = $('#contact-form');
const toast   = $('#toast');
const cfBtn   = $('#cf-btn');

const showToast = (msg, type) => {
  toast.textContent = msg;
  toast.className   = `show ${type}`;
  setTimeout(() => { toast.className = ''; }, 5000);
};

if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = new FormData(form);
    const body = Object.fromEntries(data);
    if (!body.name || !body.email || !body.subject || !body.message)
      return showToast('Please fill in all fields.', 'err');

    const orig = cfBtn.innerHTML;
    cfBtn.querySelector('.cta-label').textContent = 'Sending…';
    cfBtn.disabled = true;

    try {
      const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (res.ok) { showToast('Message sent! I\'ll reply within 24 hours.', 'ok'); form.reset(); }
      else throw new Error();
    } catch {
      showToast('Failed. Please email me directly.', 'err');
    } finally {
      cfBtn.innerHTML = orig;
      cfBtn.disabled  = false;
    }
  });
}

/* ══════════════════════════════════════════
   17. SCROLL TO TOP
══════════════════════════════════════════ */
$('#scroll-top')?.addEventListener('click', () => {
  gsap.to(window, { scrollTo: { y: 0 }, duration: 1, ease: 'expo.inOut' });
});

/* ══════════════════════════════════════════
   18. HERO VISUAL FLOAT
══════════════════════════════════════════ */
gsap.to('#hv-img', {
  y: -14, duration: 3.5, ease: 'sine.inOut',
  yoyo: true, repeat: -1,
});

/* ══════════════════════════════════════════
   CONSOLE
══════════════════════════════════════════ */
console.log('%c KK %c Karan Kumar Portfolio %c GSAP · Vanilla JS ', 
  'background:#6366F1;color:#fff;padding:3px 8px;border-radius:3px 0 0 3px;font-weight:700',
  'background:#18181C;color:#eee;padding:3px 10px',
  'background:#A78BFA;color:#fff;padding:3px 8px;border-radius:0 3px 3px 0');

/* ══════════════════════════════════════════
   19. CERTIFICATIONS — VIEW MORE
══════════════════════════════════════════ */
(() => {
  const grid = $('#cert-grid');
  const btn  = $('#cert-more-btn');
  if (!grid || !btn) return;

  let expanded = false;

  btn.addEventListener('click', () => {
    expanded = !expanded;
    grid.classList.toggle('expanded', expanded);
    btn.classList.toggle('expanded', expanded);
    btn.querySelector('span').textContent = expanded
      ? 'Show Fewer Certificates'
      : 'View More Certificates';

    if (expanded) {
      const extras = $$('.cert-extra', grid);
      extras.forEach((el, i) => {
        el.classList.remove('shown');
        // restart the fade-in animation with a small stagger
        requestAnimationFrame(() => {
          el.style.animationDelay = `${i * 0.06}s`;
          el.classList.add('shown');
        });
      });
    } else {
      // scroll back up to the section heading so the collapse doesn't strand the user
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
})();