var btn = document.getElementById('btn');


btn.onmouseover = function(){
    document.body.style.background = "red";
}
btn.onmouseleave = function(){
    document.body.style.background = "blue";
}

btn.addEventListener('click', function(){
    btn.classList.toggle('light');
    btn.classList.toggle('dark');
})