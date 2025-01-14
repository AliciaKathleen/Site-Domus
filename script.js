let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function moveToNext() {
  if (currentIndex === totalItems - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * 100;  // Fazendo a transição entre as imagens
  document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

// Inicia a rotação automática
setInterval(moveToNext, 3000); // A cada 3 segundos

// Controle manual (opcional)
document.querySelector('.carousel-control.next').addEventListener('click', moveToNext);
document.querySelector('.carousel-control.prev').addEventListener('click', () => {
  currentIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
  updateCarousel();
});

