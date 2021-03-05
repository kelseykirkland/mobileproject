//Default imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

//Custom imports
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

class RestaurantView{
    getView({ navigation, route }){
        const {restaurantName} = route.params;
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>{restaurantName}</Text> 
                <Text>Dog</Text>
            </View>
        );
    }
}

const restaurantView = new RestaurantView();
export { restaurantView };