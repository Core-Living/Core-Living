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
					var R = 6371e3; // metres
					var lat1Rad = this.currentLat.toRadians();
					var lat2Rad = position.coords.latitude.toRadians();
					var sub1Rad = (position.coords.latitude - this.currentLat).toRadians();
					var sub2Rad = (position.coords.longitude - this.currentLong).toRadians();

					var a = Math.sin(sub1Rad/2) * Math.sin(sub1Rad/2) +
							Math.cos(lat1Rad) * Math.cos(lat2Rad) *
							Math.sin(sub2Rad/2) * Math.sin(sub2Rad/2);
					var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

					var d = R * c;
				}
				document.querySelector('#oldlong').textContent = this.currentLong;
				document.querySelector('#oldlat').textContent = this.currentLat;
				document.querySelector('#newlong').textContent = position.coords.longitude;
				document.querySelector('#newlat').textContent = position.coords.latitude;
				document.querySelector('#distance').textContent = d;
				console.log("here");
				this.currentLat = position.coords.latitude;
				this.currentLong = position.coords.longitude;
			}
			});	
		}
	}
}