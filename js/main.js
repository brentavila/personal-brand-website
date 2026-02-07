(() => {
  'use strict';

  // ── Mobile Navigation Toggle ──
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navBackdrop = document.getElementById('nav-backdrop');

  function openMenu() {
    navToggle.classList.add('active');
    navMenu.classList.add('open');
    if (navBackdrop) navBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navToggle.classList.remove('active');
    navMenu.classList.remove('open');
    if (navBackdrop) navBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) closeMenu();
    else openMenu();
  });

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMenu);
  }

  const navMenuClose = document.getElementById('nav-menu-close');
  if (navMenuClose) {
    navMenuClose.addEventListener('click', closeMenu);
  }

  // Close menu when any link is clicked (nav links + "View My Work" / "Get in Touch")
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ── Navbar scroll styling ──
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  function onScroll() {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 50);
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Smooth scroll for all anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ── Intersection Observer for fade-in animations ──
  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    fadeElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: show everything immediately
    fadeElements.forEach(el => el.classList.add('visible'));
  }

  // ── Contact form handler ──
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();

    if (!name || !email || !message) return;

    // Placeholder: show confirmation
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Message Sent!';
    btn.disabled = true;
    btn.style.opacity = '0.7';

    contactForm.reset();

    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      btn.style.opacity = '';
    }, 3000);
  });
})();
