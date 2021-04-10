import apikey from './../apikey.js';

export default class SelectController {

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

    removeFromSelect(restaurant) {
        console.log("Removing from select: "+ restaurant.name);
        for (var i = 0; i < this.selectList.length; i++) {
            if(restaurant.key == this.selectList[i].key) {
                this.selectList.splice(i,1);
            }
        }
    }

    // Sets the select list
    // Param: array of restraunt object like select list
    setSelectList(data) {
        this.clearSelectList();
        this.selectList = data;
        // console.log("SELECT LIST");
        // console.log(this.selectList);
    }

    //Param: location in string from of lat,long
    getRestaurantList(location, radius) {
        console.log("HELLO")
        console.log(location)

        console.log("RADIUS: "+radius);

        //var radiusNum = radius.toString();
        radius = radius * 1000;
        console.log("RADIUS: "+radius);


        if(location == null) {
            console.log("location is null: "+location);
            return;
        }

        // add api key here, take out to push to github
        var key = apikey.apikey;

        var httpString = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+location+'&radius='+radius+'&type=restaurant&key='+key;
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
