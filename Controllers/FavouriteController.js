// The purpose of this class is to create the objects that 
// will be sent to the view which it will have in the 
// ScrollView.
//
// The objects will have the information that is gotten from the 
// restaurants that are a resultant of the favourite list.
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class FavouriteController {
   favouriteList = new Array;

    //Create a constructor or oncreate/onload that will check the 
    //async memory for a saved list and populate favourite list with it.
    constructor() {
        this.favouritesList = [];
    }

    retrieveData = async () => {
        try {
            AsyncStorage.getAllKeys((err, keys) => {
                AsyncStorage.multiGet(keys, (err, stores) => {
                  stores.map((result, i, store) => {
                    this.favouriteList.push(JSON.parse(store[i][1]));
                  });
                });
              });
        } catch (error) {
            console.log("Error retrieving AsyncStorage data:");
            console.log(error);
        }
    };

    storeData = async (restaurant) => {
		try {
		  await AsyncStorage.setItem(
			restaurant.key,
			JSON.stringify(restaurant)
		  );
		} catch (error) {
		  // Error saving data
          console.log("Error storing AsyncStorage data:");
          console.log(error);
		}
	};

    removeData = async (restaurantKey, index) => {
		try {
		  await AsyncStorage.removeItem(
			restaurantKey, () => {});
		} catch (error) {
		  // Error saving data
          console.log("Error removing AsyncStorage data:");
          console.log(error);
		}
	};

    clearData = async () => {
        try {
            AsyncStorage.getAllKeys((err, keys) => {
                AsyncStorage.multiRemove(keys, (err) => {
                    //Should remove all keys
                });
              });
        } catch (error) {
            console.log("Error clearing AsyncStorage data:");
            console.log(error);
        }
    };

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
        this.clearData();
    }

    addToFavouriteList(restaurant) {
        console.log(restaurant);
        found = 0;
        for (var i = 0; i < this.favouriteList.length; i++) {
            if(this.favouriteList[i].key == restaurant.key) {
                found = 1;
            }    
        }
        if(found == 0) {
            this.favouriteList.push(restaurant);
            console.log(this.favouriteList);  

            //When add to favourite list, also add to Async storage
            this.storeData(restaurant);
        }
        
    }

    removeFromFavourites(restaurant) {
        console.log("Removing "+restaurant.name);
        for (var i = 0; i < this.favouriteList.length; i++) {
            if(restaurant.key == this.favouriteList[i].key) {
                //When remove from favourite list, also remove from Async storage
                console.log(this.favouriteList[i]);
                this.removeData(this.favouriteList[i].key, i); 
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