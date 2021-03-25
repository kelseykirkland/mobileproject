var longitude = 4;
var latitude = 3;
var location = null;

class LocationController {
    getlocation() {
        return this.location;
    }

    // //This is a function used for testing if the favourite list being changed will reflect
    // //in the view.
    // setSelectList() {
    //     SelectList = [{key: "Delta"}, {key: "Echo"}, {key: "Fox"}];
    // }

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
        //console.log(loc);
        //return location;
    };
}

const locationController = new LocationController();
export { locationController };