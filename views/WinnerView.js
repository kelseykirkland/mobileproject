//Default imports
import React from 'react';
import { Button, Text, View } from 'react-native';

import { randomizerController } from './../Controllers/RandomizerController.js';

export default class WinnerView extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>Winner!</Text> 
                <Text> {randomizerController.getWinnerName()} </Text>
                <Button title= "Home" onPress={() => this.props.navigation.navigate("Home")} />
                <Button title= "Spin Again" />
                <Button title= "Add to favourites" />
            </View>
        );
    }
}