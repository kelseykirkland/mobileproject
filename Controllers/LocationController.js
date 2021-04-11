var longitude = 4;
var latitude = 3;
var location = null;

class LocationController {
    getlocation() {
        return this.location;
    }

    getCoordinates = () => {
        var loc;
        navigator.geolocation.getCurrentPosition(
          position => { 
            const long = JSON.stringify(position.coords.longitude);
            const lat = JSON.stringify(position.coords.latitude);
            this.longitude = long;
            this.latitude = lat;
            this.location = lat+","+long;
            loc = lat+","+long;
            console.log("*"+this.location);
            return loc;
            
          },
          error => Alert.alert(error.message),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };
}

const locationController = new LocationController();
export { locationController };