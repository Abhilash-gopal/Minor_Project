// ===== Certification toggle animation =====
const certCard = document.getElementById('certCard');

certCard.addEventListener('click', () => {
  certCard.classList.toggle('open');
});

// Keyboard accessibility
certCard.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    certCard.classList.toggle('open');
  }
});
