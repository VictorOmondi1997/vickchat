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
document.getElementById('disable_call').onclick = () => {
    disconnectCall();
}

function disconnectCall(){
    client.leave();
    if(client.leave){
        window.location.href = '../index.html';
    }
}

document.getElementById('disable_mic').onclick = () => {
    toggleMic();
}

var isMuted = false;

function toggleMic(){
    if(isMuted){
        isMuted = false;
        globalstream.muteAudio();
        console.log('Streem has been mutted')
    } else {
        isMuted = true;
        globalstream.enableAudio();
        console.log("Stream has been unmuted")
    }
}

// start code
//creating client
let client = AgoraRTC.createClient({
    mode:'live',
    codec:"h264"
});

//intializing client
client.init("dc96e5c14025414ea38980c9b1b1fbe4", function(){
    console.log("Initialized successfully")
});