
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

let newGPS = null;
let workout = null;
let timer = null;
let running = false;
let isPaused = false;
let pauseDistance = 0.0;

document.querySelector('#startWorkingOut').addEventListener("click", (event) =>
{
	if(workout == null && timer == null || isPaused)
	{
		newGPS = new GPS(pauseDistance);
		newGPS.update();
		workout = setInterval(()=>{
			if ("geolocation" in navigator) {
				newGPS.update();
			}
			if(isPaused)
			{
				pauseDistance = newGPS.distance;
				clearInterval(workout);
				workout = null;
			}
		}, 5000);
		
		
		if(!isPaused)
		{
			pausedTime = 0;
			running = true;
			

			let startTime = new Date().getTime();
			document.querySelector("#workoutTimer").textContent = "0h 0m 0s";
			// Update the count down every 1 second
			timer = setInterval(()=> {
				if(!isPaused)
				{
				  // Get today's date and time
				  let now = new Date().getTime();
				  // Find the distance between now and the count down date
				  let distance =  now - startTime;

				  // Time calculations for days, hours, minutes and seconds
				  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

				  // Display the result in the element with id="demo"
				  document.querySelector("#workoutTimer").textContent = hours + "h "
				  + minutes + "m " + seconds + "s ";
				}
				else{
					startTime += 1000;
				}
			}, 1000);
		}
		else
		{
			isPaused = false;
			running = true;
		}
	}
});
document.querySelector('#pauseWorkingOut').addEventListener("click", (event) =>
{
	if(running && !isPaused)
	{
		isPaused = true;
		running = false;
	}
});

document.querySelector('#stopWorkingOut').addEventListener("click", (event) =>
{
	if(timer != null)
	{
		isPaused = false;
		running = false;
		clearInterval(timer);
		timer = null;
		pauseDistance = 0.0;
	}
	if(workout != null)
	{
		clearInterval(workout);
		workout = null;
	}
});

