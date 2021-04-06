import React from 'react';
import { Button, Text, View } from 'react-native';
import PropTypes from 'prop-types'

import { randomizerController } from './../Controllers/RandomizerController.js';
import { favouriteController } from './../Controllers/FavouriteController.js';

export default class PickRestaurantListView extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View style={{Height: 50, borderColor: 'Black', borderBottomWidth: 1, borderTopWidth: 1, borderLeftWidth: 1, borderRightWidth: 1}}>
                <Text> {this.props.name} </Text>
                <Button title= "Yes" onPress={() => randomizerController.addRestaurant(this.props.restaurant)} />
                <Button title= "Info" onPress={() => this.props.navFunc("Restaurant", { name: this.props.name, restaurant: this.props.restaurant })} />
                <Button title= "Fav" onPress={() => favouriteController.addToFavouriteList(this.props.restaurant)} />
            </View>
        );
    }
}

PickRestaurantListView.propTypes = {name: PropTypes.string.isRequired, navFunc: PropTypes.func.isRequired, restaurant: PropTypes.object.isRequired};

// THIS VIEW IS FOR SELECT PAGE. RESTAURANT TO BE PICKED FOR RANDOMIZE LIST