//Default imports
import React from 'react';
import { Button, Text, View } from 'react-native';

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
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text style= {styles.bigTitle}>The Amazing Restaurant Picker!</Text> 
                <Button buttonStyle={styles.buttons} title= "Find Restaurants!" onPress={() => this.props.navigation.navigate("Location")} />
                <Button title= "Favourites" onPress={() => this.props.navigation.navigate("Favourites")} />
            </View>
        );
    }
}