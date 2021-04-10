//Default imports
import React from 'react';
import { Button, Text, View } from 'react-native';

import { styles } from './styles.js'
import { randomizerController } from './../Controllers/RandomizerController.js';
import { favouriteController } from './../Controllers/FavouriteController.js';

export default class WinnerView extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        winner = this.props.route.params.state.randomizerController.randomize();
        return(
            <View style={styles.winnerContainer}>
                <Text style={styles.bigTitle}>Winner!</Text> 
                <Text style={styles.winnerTitle}> {winner.name} </Text>
                <Text style= {styles.address}> {winner.vicinity}</Text>
                <Button title= "Home" onPress={() => {this.props.navigation.navigate("Home")}} />
                <Button title= "Spin Again" onPress={() => { this.props.route.params.state.randomizerController.removeFromRandomize(winner.name); this.props.navigation.navigate("Randomizer")}}/>
                <Button title= "Add to favourites" onPress={() => this.props.route.params.state.favouriteController.addToFavouriteList(winner)} />
            </View>
        );
    }
}