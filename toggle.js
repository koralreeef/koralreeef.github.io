document.addEventListener('DOMContentLoaded', () => {
    const themeStylesheet = document.getElementById('initial');
    const storedTheme = localStorage.getItem('initial');
        if (storedTheme) {
            themeStylesheet.href = storedTheme;
        }
    const themeToggle = document.getElementById('toggleWebps');
    themeToggle.addEventListener('click', () => {
        if (themeStylesheet.href.includes('toggleOn')) {
            themeStylesheet.href = '../toggleOff.css';
        } else {
            themeStylesheet.href = '../toggleOn.css';
        }
        localStorage.setItem('initial', themeStylesheet.href);
    });
});