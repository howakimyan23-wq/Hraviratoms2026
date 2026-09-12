const music = document.getElementById('bg-music');
const musicIcon = document.getElementById('music-icon');

// Sound Toggle Function
function toggleMusic() {
  if (music.paused) {
    music.play();
    musicIcon.textContent = '🔊';
  } else {
    music.pause();
    musicIcon.textContent = '🎵';
  }
}

// Open Invitation & Scroll Smoothly
function openInvitation() {
  const details = document.getElementById('invitation-details');
  details.classList.remove('hidden');
  details.classList.add('fade-in');

  // Try Auto Play Music on Click
  music.play().then(() => {
    musicIcon.textContent = '🔊';
  }).catch(() => {
    musicIcon.textContent = '🎵';
  });

  // Smooth Scroll Down
  details.scrollIntoView({ behavior: 'smooth' });
}

// Countdown Timer to 21.11.2026, 17:30
const targetDate = new Date('November 21, 2026 17:30:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days < 10 ? '0' + days : days;
    document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
  } else {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Lightbox Modal Functions
function openLightbox(imageSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = imageSrc;
  lightbox.classList.add('active');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
}
