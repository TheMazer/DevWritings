const savedTheme = localStorage.getItem('theme') || null;

if (savedTheme == null) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark')
        console.log('Dark theme detected.');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light')
        console.log('Light theme detected.');
    }
} else {
    document.documentElement.setAttribute('data-theme', savedTheme);
}