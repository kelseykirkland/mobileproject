
export default class SelectController {

    location = null;

    // selectList = [{key: "Harveys"}, {key: "McD"}, {key: "Wendys"}, {key: "Tims"}, {key: "A&W"}, {key: "5Guy"}, {key: "Burger Priest"}, {key: "Subway"}, 
    // {key: "Doninos"}, {key: "Pizza Hut"}, {key: "Little Ceasers"}, {key: "Montanas"}, {key: "TJ"}, {key: "Boston Pizza"}, {key: "Dairy Queen"}, {key: "StarBucks"}];

    // key = place_id;
    selectList = [{"name": "Mcd", "vicinity": "123 this place", key: "ChIJsQ-E_sqEK4gRur_dZJGzG34", "rating": 1.1, "user_ratings_total": 100, "price_level": 1}, 
    {"name": "Wendys ", "vicinity": "456 that place", key: "ChIJsQ-E", "rating": 2.2, "user_ratings_total": 200, "price_level": 2},
    {"name": "A&W", "vicinity": "123 that other place", key: "dZJGzG34", "rating": 3.3, "user_ratings_total": 300, "price_level": 3 },
    {"name": "5 Guys", "vicinity": "1001 Happy place", key: "sqEK4gRur", "rating": 4.4, "user_ratings_total": 400, "price_level": 4 }];

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

        // add api key here, take out to push to github
        var key = "";

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
            var rest = {"name": data.results[i].name, "vicinity": data.results[i].vicinity, key: data.results[i].place_id,
                        "rating": data.results[i].rating, "user_ratings_total": data.results[i].user_ratings_total, "price_level": data.results[i].price_level, 
                        "open": data.results[i].opening_hours, "types": data.results[i].types}
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
