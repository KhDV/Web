function darkmode() { //создаём функцию,которая меняет тему
    const body = document.body //создаем переменную и помещаем в неё body
    const wasDarkmode = localStorage.getItem('darkmode') == 'true' 
    //получить значение, мы будем брать darkmode при значении "правда"

    localStorage.setItem('darkmode', !wasDarkmode) 
    //устанавливаем значение darkmode, которое противоположно предыдущему значению

    body.classList.toggle('dark-mode', !wasDarkmode)
    //берем элемент body используем метод с указанием класса, которым мы манипулируем.
    //Он будет зависеть от противоположного значения, как в предыдущем действии
};

document.querySelector('.btn').addEventListener('click', darkmode);
//возвращает первый элемент, принадлежащий этому селектору
//обработчик событий вызывает функцию darkmode при событии click

function onload() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') == 'true' )
}
//создаем функцию, благодаря которой последняя вырбанная тема будет оставаться
//после обновления страницы

document.addEventListener('DOMContentLoaded', onload)
//обработчик DOMContentLoaded запустит функцию, когда документ загрузится


const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}
//Эта функция возвращает случайное целочисленное значение из заданного диапазона

const prikol = document.querySelector('#prikol');
//в переменную помещается первый элемент, принадлежащий этому селектору

prikol.addEventListener('mouseenter', () => {
    //обработчик событий, события генерируются курсором мыши
    prikol.style.left = `${random(0, 90)}%`;
    // кнопка может перемещаться рандомно влево на 90% экрана
    prikol.style.top = `${random(0, 90)}%`;
    // кнопка может перемещаться рандомно на 90% в высоту экрана

});

prikol.addEventListener('click', () => {
    alert('wow');
});
// в случае победы(нажатия) выводится сообщение