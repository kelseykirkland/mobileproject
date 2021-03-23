var SelectList = [{key: "Harveys"}, {key: "McD"}, {key: "Wendys"}, {key: "Tims"}, {key: "A&W"}, {key: "5Guy"}, {key: "Burger Priest"}, {key: "Subway"}, 
{key: "Doninos"}, {key: "Pizza Hut"}, {key: "Little Ceasers"}, {key: "Montanas"}, {key: "meep"}, {key: "Boston Pizza"}, {key: "Dairy Queen"}, {key: "StarBucks"}];

class SelectController {
    getSelectList() {
        return SelectList;
    }

    //This is a function used for testing if the favourite list being changed will reflect
    //in the view.
    setSelectList() {
        SelectList = [{key: "Delta"}, {key: "Echo"}, {key: "Fox"}];
    }

    getRestaurantList(location) {
        console.log("HELLO")
        console.log(location)
        // const axios = require('axios')
        // const router = require('express').Router()

        // module.exports = router
        // const key = process.env.GOOGLE_API_KEY
        // router.get('/restaurants', async (req, res, next) => {
        //     try {
        //       const location = location
        //       const radius = '1500'
        //       const {data} = await axios.get(
              
        //    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=1500&type=restaurant&key=AIzaSyC55YGIUhYvCCZo9ktJroBqWeSceQWd_-8'
        //       )
        //       res.json(data)
        //       } 
        //     catch (err) {
        //      next(err)
        //    }
        // })
        // console.log(JSON.stringify(data))
        let request = new XMLHttpRequest();
        request.open("GET", 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.51206156408919,-80.20931413777406&radius=1500&type=restaurant&key=AIzaSyC55YGIUhYvCCZo9ktJroBqWeSceQWd_-8');
        request.send();
        request.onload = () => {
            //console.log(request);
            if(request.status == 200) {
                console.log(JSON.parse(request.response));
            } else {
                console.log('error ${request.status} ${request.statusTest}')
            }
        }

        fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.51206156408919,-80.20931413777406&radius=1500&type=restaurant&key=AIzaSyC55YGIUhYvCCZo9ktJroBqWeSceQWd_-8') 
            .then(response => {
                return response.json();
            })
            .then(users => {
                console.log(users)
            });
        
    }
}

const selectController = new SelectController();
export { selectController };

//API KEY
// AIzaSyC55YGIUhYvCCZo9ktJroBqWeSceQWd_-8

// Nearby Search Requests
// HTTP URL
// https://maps.googleapis.com/maps/api/place/nearbysearch/output?parameters

// output = json

// all parameters are separated using the ampersand &

// required: key, location(lat,long), radius (in meters), 
// other keyword(ie. restaurant) or type ie. restaurant
// Example: https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY
// FOR US:
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=(lat,long)&radius=1500&type=restaurant&key=AIzaSyC55YGIUhYvCCZo9ktJroBqWeSceQWd_-8