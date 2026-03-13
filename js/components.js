/* ============================================================
   TCG — Shared Nav + Footer
   Injected on every page automatically.
   ============================================================ */

(function() {
  const NAV_HTML = `
<nav id="navbar" role="navigation" aria-label="Main navigation">
  <div class="container">
    <a href="index.html" class="nav-logo" style="display:flex; align-items:center; gap:12px;">
        <img src="assets/logo.jpg" alt="TCG" style="height:38px; width:auto;" />
        <span style="font-family: var(--font-display); font-weight:700; font-size:14px; letter-spacing:0.04em; text-transform:uppercase; color:var(--white); line-height:1.2;">Technology<br/>Consulting Group</span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="what-we-do.html">What We Do</a></li>
      <li><a href="clients-projects.html">Clients &amp; Projects</a></li>
      <li><a href="board.html">Board</a></li>
      <li><a href="contact.html" class="nav-cta">Interested in TCG Services</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
  <a href="index.html">Home</a>
  <a href="what-we-do.html">What We Do</a>
  <a href="clients-projects.html">Clients &amp; Projects</a>
  <a href="board.html">Board</a>
  <a href="contact.html" class="mobile-cta">Interested in TCG Services</a>
</nav>`;

  const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-inner">
      <img src="assets/logo.jpg" alt="TCG" style="height:28px; width:auto; opacity:0.7;" />
      <span class="footer-copy">© 2026 Technology Consulting Group @ Georgia Tech</span>
      <ul class="footer-links">
        <li><a href="what-we-do.html">What We Do</a></li>
        <li><a href="clients-projects.html">Projects</a></li>
        <li><a href="board.html">Board</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
  </div>
</footer>`;

  const pageContent = document.querySelector('.page-content');
  if (pageContent) {
    pageContent.insertAdjacentHTML('beforebegin', NAV_HTML);
  }
  if (!document.querySelector('footer')) {
    document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
  }
})();