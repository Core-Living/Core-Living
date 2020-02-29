function GPS()
{
	this.currentLat = null;
	this.currentLong = null;
	this.diistance = 0;
	this.state = null;
	this.update = () =>
	{
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(function(position) {
			if(position.coords.latitude != this.currentLat || position.coords.longitude != this.currentLong)
			{
				if(this.currentLat != null && this.currentLong != null)
				{
					let latToMeter = 110574;
					let lngToMeter = 111320;
					let latRad = Math.toRadians(this.currentLat);
					let latMeterDistance = latToMeter * (this.currentLat - position.coords.latitude);
					let lngMeterDistance = lngToMeter * (this.currentLong - position.coords.longitude) * Math.cos(latRad);
					this.distance = Math.sqrt(latMeterDistance * latMeterDistance + lngMeterDistance * lngMeterDistance);	
				}
				document.querySelector('#oldlong').textContent = this.currentLong;
				document.querySelector('#oldlat').textContent = this.currentLat;
				document.querySelector('#newlong').textContent = position.coords.longitude;
				document.querySelector('#newlat').textContent = position.coords.latitude;
				document.querySelector('#distance').textContent = this.distance;
				this.currentLat = position.coords.latitude;
				this.currentLong = position.coords.longitude;
			}
			});	
		}
	}
}