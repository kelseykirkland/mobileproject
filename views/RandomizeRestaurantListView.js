import React from 'react';
import { Button, Text, View, TouchableOpacity, Alert } from 'react-native';
import PropTypes from 'prop-types'

import { styles } from './styles.js'

export default class RandomizeRestaurantListView extends React.Component {
    constructor(props) {
        super(props);
    }

    favouriteAdded = (name) => {
        console.log("Alert");
        Alert.alert("Added "+ name + " to Favourites!");
    }

    render () {
        return (
            <View style={styles.listItem}>
                <Text style={styles.listText}> {this.props.name} </Text>
                <Text style={styles.smallButtonContainer}>
                        <TouchableOpacity style = {styles.smallButton}
                            onPress={() => { this.props.favouriteController.addToFavouriteList(this.props.restaurant) ; this.favouriteAdded(this.props.name) }}>
                            <Text style = {styles.smallButtonText}> Fav </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.smallButton}
                            onPress={() => this.props.navFunc("Restaurant", { name: this.props.name, restaurant: this.props.restaurant })}>
                            <Text style = {styles.smallButtonText}> Info </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.smallButton}
                            onPress={() =>{this.props.randomizerController.removeFromRandomize(this.props.restaurant); this.props.refresh();}} >
                            <Text style = {styles.smallButtonText}> Remove </Text>
                        </TouchableOpacity>
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