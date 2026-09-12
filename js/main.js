/**
 * Capstone Project Portfolio Script Engine
 * Handles user interactions, local theme persistence, and accessibility attributes.
 */
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Safety check to ensure the toggle button exists on the current page layout
    if (!themeToggleBtn) return;
    
    const toggleIcon = themeToggleBtn.querySelector('i');
    
    // Step 1: Read browser memory storage configuration preferences (Defaults to 'dark')
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    
    // Step 2: Apply the theme instantly to prevent bright screen flashing
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateToggleInterface(savedTheme);

    // Step 3: Map an interactive click trigger event listener to the switch element
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Execute structural document tree modifications
        document.documentElement.setAttribute('data-theme', targetTheme);
        localStorage.setItem('portfolio-theme', targetTheme);
        
        // Synchronize visual icons and screen-reader assets
        updateToggleInterface(targetTheme);
    });

    /**
     * Programmatically updates dynamic icons and descriptive aria-labels
     * to fulfill strict accessibility metrics.
     */
    function updateToggleInterface(theme) {
        if (!toggleIcon) return;
        
        if (theme === 'light') {
            toggleIcon.className = 'fa-solid fa-sun';
            themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme mode');
            themeToggleBtn.setAttribute('title', 'Switch to dark theme mode');
        } else {
            toggleIcon.className = 'fa-solid fa-moon';
            themeToggleBtn.setAttribute('aria-label', 'Switch to light theme mode');
            themeToggleBtn.setAttribute('title', 'Switch to light theme mode');
        }
    }
});
