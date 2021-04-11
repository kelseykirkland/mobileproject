//Default imports
import React from 'react';
import { Button, Text, View, FlatList, TouchableOpacity } from 'react-native';
import PickRestaurantListView from './PickRestaurantListView.js';

import { styles } from './styles.js'
import { randomizerController } from './../Controllers/RandomizerController.js';

export default class SelectView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Select List:\n");
        console.log(this.props.route.params.state.selectController.getSelectList());
        return(
            <View style={styles.container}>
                <Text style={styles.instructions}>We found these restaurants nearby.</Text> 
                <Text style={styles.instructions}>Swipe right on the ones you like!</Text> 
                <TouchableOpacity style = {styles.blueButton}
                   onPress={() => this.props.navigation.navigate("Randomizer")}>
                   <Text style = {styles.buttonText}> Done! </Text>
                </TouchableOpacity>
                <View style={styles.listContainer}>
                    <FlatList 
                        data={this.props.route.params.state.selectController.getSelectList()}
                        renderItem={({item}) => (
                            <PickRestaurantListView name={item.name} navFunc={this.props.navigation.navigate} restaurant={item} favouriteController={this.props.route.params.state.favouriteController} selectController={this.props.route.params.state.selectController}/>
                        )}
                    />
                </View>
            </View>
        );
    }
}

