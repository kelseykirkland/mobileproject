//Default imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

//Custom imports
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

class RandomizeView{
    getView({ navigation }){
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>New Randomize Page</Text> 
                <Button title= "Home" onPress={() => navigation.navigate("Home")} />
                <Button title= "Spin Again" />
                <Button title= "Add to favourites" />
            </View>
        );
    }
}

const randomizeView = new RandomizeView();
export { randomizeView };