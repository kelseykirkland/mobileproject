var longitude = 4;
var latitude = 3;

class LocationController {
    getLatitude() {
        return latitude;
    }

    getLongitude() {
        return longitude;
    }

    // //This is a function used for testing if the favourite list being changed will reflect
    // //in the view.
    // setSelectList() {
    //     SelectList = [{key: "Delta"}, {key: "Echo"}, {key: "Fox"}];
    // }

    getCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
          position => { 
            const long = JSON.stringify(position.coords.longitude);
            const lat = JSON.stringify(position.coords.latitude);
            longitude = longitude;
            latitude = latitude;
          },
          error => Alert.alert(error.message),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };
}

const locationController = new LocationController();
export { locationController };