//Default imports
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles.js'

export default class HomeView extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.winnerContainer}>
                <Text style= {styles.bigTitle}>The Amazing Restaurant Picker!</Text> 
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