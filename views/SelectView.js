//Default imports
import React from 'react';
import { Button, Text, View, FlatList } from 'react-native';

import { selectController } from './../Controllers/SelectController.js';
import { restaurantListView } from './RestaurantListView.js';


class SelectView{
    getView({ navigation }){
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>New Select Page</Text> 
                <Button title= "Confirm" onPress={() => navigation.navigate("Randomizer")} />
                <View style={{height: 200}}>
                    <FlatList 
                        data={selectController.getSelectList()}
                        renderItem={({item}) => restaurantListView.create(item.key, navigation)}
                    />
                </View>
            </View>
        );
    }
}

const selectView = new SelectView();
export { selectView };