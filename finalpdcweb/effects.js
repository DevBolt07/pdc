// effects.js
document.addEventListener("DOMContentLoaded", function() {
  // Navbar slide-in
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.classList.add('visible');
  }

  // Fade-in on scroll
  const faders = document.querySelectorAll('.fade-in');
  function appearOnScroll() {
    faders.forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 50) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', appearOnScroll);
  appearOnScroll();
});