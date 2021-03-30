//Default imports
import React, { Component }  from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import RestaurantListView from './RestaurantListView.js';

import { favouriteController } from './../Controllers/FavouriteController.js';

export default class FavouriteView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Favourite List: \n");
        console.log(this.props.route.params.state.favouriteController.getFavouriteList());
        return(
            <View>
                <Text>Favourite Page</Text> 
                {/* <Button title= "Clear List" onPress={() => favouriteController.clearFavouriteList()} /> */}
                <View style={{height: 200}}>
                    <FlatList 
                        data={favouriteController.getFavouriteList()}
                        renderItem={({item}) => (
                            <RestaurantListView name={item.key} navFunc={this.props.navigation.navigate} />
                        )}
                    />
                </View>
            </View>
        );
    }
}