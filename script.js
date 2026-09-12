---

### File 3: `script.js` (The Local Storage Toggle Engine)
Completely replace everything in **`script.js`** to power the interactive theme toggle.

```javascript
// Wait for DOM content to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const toggleIcon = themeToggleBtn.querySelector('i');
    
    // Check local storage memory configuration preferences
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateToggleInterface(savedTheme);

    // Event listener mapping for the click interface action
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', targetTheme);
        localStorage.setItem('portfolio-theme', targetTheme);
        updateToggleInterface(targetTheme);
    });

    // Modifies icon classes to match WCAG accessibility standards
    function updateToggleInterface(theme) {
        if (theme === 'light') {
            toggleIcon.className = 'fa-solid fa-sun';
            themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme mode');
        } else {
            toggleIcon.className = 'fa-solid fa-moon';
            themeToggleBtn.setAttribute('aria-label', 'Switch to light theme mode');
        }
    }
});
