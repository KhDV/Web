document.body.onload = () => {
    console.log('hello onload')
    let request1 = new XMLHttpRequest;
    request1.open('GET', './footer.html', true)
    request1.send()
    request1.onreadystatechange = function () { 
        if (request1.readyState === 4)  
        if (request1.status === 200) {
            console.log(request1.responseText) 
            document.body.innerHTML = request1.responseText + document.body.innerHTML
        }
    }
}