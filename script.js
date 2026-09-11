// 1. Target the toggle button element
const themeToggleBtn = document.getElementById('theme-btn');

// 2. Check localStorage when the page loads to see if the user likes dark mode
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  // Also tell screen readers dark mode is currently active
  if (themeToggleBtn) {
    themeToggleBtn.setAttribute('aria-label', 'Switch to light purple theme');
  }
}

// 3. Add an event listener to run whenever the button is clicked
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    // Toggle the dark-mode class on the body
    document.body.classList.toggle('dark-mode');
    
    // 4. Save the current choice so it stays active across other pages
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('portfolio-theme', 'dark');
      themeToggleBtn.setAttribute('aria-label', 'Switch to light purple theme');
    } else {
      localStorage.setItem('portfolio-theme', 'light');
      themeToggleBtn.setAttribute('aria-label', 'Switch to dark purple theme');
    }
  });
}
