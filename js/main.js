// Theme Toggle
const toggleSwitch = document.querySelector('#ui-switch input[type="checkbox"]');
const body = document.body;

// Apply saved theme or default to dark mode
const savedTheme = localStorage.getItem('theme') || 'dark-mode';
if (savedTheme === 'light-mode') {
  body.classList.add('light-mode');
  toggleSwitch.checked = true; // Sync checkbox with saved theme
} else {
  body.classList.remove('light-mode');
  toggleSwitch.checked = false;
}

// Toggle theme on checkbox change
toggleSwitch.addEventListener('change', () => {
  body.classList.toggle('light-mode');
  const theme = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
  localStorage.setItem('theme', theme);
});

// Hamburger Menu
const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '☰';
document.querySelector('nav').prepend(navToggle);

const navUl = document.querySelector('nav ul');
navToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Contact Form (Placeholder)
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted! (This is a placeholder)');
    form.reset();
  });
}

// Animate Skill Bars
const bars = document.querySelectorAll('.bar-fill');
if (bars) {
  bars.forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    setTimeout(() => {
      bar.style.transform = `scaleX(${percent / 100})`;
    }, 100); // Slight delay for smooth entry
  });
}

  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("loader-overlay").style.display = "none";
      document.getElementById("main-content").style.display = "block";
    }, 5000);
  });

  function refreshImages() {
    const timestamp = new Date().getTime();
    document.getElementById("epziii-stats").src = `https://github-readme-stats.vercel.app/api?username=Epziii&show_icons=true&theme=tokyonight&${timestamp}`;
    document.getElementById("epzi-stats").src = `https://github-readme-stats.vercel.app/api?username=HaCkr-EPZI-public&show_icons=true&theme=tokyonight&${timestamp}`;
  }

  setInterval(refreshImages, 30000); // 30 seconds