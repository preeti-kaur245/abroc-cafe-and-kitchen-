/**
 * ABROC CAFE & KITCHEN - CORE APPLICATION ENGINE
 * Handles dynamic menu filtering, modal quick-views, WhatsApp order routing,
 * sound synthesis, and scroll interaction.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. NAVBAR SCROLL & MOBILE DRAWER
     ========================================================================== */
  const header = document.querySelector('.site-header');
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      navLinks.classList.toggle('is-open');
    });

    // Close when clicking any nav link
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
      });
    });
  }

  /* ==========================================================================
     2. AMBIENT AUDIO SYNTHESIZER (WEB AUDIO API)
     Generates warm ambient coffeehouse chords & gentle warmth safely
     ========================================================================== */
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  let audioCtx = null;
  let isPlayingSound = false;
  let masterGain = null;
  let noiseNode = null;
  let intervalId = null;

  function initAudio() {
    if (audioCtx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();

    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);
  }

  function playWarmChime() {
    if (!audioCtx || !isPlayingSound) return;
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25]; // C Major warmth
    const freq = notes[Math.floor(Math.random() * notes.length)];

    const osc = audioCtx.createOscillator();
    const noteGain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    noteGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    noteGain.gain.exponentialRampToValueAtTime(0.04, audioCtx.currentTime + 0.3);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 3.5);

    osc.connect(noteGain);
    noteGain.connect(masterGain);

    osc.start();
    osc.stop(audioCtx.currentTime + 3.6);
  }

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      initAudio();
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      isPlayingSound = !isPlayingSound;
      if (isPlayingSound) {
        soundToggleBtn.classList.add('playing');
        soundToggleBtn.querySelector('.sound-status').textContent = 'Ambience On';
        playWarmChime();
        intervalId = setInterval(playWarmChime, 3200);
      } else {
        soundToggleBtn.classList.remove('playing');
        soundToggleBtn.querySelector('.sound-status').textContent = 'Ambience';
        clearInterval(intervalId);
      }
    });
  }

  /* ==========================================================================
     3. DYNAMIC MENU RENDERING & FILTERING
     ========================================================================== */
  const menuContainer = document.getElementById('menu-items-container');
  const tabsContainer = document.getElementById('menu-tabs-container');
  const searchInput = document.getElementById('menu-search-input');

  let activeCategory = 'all';
  let searchQuery = '';

  // Render Tabs
  if (tabsContainer && typeof ABROC_MENU !== 'undefined') {
    tabsContainer.innerHTML = ABROC_MENU.categories
      .map(
        (cat) => `
        <button class="category-tab ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}">
          <span style="margin-right: 4px;">${cat.icon}</span> ${cat.name}
        </button>
      `
      )
      .join('');

    const tabs = tabsContainer.querySelectorAll('.category-tab');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        activeCategory = tab.dataset.category;
        renderMenuItems();
      });
    });
  }

  // Filter and Render Menu Items
  function renderMenuItems() {
    if (!menuContainer || typeof ABROC_MENU === 'undefined') return;

    let filtered = ABROC_MENU.items;

    if (activeCategory !== 'all') {
      filtered = filtered.filter((item) => item.category === activeCategory);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (filtered.length === 0) {
      menuContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <p style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--text-primary); margin-bottom: 0.5rem;">
            No culinary items found
          </p>
          <p style="color: var(--text-muted); font-size: 0.9rem;">
            Try searching for another dish or frappe
          </p>
        </div>
      `;
      return;
    }

    menuContainer.innerHTML = filtered
      .map(
        (item) => `
      <div class="menu-card tilt-card" data-id="${item.id}" data-cursor="explore" data-cursor-text="VIEW">
        <div class="tilt-sheen"></div>
        <div class="menu-card-img-wrap">
          <img src="${item.image}" alt="${item.name}" class="menu-card-img" loading="lazy" />
          ${item.badge ? `<span class="menu-card-badge">${item.badge}</span>` : ''}
        </div>
        <div class="menu-card-body">
          <div class="menu-card-top">
            <h3 class="menu-item-title">${item.name}</h3>
            <span class="menu-item-price">₹${item.price}</span>
          </div>
          <p class="menu-item-desc">${item.description}</p>
          <div class="menu-card-footer">
            <span style="font-size: 0.75rem; color: #ffc107; font-weight: 700;">★ ${item.rating}</span>
            <span class="btn-item-order">
              Quick View <span>→</span>
            </span>
          </div>
        </div>
      </div>
    `
      )
      .join('');

    // Reattach cursor listeners & click handlers
    if (window.attachAbrocCursorEvents) {
      window.attachAbrocCursorEvents();
    }

    menuContainer.querySelectorAll('.menu-card').forEach((card) => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        const itemData = ABROC_MENU.items.find((i) => i.id === id);
        if (itemData) openDishModal(itemData);
      });
    });
  }

  // Initial render
  renderMenuItems();

  // Search Input Listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderMenuItems();
    });
  }

  /* ==========================================================================
     4. DISH QUICK-VIEW & WHATSAPP ORDER MODAL
     ========================================================================== */
  const modalBackdrop = document.getElementById('dish-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalImg = document.getElementById('modal-dish-img');
  const modalTitle = document.getElementById('modal-dish-title');
  const modalPrice = document.getElementById('modal-dish-price');
  const modalDesc = document.getElementById('modal-dish-desc');
  const modalTags = document.getElementById('modal-dish-tags');
  const modalOrderBtn = document.getElementById('modal-order-whatsapp');
  const modalCallBtn = document.getElementById('modal-call-cafe');

  function openDishModal(item) {
    if (!modalBackdrop) return;
    modalImg.src = item.image;
    modalImg.alt = item.name;
    modalTitle.textContent = item.name;
    modalPrice.textContent = `₹${item.price}`;
    modalDesc.textContent = item.description;

    modalTags.innerHTML = item.tags
      .map((tag) => `<span class="showcase-tag-pill">${tag}</span>`)
      .join('');

    // WhatsApp prefilled message
    const phone = '917087086295';
    const msg = encodeURIComponent(
      `Hello Abroc Cafe & Kitchen, I would like to order "${item.name}" (₹${item.price}) from your menu. Please confirm availability!`
    );
    modalOrderBtn.href = `https://wa.me/${phone}?text=${msg}`;
    modalCallBtn.href = 'tel:07087086295';

    modalBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeDishModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeDishModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeDishModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop?.classList.contains('is-open')) {
      closeDishModal();
    }
  });

  /* ==========================================================================
     5. SCROLL TRIGGER ANIMATIONS & OBSERVERS
     ========================================================================== */
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    revealObserver.observe(el);
  });

  /* ==========================================================================
     6. SMOOTH SCROLL FOR IN-PAGE ANCHORS
     ========================================================================== */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
