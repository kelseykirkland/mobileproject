//Default imports
import React from 'react';
import { Button, Text, View, FlatList, Alert } from 'react-native';
import RestaurantListView from './RestaurantListView.js';
import RandomizeRestaurantListView from './RandomizeRestaurantListView.js';

import { styles } from './styles.js'
import { randomizerController } from './../Controllers/RandomizerController.js';

export default class RandomizeView extends React.Component{
    constructor(props) {
        super(props);
    }

    state = {
        refresh: true
    }

    refresh() {
        this.setState(({ refresh }) => ({ refresh: !refresh }));
    }

    render() {
        console.log("randomizer List:\n");
        randoList = this.props.route.params.state.randomizerController.getRandomizerList();
        return(
            <View style={styles.container}>
                <Text style={styles.instructions}>These are the restaurants you picked! When you're ready, hit Randomize! to pick one!</Text> 
                <Button title= "Randomize!" onPress={() => {
                    if(randoList.length > 0) {
                        this.props.navigation.navigate("Winner");
                    } else {
                        Alert.alert("Please select atleast one restaurant");
                    }
                }} />
                <Button title= "Clear List" onPress={() => randomizerController.clearRandomizerList()} />
                <View style={styles.container}>
                    <FlatList 
                        data={randoList}
                        extraData={this.state.refresh}
                        renderItem={({item}) => (
                            <RandomizeRestaurantListView name={item.name} navFunc={this.props.navigation.navigate} restaurant={item} favouriteController={this.props.route.params.state.favouriteController} randomizerController={this.props.route.params.state.randomizerController} refresh={this.refresh.bind(this)}/>
                        )}
                    />
                </View>
            </View>
        );
    }
}