//Default imports
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles.js'

//Testing import
//This is a function used for testing if the favourite/select list being changed will reflect
//in the view.

export default class HomeView extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.winnerContainer}>
                <Text style= {styles.bigTitle}>The Amazing Restaurant Picker!</Text> 
                {/* <Button buttonStyle={styles.buttons} title= "Find Restaurants!" onPress={() => this.props.navigation.navigate("Location")} />
                <Button title= "Favourites" onPress={() => this.props.navigation.navigate("Favourites")} /> */}
                <TouchableOpacity style = {styles.blueButton}
                    onPress={() => this.props.navigation.navigate("Location")}>
                   <Text style = {styles.blueButtonText}>Find Restaurants!</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.clearButton}
                    onPress={() => this.props.navigation.navigate("Favourites")}>
                   <Text style = {styles.clearButtonText}>Favourites List</Text>
                </TouchableOpacity>
            </View>
        );
    }
}