function GPS(StartDistance)
{
	currentLat = null;
	currentLong = null;
	distance = StartDistance;
	this.update = () =>
	{
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(function(position) {
			if(position.coords.latitude != currentLat || position.coords.longitude != currentLong)
			{
				if(currentLat != null && currentLong != null)
				{
					let latToMiles = 69;
					let lngToMiles = 69.172;
					let latRad = currentLat * (Math.PI / 180);
					let latMilesDistance = latToMiles * (currentLat - position.coords.latitude);
					let lngMilesDistance = lngToMiles * (currentLong - position.coords.longitude) * Math.cos(latRad);
					distance += Math.sqrt(latMilesDistance.toFixed(22) * latMilesDistance.toFixed(22) + lngMilesDistance.toFixed(22) * lngMilesDistance.toFixed(22));	
				}
                else
                {
                    currentLat = position.coords.latitude;
                    currentLong = position.coords.longitude;
                }
				let tempNumber = distance.toFixed(2);
				document.querySelector('#distance').textContent =  tempNumber + " Miles";
			}
			});	
		}
	}
}