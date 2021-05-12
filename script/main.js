var slideIndex = 1;
showSlide(slideIndex);

function nextSlide(n){
    showSlide(slideIndex+=n);
}

function showSlide(n){
    var i;
    var x = document.getElementsByClassName('bg-slides');
    if (n>x.length){
        slideIndex = 1
    }
    if (n < 1){
        slideIndex = x.length
    }
    for (i=0; i<x.length; i++){
        x[i].style.display='none';
    }
    x[slideIndex-1].style.display='block';
}

function saveToLocalStorage(){
    var username = document.getElementById('username').value;
    var channelName = document.getElementById('channelName').value;

    localStorage.setItem("username", username);
    localStorage.setItem('channelName', channelName)

    window.location.href = 'pages/callpage.html'
}