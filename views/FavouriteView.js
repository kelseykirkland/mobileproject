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
                <View style={{height: 200}}>
                    <FlatList 
                        data={this.props.route.params.state.favouriteController.getFavouriteList()}
                        renderItem={({item}) => (
                            <RestaurantListView name={item.name} navFunc={this.props.navigation.navigate} restaurant={item} favouriteController={this.props.route.params.state.favouriteController} />
                        )}
                    />
                </View>
            </View>
        );
    }
}