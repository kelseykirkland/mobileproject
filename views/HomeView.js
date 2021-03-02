//Default imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

//Custom imports
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

class HomeView{
    getView({ navigation }){
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>Home Page</Text> 
                <Button title= "Favourites" onPress={() => navigation.navigate("Favourite")} />
                <Button title= "New Select" onPress={() => navigation.navigate("Select")} />
            </View>
        );
    }
}

const homeView = new HomeView();
export { homeView };