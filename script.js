document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-btn');
    
    // Check local storage for theme persistence
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        // Save the selection to keep style across pages
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});
