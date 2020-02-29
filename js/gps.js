function GPS()
{
	this.currentLat = null;
	this.currentLong = null;
	this.state = null
	let permission = PermissionStatus.state;
	this.update = () =>
	{
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(function(position) {
			if(position.coords.latitude != this.currentLat || position.coords.longitude != this.currentLong)
			{
				this.currentLat = position.coords.latitude;
				this.currentLong = position.coords.longitude;
				console.log(currentLat + " " + currentLong);
			}
			});	
		}
	}
}