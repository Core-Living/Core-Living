window.AudioContext = window.AudioContext || window.webkitAudioContext;
var audCon = new AudioContext();
var gain = audCon.createGain();
var used = false;
var startTime = null;

document.getElementById('volume').addEventListener('change', function() {
    var currentVol = this.value;
    gain.gain.value = currentVol;
    console.log("Current Volume: ", currentVol);
})

function alarm() { 
    if (!used) {
        gain.connect(audCon.destination);
        gain.gain.exponentialRampToValueAtTime(
            1, audCon.currentTime
        );
        var request = new XMLHttpRequest();
        var audFile = "../assets/audio/alarm.mp3";
        request.open('GET', audFile, true);
        request.responseType = 'arraybuffer';

        request.onload = function() {
            audCon.decodeAudioData(request.response, function(buffer) {
                store = buffer;
                var src = audCon.createBufferSource();
                src.buffer = buffer;
                src.connect(gain);
                src.start(0)
            });
        };
        request.send();
    } else {
        audCon.resume();
    }
}

function retTimer(timer) {
    if (startTime != null) {
        startTime = new Date().getTime();
    }
    var interval = setInterval(function() {
    var now = new Date().getTime();
    var time = timer - now;
    var hours = Math.floor(time % (1000 * 3600 * 24)) / (1000 * 3600);
    var minutes =  Math.floor(time % (1000 * 3600)) / (1000 * 60);
    var seconds =  Math.floor(time % (1000 * 60)) / (1000);
    document.getElementById("timer").innerHTML = hours + "hr " + minutes + "m " + seconds + "s";
    if (time < 0) {
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "Completed";
    }}, 1000);

}

function getTimer() {
    var hr = document.getElementById("hr").innerHTML;
    document.getElementById("hr").innerHTML = '0';
    var min = document.getElementById("min").innerHTML;
    document.getElementById("min").innerHTML = '0';
    var sec = document.getElementById("sec").innerHTML;
    document.getElementById("sec").innerHTML = '0';
    timer = new Date().getDate() + new Date().setHours(hr, min, sec, 0);
    retTimer(timer);
}

function stopAlarm() {
    audCon.suspend()
    .then(function() {
        used = true;
    })
}