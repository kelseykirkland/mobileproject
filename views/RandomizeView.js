//Default imports
import React from 'react';
import { Button, Text, View, FlatList, Alert, TouchableOpacity } from 'react-native';
import RestaurantListView from './RestaurantListView.js';
import RandomizeRestaurantListView from './RandomizeRestaurantListView.js';

import { styles } from './styles.js'
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
            <View style={styles.container}>
                <Text style={styles.instructions}>These are the restaurants you picked!</Text> 
                <Text style={styles.instructions}>When you're ready, hit Randomize! to pick one!</Text> 
                {/* <Button title= "Randomize!" onPress={() => {
                    if(randoList.length > 0) {
                        this.props.navigation.navigate("Winner");
                    } else {
                        Alert.alert("Please select atleast one restaurant");
                    }
                }} /> */}
                <TouchableOpacity style = {styles.blueButton}
                    onPress={() => {
                      if(randoList.length > 0) {
                          this.props.navigation.navigate("Winner");
                      } else {
                          Alert.alert("Please select atleast one restaurant");
                      }
                    }}>
                   <Text style = {styles.buttonText}> Randomize! </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.clearButton}
                    onPress={() => randomizerController.clearRandomizerList()}>
                   <Text style = {styles.clearButtonText}>Clear List</Text>
                </TouchableOpacity>
                <View style={styles.container}>
                    <FlatList 
                        data={randoList}
                        renderItem={({item}) => (
                            <RandomizeRestaurantListView name={item.name} navFunc={this.props.navigation.navigate} restaurant={item} favouriteController={this.props.route.params.state.favouriteController} randomizerController={this.props.route.params.state.randomizerController}/>
                        )}
                    />
                </View>
            </View>
        );
    }
}