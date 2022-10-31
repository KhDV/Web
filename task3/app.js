function darkmode() {
    const body = document.body
    const wasDarkmode = localStorage.getItem('darkmode') == 'true' 

    localStorage.setItem('darkmode', !wasDarkmode)
    body.classList.toggle('dark-mode', !wasDarkmode)
};

document.querySelector('.btn').addEventListener('click', darkmode);

function onload() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') == 'true' )
}
document.addEventListener('DOMContentLoaded', onload)

const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

const prikol = document.querySelector('#prikol');

prikol.addEventListener('mouseenter', () => {
    prikol.style.left = `${random(0, 90)}%`;
    prikol.style.top = `${random(0, 90)}%`;
});

prikol.addEventListener('click', () => {
    alert('wow');
});