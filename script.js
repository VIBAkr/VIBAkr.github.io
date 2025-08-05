function revealOnScroll() {
  const revealElements = document.querySelectorAll(".section, .mission div, .timeline-item, .reveal");
  const triggerBottom = window.innerHeight * 0.9;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const track = document.querySelector('.carousel-track');
const btnPrev = document.querySelector('.carousel-btn.prev');
const btnNext = document.querySelector('.carousel-btn.next');
const slides = Array.from(track.children);

let currentSlide = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// On resize – recalculate
window.addEventListener('resize', updateCarousel);

// Navigation
btnNext.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
});

btnPrev.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
});

// Initialize on load
window.addEventListener('load', updateCarousel);

const spyLinks = document.querySelectorAll('.scrollspy-nav a');

window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 100;
  spyLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
