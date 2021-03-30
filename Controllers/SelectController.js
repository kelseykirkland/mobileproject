
export default class SelectController {

    location = null;

    selectList = [{key: "Harveys"}, {key: "McD"}, {key: "Wendys"}, {key: "Tims"}, {key: "A&W"}, {key: "5Guy"}, {key: "Burger Priest"}, {key: "Subway"}, 
    {key: "Doninos"}, {key: "Pizza Hut"}, {key: "Little Ceasers"}, {key: "Montanas"}, {key: "TJ"}, {key: "Boston Pizza"}, {key: "Dairy Queen"}, {key: "StarBucks"}];

    getSelectList() {
        return this.selectList;
    }

    clearSelectList() {
        this.selectList = [];
    }

    // Sets the select list
    // Param: array of restraunt object like select list
    setSelectList(data) {
        //this.selectList = [{key: "Delta"}, {key: "Echo"}, {key: "Fox"}];
        this.selectList = data;
        console.log("SELECT LIST");
        console.log(this.selectList);
    }

    getCoordinates = () => {
        var loc;
        navigator.geolocation.getCurrentPosition(
          position => { 
            const long = JSON.stringify(position.coords.longitude);
            const lat = JSON.stringify(position.coords.latitude);
            //this.longitude = long;
            //this.latitude = lat;
            this.location = lat+","+long;
            loc = lat+","+long;
            console.log("*"+this.location);
            return this.location;
            
          },
          error => Alert.alert(error.message),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        //console.log(loc);
        //return location;
    };

    //Param: location in string from of lat,long
    getRestaurantList(location) {
        //location = this.location;
        console.log("HELLO")
        console.log(location)

        if(location == null) {
            console.log("location is null: "+location);
            return;
        }

        //var key = process.env.GOOGLE_API_KEY;
        var key;

        var httpString = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+location+'&radius=1500&type=restaurant&key='+key;
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
        var restObjList = [];

        for (let i = 0; i < data.results.length; i++) {
            //console.log(data.results[i].name);
            restList.push(data.results[i].name);
            var rest = {key: data.results[i].name}
            restObjList.push(rest)
        }
        //console.log(restList);
        //console.log(restObjList);
        this.setSelectList(restObjList);
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
