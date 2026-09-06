/**
 * ABROC CAFE & KITCHEN - LUXURY CURSOR & 3D INTERACTION ENGINE
 * Implements smooth lerping custom cursor, magnetic button attraction,
 * and realistic 3D perspective card tilting.
 */

(function () {
  'use strict';

  // Check touch devices
  const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice()) {
    document.documentElement.classList.add('is-touch');
    return;
  }
  document.documentElement.classList.add('has-custom-cursor');

  // Create cursor elements
  const cursorDot = document.createElement('div');
  cursorDot.className = 'abroc-cursor-dot';
  const cursorRing = document.createElement('div');
  cursorRing.className = 'abroc-cursor-ring';
  const cursorLabel = document.createElement('span');
  cursorLabel.className = 'abroc-cursor-label';
  cursorRing.appendChild(cursorLabel);

  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorRing);

  // Position state
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let dotX = mouseX;
  let dotY = mouseY;
  let isHovered = false;
  let isClicking = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  window.addEventListener('mousedown', () => {
    isClicking = true;
    cursorRing.classList.add('is-clicking');
    cursorDot.classList.add('is-clicking');
  });

  window.addEventListener('mouseup', () => {
    isClicking = false;
    cursorRing.classList.remove('is-clicking');
    cursorDot.classList.remove('is-clicking');
  });

  // Smooth render loop
  function animateCursor() {
    // Lerp factor
    const ringLerp = 0.16;
    const dotLerp = 0.75;

    ringX += (mouseX - ringX) * ringLerp;
    ringY += (mouseY - ringY) * ringLerp;
    dotX += (mouseX - dotX) * dotLerp;
    dotY += (mouseY - dotY) * dotLerp;

    cursorDot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
    cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

    requestAnimationFrame(animateCursor);
  }
  requestAnimationFrame(animateCursor);

  // Interactive Cursor Listeners
  function attachCursorEvents() {
    const interactables = document.querySelectorAll(
      'a, button, .interactive-card, .menu-card, .gallery-item, .category-tab, .filter-chip, [data-cursor]'
    );

    interactables.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        const cursorType = el.getAttribute('data-cursor');
        cursorRing.classList.add('is-hovering');
        if (cursorType) {
          cursorRing.classList.add(`cursor-${cursorType}`);
          cursorLabel.textContent = el.getAttribute('data-cursor-text') || '';
        }
      });

      el.addEventListener('mouseleave', () => {
        cursorRing.classList.remove('is-hovering', 'cursor-view', 'cursor-drag', 'cursor-explore');
        cursorLabel.textContent = '';
      });
    });

    // Magnetic Buttons
    const magneticElements = document.querySelectorAll('.btn-magnetic, .magnetic-target');
    magneticElements.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.35;
        const deltaY = (e.clientY - centerY) * 0.35;

        btn.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate3d(0, 0, 0)';
        btn.style.transition = 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)';
        setTimeout(() => {
          btn.style.transition = '';
        }, 500);
      });
    });

    // 3D Tilt Cards
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

        const sheen = card.querySelector('.tilt-sheen');
        if (sheen) {
          const moveX = (x / rect.width) * 100;
          const moveY = (y / rect.height) * 100;
          sheen.style.background = `radial-gradient(circle at ${moveX}% ${moveY}%, rgba(255,255,255,0.18) 0%, transparent 65%)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)';
        const sheen = card.querySelector('.tilt-sheen');
        if (sheen) {
          sheen.style.background = 'transparent';
        }
        setTimeout(() => {
          card.style.transition = '';
        }, 600);
      });
    });
  }

  // Initial attach and dynamic observer
  document.addEventListener('DOMContentLoaded', attachCursorEvents);
  window.attachAbrocCursorEvents = attachCursorEvents;
})();
