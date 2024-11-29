let currentIndex = 0; // Başlangıç indeksi
const slide = document.querySelector(".slide");
const images = document.querySelectorAll(".slide img");

function showNextImage() {
  currentIndex++;

  // Son fotoğraftan sonra ilkine dön
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  // Slaytın görünümünü güncelle
  slide.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Her 3 saniyede bir fotoğraf değiştir
setInterval(showNextImage, 3000);
