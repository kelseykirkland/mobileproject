// The purpose of this class is to create the objects that 
// will be sent to the view which it will have in the 
// ScrollView.
//
// The objects will have the information that is gotten from the 
// restaurants that are a resultant of the favourite list.

export default class FavouriteController {
    // favouriteList = [{key: "Harveys"}, {key: "McD"}, {key: "Wendys"}, {key: "Tims"}, {key: "A&W"}, {key: "5Guy"}, {key: "Burger Priest"}, {key: "Subway"}, 
    // {key: "Doninos"}, {key: "Pizza Hut"}, {key: "Little Ceasers"}, {key: "Montanas"}, {key: "TJ"}, {key: "Boston Pizza"}, {key: "Dairy Queen"}, {key: "StarBucks"}];
    favouriteList = [];

    getFavouriteList() {
        return this.favouriteList;
    }

    //This is a function used for testing if the favourite list being changed will reflect
    //in the view.
    // i don't think we use this
    setFavouriteList() {
        this.favouriteList = [{key: "Alpha"}, {key: "Beta"}, {key: "Charlie"}];
    }

    clearFavouriteList() {
        this.favouritesList = [];
    }

    addToFavouriteList(restaurant) {
        console.log(restaurant);
        //var rest = {name: restaurant};
        this.favouriteList.push(restaurant);
        console.log(this.favouriteList);  
    }

    removeFromFavourites(restaurantName) {
        console.log("Removing "+restaurantName);
        for (var i = 0; i < this.favouriteList.length; i++) {
            if(restaurantName == this.favouriteList[i].key) {
                this.favouriteList.splice(i,1);
            }
        }
        console.log(this.favouriteList);
    }

    getRestaurantName(restaurant) {
        console.log(restaurant.name);
        return restaurant.name;
    }

    getRestaurantVicinity(restaurant) {
        console.log(restaurant.vicinity);
        return restaurant.vicinity;
    }

    getRestaurantRating(restaurant) {
        console.log(restaurant.rating);
        return restaurant.rating;
    }

    getRestaurantUserRatingTotal(restaurant) {
        console.log(restaurant.user_ratings_total);
        return restaurant.user_ratings_total;
    }

    getRestaurantPriceLevel(restaurant) {
        console.log(restaurant.price_level);
        return restaurant.price_level;
    }
}

const favouriteController = new FavouriteController();
export { favouriteController };