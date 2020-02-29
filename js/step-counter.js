let accel = null;

function useAccel() {
    try {
        accel = new accelerometer(
            {referenceFrame: 'device', 
            frequency:60
        });
        accel.addEventListener('error', event => {
            if (event.error.name === 'NotAllowedError') {
                requestPermission();
            } else if (event.error.name === 'NotReadableError' ) {
                console.log('You Have Failed');
            }
        });
        accel.addEventListener('reading', () => {
            reloadOnShake(accel)
            console.log(accel);
        });
        accel.start();
        
    } catch (error) {
        if (error.name === 'SecurityError') {
            console.log('Security Block');
        } else if (error.name === 'ReferenceError') {
            console.log('Unsupported by Device');
        } else {
            throw error;
        }
    }
}

function requestPermission() {
    navigator.permissions.query({ name: 'accelerometer' })
    .then(answer => {
        if (answer.state === 'denied') {
            console.log('Permission Denied');
            return;
        }
        useAccel();
    })
}