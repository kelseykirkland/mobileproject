//Default imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Custom imports
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

class FavouriteView{
    getView({ navigation }){
        return(
            <View>
                <Text>Favourite Page</Text> 
            </View>
        );
    }
}

const favView = new FavouriteView();
export { favView };