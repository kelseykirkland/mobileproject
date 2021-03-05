//Default imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

//Custom imports
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Testing import
//This is a function used for testing if the favourite/select list being changed will reflect
//in the view.
import { favController } from './../Controllers/FavouriteController.js';
import { selectController } from './../Controllers/SelectController.js';

class HomeView{
    getView({ navigation }){
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>Home Page</Text> 
                <Button title= "Favourites" onPress={() => navigation.navigate("Favourite")} />
                <Button title= "New Select" onPress={() => navigation.navigate("Location")} />
                <Button title= "Change FavouriteList" onPress={() => favController.setFavouriteList()} />
                <Button title= "Change SelectList" onPress={() => selectController.setSelectList()} />
            </View>
        );
    }
}

const homeView = new HomeView();
export { homeView };