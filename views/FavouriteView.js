//Default imports
import React  from 'react';
import { Text, View, FlatList } from 'react-native';

import { favController } from './../Controllers/FavouriteController.js';
import { restaurantListView } from './RestaurantListView.js';

class FavouriteView{
    getView({ navigation }) {
        return(
            <View>
                <Text>Favourite Page</Text> 
                <View style={{height: 200}}>
                    <FlatList 
                        data={favController.getFavouriteList()}
                        renderItem={({item}) => restaurantListView.create(item.key, navigation)}
                    />
                </View>
            </View>
        );
    }
}

const favView = new FavouriteView();
export { favView };