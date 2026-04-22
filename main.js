/* ==========================================================================
   Petal — main.js
   15 motions total. CSS handles: Ken Burns, Breathing, Sun Glow, Pulse Glow,
   Image Warm-up, Ink Calligraphy (::after), Dew Shimmer (::after), fade-in
   transitions. JS orchestrates the rest.
   ========================================================================== */

(() => {
  'use strict';

  // ---------- Reduced-motion flag ----------
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia('(max-width: 767px)').matches;

  const ready = (fn) => {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  };

  ready(init);

  function init() {
    setupGate();
    setupNavScroll();
    setupScrollFadeIn();
    setupStaggerGroups();
    setupDreamWake();
    setupBloomUnfold();
    setupVeilLift();
    setupRipple();
    setupParallax();
  }

  /* ---------- 0. Invitation Gate + Petal Scatter (M9) ---------- */
  function setupGate() {
    const gate = document.getElementById('petal-gate');
    const enterBtn = document.getElementById('gate-enter');
    if (!gate || !enterBtn) return;

    // Skip gate if already entered this session
    if (sessionStorage.getItem('petal-entered') === '1') {
      gate.remove();
      return;
    }

    // Lock scroll while gate is visible
    document.body.style.overflow = 'hidden';

    enterBtn.addEventListener('click', () => {
      scatterAndEnter(gate);
    }, { once: true });
  }

  function scatterAndEnter(gate) {
    const hasGSAP = typeof window.gsap !== 'undefined';

    if (prefersReduced || !hasGSAP) {
      sessionStorage.setItem('petal-entered', '1');
      gate.classList.add('is-gone');
      setTimeout(() => {
        gate.remove();
        document.body.style.overflow = '';
      }, 450);
      return;
    }

    const content = gate.querySelector('.gate__content');

    const tl = window.gsap.timeline({
      onComplete: () => {
        gate.remove();
        document.body.style.overflow = '';
        sessionStorage.setItem('petal-entered', '1');
      }
    });

    if (content) {
      tl.to(content, { duration: 0.5, opacity: 0, ease: 'power2.in' }, 0);
    }
    tl.to(gate, {
      duration: 1.4,
      clipPath: 'inset(100% 0 0 0)',
      opacity: 0,
      scale: 1.02,
      transformOrigin: 'center top',
      ease: 'power3.inOut'
    }, 0.2);
  }

  /* ---------- 1. Nav scroll-triggered background ---------- */
  function setupNavScroll() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 60) nav.classList.add('nav--solid');
      else nav.classList.remove('nav--solid');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- M5. Scroll Fade-in (IntersectionObserver) ---------- */
  function setupScrollFadeIn() {
    const targets = document.querySelectorAll('[data-fade]');
    if (!targets.length) return;

    if (prefersReduced) {
      targets.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

    targets.forEach(el => io.observe(el));
  }

  /* ---------- M1. Dream Wake Reveal ---------- */
  function setupDreamWake() {
    const targets = document.querySelectorAll('.dream-wake');
    if (!targets.length) return;

    if (prefersReduced) {
      targets.forEach(el => el.classList.add('revealed'));
      return;
    }

    // Reveal after tiny delay so font has a chance to load
    window.requestAnimationFrame(() => {
      setTimeout(() => {
        targets.forEach(el => el.classList.add('revealed'));
      }, 120);
    });
  }

  /* ---------- N2. Bloom Unfold (char stagger on H2) ---------- */
  function setupBloomUnfold() {
    const targets = document.querySelectorAll('.bloom-unfold');
    if (!targets.length) return;

    targets.forEach(splitChars);

    if (prefersReduced) {
      targets.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    targets.forEach(el => io.observe(el));
  }

  function splitChars(el) {
    // Walk text nodes, wrap each word in a nowrap container so inline-block
    // chars don't break mid-word. Each char is a span for stagger animation.
    let charIndex = 0;
    const walk = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        if (!text.trim()) return;
        const frag = document.createDocumentFragment();
        const tokens = text.split(/(\s+)/); // preserve whitespace as separate tokens
        for (const token of tokens) {
          if (!token) continue;
          if (/^\s+$/.test(token)) {
            frag.appendChild(document.createTextNode(token));
            continue;
          }
          const word = document.createElement('span');
          word.className = 'bloom-unfold__word';
          for (const ch of token) {
            const cSpan = document.createElement('span');
            cSpan.className = 'bloom-unfold__char';
            cSpan.textContent = ch;
            cSpan.style.animationDelay = (charIndex * 0.04) + 's';
            word.appendChild(cSpan);
            charIndex++;
          }
          frag.appendChild(word);
        }
        node.parentNode.replaceChild(frag, node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        Array.from(node.childNodes).forEach(walk);
      }
    };
    Array.from(el.childNodes).forEach(walk);
  }

  /* ---------- N3. Veil Lift (scroll-linked overlay) ---------- */
  function setupVeilLift() {
    const targets = document.querySelectorAll('.veil-lift');
    if (!targets.length) return;

    if (prefersReduced) {
      targets.forEach(el => el.classList.add('veil-lifted'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.25) {
          entry.target.classList.add('veil-lifted');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: [0.1, 0.25, 0.5] });

    targets.forEach(el => io.observe(el));
  }

  /* ---------- M6. Ripple on CTA click ---------- */
  function setupRipple() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.cta-btn');
      if (!btn) return;
      if (prefersReduced) return;

      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top  = (e.clientY - rect.top  - size / 2) + 'px';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  }

  /* ---------- N6. Stagger Cards (Lineup + Ingredients) ---------- */
  function setupStaggerGroups() {
    const groups = document.querySelectorAll('[data-stagger-group]');
    if (!groups.length) return;

    if (prefersReduced) {
      groups.forEach(g => g.querySelectorAll('[data-stagger]').forEach(el => el.classList.add('is-visible')));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('[data-stagger]');
          items.forEach((item, i) => {
            item.style.transitionDelay = (i * 0.15) + 's';
            item.classList.add('is-visible');
          });
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    groups.forEach(g => io.observe(g));
  }

  /* ---------- N7. Parallax Layers ---------- */
  function setupParallax() {
    if (prefersReduced) return;
    const elements = document.querySelectorAll('[data-parallax]');
    if (!elements.length) return;

    const factor = isMobile ? 0.15 : 0.3;
    let ticking = false;
    const vh = () => window.innerHeight || document.documentElement.clientHeight;

    function update() {
      const vpH = vh();
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vpH + 200) return;
        const centerOffset = rect.top + rect.height / 2 - vpH / 2;
        const y = -centerOffset * factor;
        el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
      });
      ticking = false;
    }
    const request = () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } };
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request, { passive: true });
    update();
  }

})();
