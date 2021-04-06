//Default imports
import React from 'react';
import { Text, View } from 'react-native';

import { favouriteController } from './../Controllers/FavouriteController.js';

export default class RestaurantView extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>{this.props.route.params.name}</Text> 
                <Text> {favouriteController.getRestaurantVicinity(this.props.route.params.restaurant)} </Text>
                <Text> Rating: {favouriteController.getRestaurantRating(this.props.route.params.restaurant)} with {favouriteController.getRestaurantUserRatingTotal(this.props.route.params.restaurant)} reviews </Text>
                <Text> Price Level {favouriteController.getRestaurantPriceLevel(this.props.route.params.restaurant)} </Text>
                <Text>Dog Woof woof</Text>
            </View>
        );
    }
}