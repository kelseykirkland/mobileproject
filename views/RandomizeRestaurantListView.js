import React from 'react';
import { Button, Text, View } from 'react-native';
import PropTypes from 'prop-types'

import { styles } from './styles.js'

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
                <Button title= "Info" onPress={() => this.props.navFunc("Restaurant", {restaurant: this.props.restaurant})} />
                <Button title= "Remove" onPress={() =>{this.props.randomizerController.removeFromRandomize(this.props.restaurant); this.props.refresh();}} />
                </Text>
            </View>
        );
    }
}

RandomizeRestaurantListView.propTypes = {
    navFunc: PropTypes.func.isRequired, 
    restaurant: PropTypes.object.isRequired, 
    favouriteController: PropTypes.object.isRequired,
    randomizerController: PropTypes.object.isRequired,
    refresh: PropTypes.func.isRequired
};

// THIS VIEW IS FOR RANDOMIZER PAGE. RESTAURANTS THAT ARE RANDOMLY PICKED FROM.