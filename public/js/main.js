/**
 * Zafira Comunicação e Marketing - Central Legal (Zafira Postiz)
 * Interatividade, barra de progresso de leitura e scrollspy
 */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const progress = document.querySelector('.reading-progress');
  const links = [...document.querySelectorAll('.side-nav a')];
  const sections = links.map(link => document.querySelector(link.hash)).filter(Boolean);

  function updatePage() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) {
      progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
    }
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }

    if (sections.length > 0) {
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 180) {
          current = section;
        }
      }
      links.forEach(link => {
        link.classList.toggle('active', current && link.hash === `#${current.id}`);
      });
    }
  }

  const mobileBtn = document.querySelector('.mobile-menu');
  const sideNav = document.querySelector('.side-nav');
  if (mobileBtn && sideNav) {
    mobileBtn.addEventListener('click', () => {
      sideNav.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Atualizar ano corrente
  document.querySelectorAll('.current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  window.addEventListener('scroll', updatePage, { passive: true });
  updatePage();
});
