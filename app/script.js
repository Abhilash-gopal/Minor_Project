// ===== Smooth Scroll for internal links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href'))
      ?.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== Fade-in animation on scroll =====
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// ===== Skill hover emphasis =====
document.querySelectorAll('.project').forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.transform = 'scale(1.1)';
    skill.style.backgroundColor = '#29a598';
    skill.style.color = '#fff';
  });

  skill.addEventListener('mouseleave', () => {
    skill.style.transform = 'scale(1)';
    skill.style.backgroundColor = '';
    skill.style.color = '';
  });
});

// ===== Header parallax effect =====
const header = document.querySelector('.header-background');

window.addEventListener('scroll', () => {
  const offset = window.pageYOffset;
  header.style.backgroundPositionY = offset * 0.3 + 'px';
});

// ===== Active nav link on scroll =====
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 100;

  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (!section) return;

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
