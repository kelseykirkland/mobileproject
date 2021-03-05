// The purpose of this class is to create the objects that 
// will be sent to the view which it will have in the 
// ScrollView.
//
// The objects will have the information that is gotten from the 
// restaurants that are a resultant of the favourite list.

var favouriteList = [{key: "Harveys"}, {key: "McD"}, {key: "Wendys"}, {key: "Tims"}, {key: "A&W"}, {key: "5Guy"}, {key: "Burger Priest"}, {key: "Subway"}, 
{key: "Doninos"}, {key: "Pizza Hut"}, {key: "Little Ceasers"}, {key: "Montanas"}, {key: "TJ"}, {key: "Boston Pizza"}, {key: "Dairy Queen"}, {key: "StarBucks"}];

class FavouriteController {
    getFavouriteList() {
        return favouriteList;
    }

    //This is a function used for testing if the favourite list being changed will reflect
    //in the view.
    setFavouriteList() {
        favouriteList = [{key: "Alpha"}, {key: "Beta"}, {key: "Charlie"}];
    }
}

const favController = new FavouriteController();
export { favController };