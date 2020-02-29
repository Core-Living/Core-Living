
let pwaSupport = false;

if('serviceWorker' in navigator){
    pwaSupport = true;
    //register the service worker
    navigator.serviceWorker.register('sw.js').then(function(result){
        if('Notification' in window){
            Notification.requestPermission(function(status){
            });
        }
    }, function(error){
    });
}

let installEvt;
window.addEventListener('beforeinstallprompt', function(evt){
    installEvt = evt;
    evt.preventDefault();
    //document.getElementById('addToHomeScreen').style.display = 'block';
});

function hidePrompt(){
    //document.getElementById('addToHomeScreen').style.display = 'none';
}

function installApp(){
    hidePrompt();
	if (installEvt !== undefined) {
		installEvt.userChoice.then(function(result){
		});
	}
}

window.addEventListener('appinstalled', function(evt){
});

let newGPS = new GPS();
window.onload = function(){
	setInterval(()=>{ 
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(function(position) {
				newGPS.update();
			});
		} 
		else {
		 /*geolocation IS NOT available*/ 
		}
	}, 30000);
};