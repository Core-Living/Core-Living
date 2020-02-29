function GPS()
{
	this.currentLat = null;
	this.currentLong = null;
	this.d = 0;
	this.state = null;
	this.update = () =>
	{
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(function(position) {
			if(position.coords.latitude != this.currentLat || position.coords.longitude != this.currentLong)
			{
				if(this.currentLat != null && this.currentLong != null)
				{
					let R = 6371e3; // metres
					let lat1Rad = this.currentLat.toRadians();
					let lat2Rad = position.coords.latitude.toRadians();
					let sub1Rad = (position.coords.latitude - this.currentLat).toRadians();
					let sub2Rad = (position.coords.longitude - this.currentLong).toRadians();

					let a = Math.sin(sub1Rad/2) * Math.sin(sub1Rad/2) +
							Math.cos(lat1Rad) * Math.cos(lat2Rad) *
							Math.sin(sub2Rad/2) * Math.sin(sub2Rad/2);
					let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

					this.d = R * c;
				}
				document.querySelector('#oldlong').textContent = this.currentLong;
				document.querySelector('#oldlat').textContent = this.currentLat;
				document.querySelector('#newlong').textContent = position.coords.longitude;
				document.querySelector('#newlat').textContent = position.coords.latitude;
				document.querySelector('#distance').textContent = this.d;
				this.currentLat = position.coords.latitude;
				this.currentLong = position.coords.longitude;
			}
			});	
		}
	}
}