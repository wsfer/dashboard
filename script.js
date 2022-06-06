const root = document.documentElement;
root.className = 'light';

const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
moon.style.display = 'none';

const theme = document.querySelector('.changeTheme');
theme.addEventListener('click', changeTheme);

function changeTheme () {
    if (root.className === 'dark') {
        root.className = 'light';
        moon.style.display = 'none';
        sun.style.display = 'block';
    } else {
        root.className = 'dark';
        moon.style.display = 'block';
        sun.style.display = 'none';
    }
}