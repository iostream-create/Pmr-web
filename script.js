// Toggle mobile menu
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Close menu after clicking a link (mobile)
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Tahun otomatis di footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Form kontak (simulasi)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const nama = data.get('nama');
    status.textContent = `Terima kasih, ${nama}! Pesan kamu sudah kami terima.`;
    status.style.color = '#15803d';
    form.reset();
    setTimeout(() => { status.textContent = ''; }, 5000);
  });
}

// Smooth highlight active link saat scroll
const sections = document.querySelectorAll('section[id]');
const linkMap = {};
document.querySelectorAll('.nav-links a').forEach(l => {
  const href = l.getAttribute('href');
  if (href && href.startsWith('#')) linkMap[href.slice(1)] = l;
});
window.addEventListener('scroll', () => {
  const y = window.scrollY + 100;
  sections.forEach(s => {
    const link = linkMap[s.id];
    if (!link) return;
    if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
      Object.values(linkMap).forEach(l => l.style.color = '');
      link.style.color = '#dc2626';
    }
  });
});
JS
cd /mnt/documents && nix run nixpkgs#zip -- -r pmr-smkn2barru.zip pmr-smkn2barru/ > /dev/null && echo "ZIP OK" && ls -la pmr-smkn2barru/
Lovable
