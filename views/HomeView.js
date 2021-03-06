//Default imports
import React from 'react';
import { Button, Text, View } from 'react-native';

//Testing import
//This is a function used for testing if the favourite/select list being changed will reflect
//in the view.
import { selectController } from './../Controllers/SelectController.js';

export default class HomeView extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>Home Page</Text> 
                <Button title= "Favourites" onPress={() => this.props.navigation.navigate("Favourite")} />
                <Button title= "New Select" onPress={() => this.props.navigation.navigate("Location")} />
                <Button title= "Change FavouriteList" onPress={() => this.props.route.params.state.favouriteController.setFavouriteList()} />
                <Button title= "Change SelectList" onPress={() => this.props.route.params.state.selectController.setSelectList()} />
            </View>
        );
    }
}