// Wait for DOM content to safely register
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const toggleIcon = themeToggleBtn.querySelector('i');
    
    // Check local storage for theme setup configuration preferences
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', targetTheme);
        localStorage.setItem('portfolio-theme', targetTheme);
        updateIcon(targetTheme);
    });

    function updateIcon(theme) {
        if (theme === 'light') {
            toggleIcon.className = 'fa-solid fa-sun';
        } else {
            toggleIcon.className = 'fa-solid fa-moon';
        }
    }
});
