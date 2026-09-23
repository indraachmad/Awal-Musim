// Interaksi ringan tanpa framework: tahun footer dan animasi masuk saat elemen terlihat.
document.querySelectorAll('.section, .hero-card').forEach(el => el.classList.add('reveal'));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.08});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
