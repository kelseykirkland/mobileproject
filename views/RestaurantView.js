//Default imports
import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles.js'

export default class RestaurantView extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <View style={styles.infoContainer}>
                <Text style= {styles.bigTitle}>{this.props.route.params.restaurant.name}</Text> 
                <Text style= {styles.address}> {this.props.route.params.state.favouriteController.getOpenNow(this.props.route.params.restaurant)} </Text>
                <Text style= {styles.address}> {this.props.route.params.state.favouriteController.getRestaurantVicinity(this.props.route.params.restaurant)} </Text>
                <Text style= {styles.smallTitle}> Rating: <Text style= {styles.infoBit}>{this.props.route.params.state.favouriteController.getRestaurantRating(this.props.route.params.restaurant)} </Text> 
                <Text>stars with <Text style= {styles.infoBit}>{this.props.route.params.state.favouriteController.getRestaurantUserRatingTotal(this.props.route.params.restaurant)} </Text>reviews </Text> </Text>
                <Text style= {styles.priceLevel}> Price Level: <Text style= {styles.infoBit}>{this.props.route.params.state.favouriteController.getRestaurantPriceLevel(this.props.route.params.restaurant)} </Text> </Text>
            </View>
        );
    }
}