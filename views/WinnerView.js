//Default imports
import React from 'react';
import { Button, Text, View } from 'react-native';

import { randomizerController } from './../Controllers/RandomizerController.js';
import { favouriteController } from './../Controllers/FavouriteController.js';

export default class WinnerView extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        winner = randomizerController.randomize();
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>Winner!</Text> 
                <Text> {winner.name} </Text>
                <Button title= "Home" onPress={() => this.props.navigation.navigate("Home")} />
                <Button title= "Spin Again" onPress={() => { randomizerController.removeFromRandomize(winner.name); this.props.navigation.navigate("Randomizer")}}/>
                <Button title= "Add to favourites" onPress={() => this.props.route.params.state.favouriteController.addToFavouriteList(winner)} />
            </View>
        );
    }
}