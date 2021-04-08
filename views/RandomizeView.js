//Default imports
import React from 'react';
import { Button, Text, View, FlatList, Alert } from 'react-native';
import RestaurantListView from './RestaurantListView.js';
import RandomizeRestaurantListView from './RandomizeRestaurantListView.js';

import { randomizerController } from './../Controllers/RandomizerController.js';

export default class RandomizeView extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        console.log("randomizer List:\n");
        randoList = randomizerController.getRandomizerList();
        console.log(randoList.length);
        console.log("dog");
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>Randomizer Page</Text> 
                <Button title= "Randomize!" onPress={() => {
                    if(randoList.length > 0) {
                        this.props.navigation.navigate("Winner");
                    } else {
                        Alert.alert("Please select atleast one restaurant");
                    }
                }} />
                <Button title= "Clear List" onPress={() => randomizerController.clearRandomizerList()} />
                <View style={{height: 200}}>
                    <FlatList 
                        data={randoList}
                        renderItem={({item}) => (
                            <RandomizeRestaurantListView name={item.name} navFunc={this.props.navigation.navigate} restaurant={item} favouriteController={this.props.route.params.state.favouriteController}/>
                        )}
                    />
                </View>
            </View>
        );
    }
}