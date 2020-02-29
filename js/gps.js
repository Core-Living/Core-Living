function GPS()
{
	distance = 0;
	currentLat = null;
	currentLong = null;
	this.update = () =>
	{
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(function(position) {
			if(position.coords.latitude != currentLat || position.coords.longitude != currentLong)
			{
				if(currentLat != null && currentLong != null)
				{
					let latToMeter = 110574;
					let lngToMeter = 111320;
					let latRad = currentLat * (Math.PI / 180);
					let latMeterDistance = latToMeter * (currentLat - position.coords.latitude);
					let lngMeterDistance = lngToMeter * (currentLong - position.coords.longitude) * Math.cos(latRad);
					distance = Math.sqrt(latMeterDistance * latMeterDistance + lngMeterDistance * lngMeterDistance);	
				}
				document.querySelector('#oldlong').textContent = currentLong;
				document.querySelector('#oldlat').textContent = currentLat;
				document.querySelector('#newlong').textContent = position.coords.longitude;
				document.querySelector('#newlat').textContent = position.coords.latitude;
				document.querySelector('#distance').textContent = distance;
				currentLat = position.coords.latitude;
				currentLong = position.coords.longitude;
			}
			});	
		}
	}
}