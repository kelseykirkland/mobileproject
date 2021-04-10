//Default imports
import React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles.js'
import { randomizerController } from './../Controllers/RandomizerController.js';
import { favouriteController } from './../Controllers/FavouriteController.js';

export default class WinnerView extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        winner = randomizerController.randomize();
        return(
            <View style={styles.winnerContainer}>
                <Text style={styles.bigTitle}>Winner!</Text> 
                <Text style={styles.winnerTitle}> {winner.name} </Text>
                <Text style= {styles.address}> {winner.vicinity}</Text>
                <TouchableOpacity style = {styles.clearButton}
                    onPress={() => this.props.route.params.state.favouriteController.addToFavouriteList(winner)}>
                   <Text style = {styles.clearButtonText}>Add to Favourites</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.clearButton}
                    onPress={() => this.props.navigation.navigate("Home")}>
                   <Text style = {styles.clearButtonText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.clearButton}
                    onPress={() => { randomizerController.removeFromRandomize(winner.name); this.props.navigation.navigate("Randomizer")}}>
                   <Text style = {styles.clearButtonText}>Spin Again</Text>
                </TouchableOpacity>
            </View>
        );
    }
}