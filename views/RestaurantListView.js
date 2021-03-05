// This will be the objects for restaurants that are shown in a list
// for select and favourite pages. 

//Default imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

//Custom imports
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



class RestaurantListView {
    create( name, navigation ) {
        return (
            <View style={{Height: 50, borderColor: 'Black', borderBottomWidth: 1, borderTopWidth: 1, borderLeftWidth: 1, borderRightWidth: 1}}>
                <Text> {name} </Text>
                <Button title= "Info" onPress={() => navigation.navigate("Restaurant", {restaurantName: name})} />
            </View>
        );
    }
}

const restaurantListView = new RestaurantListView();
export { restaurantListView }