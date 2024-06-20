const themeSwitch = document.querySelector('#theme-switch')

themeSwitch.addEventListener('click', (e) => {
    console.log(123);
    let currentTheme = document.documentElement.getAttribute('data-theme')
    if (currentTheme == 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light')
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark')
    }
})