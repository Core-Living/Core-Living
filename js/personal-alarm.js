var audCon = new AudioContext();
var osci = audCon.createOscillator();
var gain = audCon.createGain();

function alarm() {
    osci.frequency.value = 780
    osci.connect(gain)
    gain.connect(audCon.destination)
    osci.start(0)
}

function stopAlarm() {
    gain.gain.exponentialRampToValueAtTime(
        0.0000001, audCon.currentTime + 0.04
    )
}