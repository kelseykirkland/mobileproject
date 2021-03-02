//Default imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

//Custom imports
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

class SelectView{
    getView({ navigation }){
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>New Select Page</Text> 
                <Button title= "Confirm" onPress={() => navigation.navigate("Randomizer")} />
            </View>
        );
    }
}

const selectView = new SelectView();
export { selectView };