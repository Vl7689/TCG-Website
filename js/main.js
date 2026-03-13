/* ============================================================
   TCG — Technology Consulting Group @ Georgia Tech
   Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Active Nav Link ──────────────────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Mobile Nav ───────────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', mobileNav.classList.contains('open'));
    });
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
      }
    });
  }

  /* ── Scroll: Drag to scroll on client scroller ────────────── */
  const track = document.querySelector('.scroll-track');
  if (track) {
    let isDown = false, startX, scrollLeft;
    track.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    track.addEventListener('mouseleave', () => isDown = false);
    track.addEventListener('mouseup', () => isDown = false);
    track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    });

    /* Scroll buttons */
    const btnPrev = document.getElementById('scroll-prev');
    const btnNext = document.getElementById('scroll-next');
    const cardWidth = 380;
    if (btnPrev) btnPrev.addEventListener('click', () => {
      track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
    if (btnNext) btnNext.addEventListener('click', () => {
      track.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
  }

  /* ── Project Tabs ─────────────────────────────────────────── */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  function activateTab(id) {
    tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === id));
    tabPanels.forEach(p => p.classList.toggle('active', p.id === id));
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.dataset.tab));
  });

  /* Deep-link support: /clients-projects.html#infinite-giving */
  if (tabBtns.length > 0) {
    const hash = window.location.hash.replace('#', '');
    const matchingTab = document.getElementById(hash);
    if (hash && matchingTab) {
      activateTab(hash);
      setTimeout(() => matchingTab.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    } else if (tabBtns[0]) {
      activateTab(tabBtns[0].dataset.tab);
    }
  }

  /* ── Fade-up on scroll ────────────────────────────────────── */
  const fadeEls = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    fadeEls.forEach(el => io.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  /* ── Contact Form ─────────────────────────────────────────── */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      btn.textContent = 'Submitted — We\'ll be in touch!';
      btn.style.background = '#2a6e3f';
      btn.disabled = true;
    });
  }

});