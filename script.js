// 1. Find the toggle button cleanly based on its text content
const darkModeToggle = Array.from(document.querySelectorAll('button')).find(
  btn => btn.textContent.trim() === 'Toggle Dark Mode'
) || document.querySelector('.toggle-btn');

// 2. Check localStorage when the page immediately loads
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// 3. If dark mode was enabled previously, apply it right away
if (isDarkMode) {
  document.body.classList.add('dark-mode');
}

// 4. Guard clause: Only add the listener if the button exists on the current page
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    // Toggle the dark-mode class on the body
    document.body.classList.toggle('dark-mode');
    
    // Save the preference in the browser's localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
}
