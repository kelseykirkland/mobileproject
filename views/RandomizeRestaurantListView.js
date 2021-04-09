import React from 'react';
import { Button, Text, View } from 'react-native';
import PropTypes from 'prop-types'

import { styles } from './styles.js'
import { randomizerController } from '../Controllers/RandomizerController.js';
import { favouriteController } from '../Controllers/FavouriteController.js';

export default class RandomizeRestaurantListView extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View style={styles.listItem}>
                <Text style={styles.listText}> {this.props.name} </Text>
                <Text>
                <Button title= "Fav" onPress={() => this.props.favouriteController.addToFavouriteList(this.props.restaurant)} />
                <Button title= "Info" onPress={() => this.props.navFunc("Restaurant", { name: this.props.name, restaurant: this.props.restaurant})} />
                <Button title= "Remove" onPress={() => this.props.randomizerController.removeFromRandomize(this.props.name)} />
                </Text>
            </View>
        );
    }
}

RandomizeRestaurantListView.propTypes = {
    name: PropTypes.string.isRequired, 
    navFunc: PropTypes.func.isRequired, 
    restaurant: PropTypes.object.isRequired, 
    favouriteController: PropTypes.object.isRequired,
    randomizerController: PropTypes.object.isRequired,
};

// THIS VIEW IS FOR RANDOMIZER PAGE. RESTAURANTS THAT ARE RANDOMLY PICKED FROM.