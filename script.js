// Dark/light theme script.
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

// ...This is not google
const searchBtn = document.querySelector('#search');
searchBtn.addEventListener('click', thisIsNotGoogle);

const searchBar = document.querySelector('#search-bar');

function thisIsNotGoogle () {
    if (searchBar.value !== '') {
        searchBar.value = '';
        alert('This is not google!');
    }
}

// Script for the cookies tab.
const agree = document.querySelector('.not-hidden');
agree.addEventListener('click', closeTheTab);
const refuse = document.querySelector('.refuse');
refuse.addEventListener('click', youHaveNoOption);
const agreeHidden = document.querySelector('.hidden');
agreeHidden.addEventListener('click', closeTheTab);
const tab = document.querySelector('.cookies');

function youHaveNoOption () {
    refuse.style.display = "none";
    agreeHidden.style.display = "block";
}

function closeTheTab (e) {
    tab.style.display = "none";
}

// Funny script below

const target = document.querySelector('#virus');
target.addEventListener('click', () => {
    alert('YOUR WEBSITE IS MINE');
    setInterval(infect, 5000);
});

function infect () {
    const randColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
    const everything = document.body.getElementsByTagName('*');
    everything[Math.floor(Math.random()*everything.length)].style.backgroundColor = randColor;
    everything[Math.floor(Math.random()*everything.length)].style.color = randColor;
    everything[Math.floor(Math.random()*everything.length)].style.fontSize = `${Math.floor(Math.random()*50)}px`;
}









