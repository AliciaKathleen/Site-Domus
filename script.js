const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;
const slideWidth = slides[0].offsetWidth + 20; // Largura do slide + margem

function moveSlider() {
  currentIndex++;
  sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  // Reinicia para o início suavemente quando chega no final
  if (currentIndex >= slides.length / 2) {
    setTimeout(() => {
      sliderWrapper.style.transition = 'none'; // Remove a transição
      currentIndex = 0; // Volta para o início
      sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      setTimeout(() => {
        sliderWrapper.style.transition = 'transform 0.5s ease-in-out'; // Restaura a transição
      });
    }, 500); // Tempo igual ao da transição
  }
}

// Alterna os slides automaticamente a cada 3 segundos
setInterval(moveSlider, 3000);






