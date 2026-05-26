const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
function toggleMenu() {
  // Abre o cierra el contenedor del menú
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("active");
  
  // Transforma las 3 líneas en una "X"
  const hamburger = document.querySelector(".hamburger");
  hamburger.classList.toggle("active");
}