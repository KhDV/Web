var li = document.getElementsByTagName('li')
var cont = document.getElementsByClassName('content')


function changeHTML(content){
    let request = new XMLHttpRequest;
    request.open('GET', content, true)
    request.send()
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            cont.innerHTML=request.responseText
        }
    }
}

li[0].onclink = () => {
    changeHTML('о себе.html')
}

li[1].onclick = () => {
    changeHTML('резюме.html')
}

li[2].onclick = () => {
    changeHTML('портфолио.html')
}
li[3].onclick = () => {
    changeHTML('контакты.html')
}