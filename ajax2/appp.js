var li = document.getElementsByTagName('li')
var cont = document.getElementById('content')


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
console.log('hello')

li[0].onclick = () => {
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

localStorage.setItem('changeHTML', changeHTML)
function onload() {
    document.body.classlist.toggle('li', localStorage.getItem('chandeHTML') == 'true' )
}
document.addEventListener('DOMContentLoaded', onload)
