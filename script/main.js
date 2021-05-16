/**
 * @name handleFail
 * @param err - error thrown by any function
 * @description Helper function to handle errors
 */

let handleFail = function(err){
    console.log("Error: ", err)
}

// Queries the container in which the remote feeds belong
let remoteContainer = document.getElementById("remote-container");
var count = 0; // number of remote containers

// Reads value from a variable named `channelName` in our local storage
var channelName = localStorage.getItem('channelName');

// <---IMPORTANT VIDEO CALL CODES---->
document.getElementById('disconnect_call').onclick = () => {
    disconnectCall();
}

function disconnectCall(){
    client.leave();
    if(client.leave){
        window.location.href = '../index.html'
    }
}

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