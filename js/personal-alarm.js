window.AudioContext = window.AudioContext || window.webkitAudioContext;
var audCon = new AudioContext();
// var osci = audCon.createOscillator();
// HTML is <input id="volume" type="range" min="0" max="1" step="0.1" value="0.5"/>
var gain = audCon.createGain();
gain.connect(audCon.destination)

function increaseVolume() {
    document.getElementById('volume').addEventListener('change', function() {
        var currentVol = this.value;
        gain.gain.value = currentVol;
        console.log("Current Volume: ", currentVol);
    })
}

function alarm() {
    // osci.frequency.value = 780
    // osci.connect(gain)
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
    increaseVolume();
    // osci.start(0)
}

function stopAlarm() {
    gain.gain.exponentialRampToValueAtTime(
        0.00001, audCon.currentTime + 0.04
    )
}