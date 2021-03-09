//Default imports
import React from 'react';
import { Button, Text, View, FlatList } from 'react-native';

import { selectController } from './../Controllers/SelectController.js';
import RestaurantListView from './RestaurantListView.js';

export default class SelectView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>New Select Page</Text> 
                <Button title= "Confirm" onPress={() => this.props.navigation.navigate("Randomizer")} />
                <View style={{height: 200}}>
                    <FlatList 
                        data={selectController.getSelectList()}
                        renderItem={({item}) => (
                            <RestaurantListView name={item.key} navFunc={this.props.navigation.navigate} />
                        )}
                    />
                </View>
            </View>
        );
    }
}