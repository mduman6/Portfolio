const themeToggleBtn = document.getElementById('theme-btn');
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      localStorage.setItem('portfolio-theme', 'light');
    }
  });
}
