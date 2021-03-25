
export default class SelectController {

    location = null;

    selectList = [{key: "Harveys"}, {key: "McD"}, {key: "Wendys"}, {key: "Tims"}, {key: "A&W"}, {key: "5Guy"}, {key: "Burger Priest"}, {key: "Subway"}, 
    {key: "Doninos"}, {key: "Pizza Hut"}, {key: "Little Ceasers"}, {key: "Montanas"}, {key: "TJ"}, {key: "Boston Pizza"}, {key: "Dairy Queen"}, {key: "StarBucks"}];

    getSelectList() {
        return this.selectList;
    }

    //This is a function used for testing if the favourite list being changed will reflect
    //in the view.
    setSelectList() {
        this.selectList = [{key: "Delta"}, {key: "Echo"}, {key: "Fox"}];
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
        //console.log(loc);
        //return location;
    };

    getRestaurantList(location) {
        console.log("HELLO")
        console.log(location)

        if(location == null) {
            console.log("location is null: "+location);
            return;
        }

        const key = process.env.GOOGLE_API_KEY;

        var httpString = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+location+'&radius=1500&type=restaurant&key=key';
        console.log(httpString);
        
        let request = new XMLHttpRequest();
        request.open("GET", httpString);
        request.send();
        request.onload = () => {
            //console.log(request);
            if(request.status == 200) {
                //console.log(JSON.parse(request.response));
                this.makeRestaurantList(JSON.parse(request.response))
            } else {
                console.log('error ${request.status} ${request.statusTest}')
            }
        }
        
    }

    makeRestaurantList(data) {
        console.log("Number of Restraunts: "+data.results.length);
        var restList = [];

        for (let i = 0; i < data.results.length; i++) {
            //console.log(data.results[i].name);
            restList.push(data.results[i].name);
        }
        console.log(restList);
        // this.selectList = restList;
        // console.log(this.selectList);

    }
    
}

const selectController = new SelectController();
export { selectController };



// Nearby Search Requests
// HTTP URL
// https://maps.googleapis.com/maps/api/place/nearbysearch/output?parameters

// output = json

// all parameters are separated using the ampersand &

// required: key, location(lat,long), radius (in meters), 
// other keyword(ie. restaurant) or type ie. restaurant
// Example: https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY
// FOR US:
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=(lat,long)&radius=1500&type=restaurant&key=
