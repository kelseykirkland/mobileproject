//Default imports
import React from 'react';
import { Button, Text, View, FlatList } from 'react-native';
import RestaurantListView from './RestaurantListView.js';
import RandomizeRestaurantListView from './RandomizeRestaurantListView.js';

import { randomizerController } from './../Controllers/RandomizerController.js';

export default class RandomizeView extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Randomizer List:\n");
        console.log(randomizerController.getRandomizerList());
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>Randomizer Page</Text> 
                <Button title= "Randomize!" onPress={() => this.props.navigation.navigate("Winner")} />
                <Button title= "Clear List" onPress={() => randomizerController.clearRandomizerList()} />
                <View style={{height: 200}}>
                    <FlatList 
                        data={randomizerController.getRandomizerList()}
                        renderItem={({item}) => (
                            <RandomizeRestaurantListView name={item.name} navFunc={this.props.navigation.navigate} restaurant={item} />
                        )}
                    />
                </View>
            </View>
        );
    }
}