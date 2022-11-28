console.log('hello')
//метод для вывода отладочной информации, не мешая пользователю

document.body.onload = () => { //выполнения скрипта после того, как веб-страница полностью загрузила все содержимое
    console.log('hello onload')
    //чтобы сделать асинхронный запрос
    let request = new XMLHttpRequest; //1. создать XMLHttpRequest
    request.open('GET', './header.html', true) //2. инициализировать его, HTTP метод get, url - куда отправляется запрос, если указать false, тогда запрос будет выполнен синхронно
    //вызов open не открывает соединение, он лишь конфигурирует запрос, но непосредственно отсылается запрос только лишь после вызова send
    request.send() //3. послать запрос
    //этот метод устанавливает соединение и отсылает запрос к серверу
    request.onreadystatechange = function () { //Изменения в состоянии объекта запроса генерируют событие readystatechange
        if (request.readyState === 4) //done=4 запрос завершен 
        if (request.status === 200) {
            console.log(request.responseText) 
            //для того, чтобы определить завершена ли передача данных и если это так и HTTP статус 200, то полученные данные выводятся в консоль
            document.body.innerHTML = request.responseText + document.body.innerHTML
            //innerHTMLbodyHTML - документ ответа, помещаем его внутрь body элемента текущего документа - присваивая ему значение document.body.innerHTML.
        }
    }
}