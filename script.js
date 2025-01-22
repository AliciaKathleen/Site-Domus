class SimpleSlider {
  constructor(selector) {
    this.sliderWrapper = document.querySelector(selector);
    this.slides = this.sliderWrapper.querySelectorAll(".slide");
    this.currentIndex = 0;
    this.slideWidth = this.slides[0].offsetWidth + 20;
    this.initSlider();
  }

  initSlider() {
    setInterval(() => this.moveSlider(), 3000);
  }

  moveSlider() {
    this.currentIndex++;
    this.sliderWrapper.style.transform = `translateX(-${
      this.currentIndex * this.slideWidth
    }px)`;

    if (this.currentIndex >= this.slides.length / 2) {
      setTimeout(() => {
        this.sliderWrapper.style.transition = "none";
        this.currentIndex = 0;
        this.sliderWrapper.style.transform = `translateX(-${
          this.currentIndex * this.slideWidth
        }px)`; // Volta ao início
        setTimeout(() => {
          this.sliderWrapper.style.transition = "transform 0.5s ease-in-out";
        });
      }, 500);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new SimpleSlider(".slider-wrapper");
  new ImageSlider(".slider-track");
});

document.addEventListener("DOMContentLoaded", function() {
  const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
  };

  const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
          }
      });
  }, options);

  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
      observer.observe(section);
  });
});

document.querySelectorAll('.nav-link, .nav-logo').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);

      const targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});

