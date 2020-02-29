function GPS()
{
	this.currentLat = null;
	this.currentLong = null;
	this.state = null;
	this.update = () =>
	{
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(function(position) {
			if(position.coords.latitude != this.currentLat || position.coords.longitude != this.currentLong)
			{
				if(this.currentLat != null && this.currentLong != null)
				{
					//var R = 6371e3; // metres
					//var φ1 = this.currentLat.toRadians();
					//var φ2 = position.coords.latitude.toRadians();
					//var Δφ = (position.coords.latitude - this.currentLat).toRadians();
					//var Δλ = (position.coords.longitude - this.currentLong).toRadians();

					//var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
							//Math.cos(φ1) * Math.cos(φ2) *
							//Math.sin(Δλ/2) * Math.sin(Δλ/2);
					//var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

					//var d = R * c;
					//alert(d);
				}
				document.querySelector('#oldlong').textContent = this.currentLong;
				document.querySelector('#oldlat').textContent = this.currentLat;
				document.querySelector('#newlong').textContent = position.coords.longitude;
				document.querySelector('#newlat').textContent = position.coords.latitude;
				this.currentLat = position.coords.latitude;
				this.currentLong = position.coords.longitude;
			}
			});	
		}
	}
}