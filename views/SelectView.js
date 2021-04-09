//Default imports
import React from 'react';
import { Button, Text, View, FlatList } from 'react-native';
import PickRestaurantListView from './PickRestaurantListView.js';

export default class SelectView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Select List:\n");
        console.log(this.props.route.params.state.selectController.getSelectList());
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>New Select Page</Text> 
                <Button title= "Confirm" onPress={() => this.props.navigation.navigate("Randomizer")} />
                <View>
                    <FlatList 
                        data={this.props.route.params.state.selectController.getSelectList()}
                        renderItem={({item}) => (
                            <PickRestaurantListView name={item.name} navFunc={this.props.navigation.navigate} restaurant={item} favouriteController={this.props.route.params.state.favouriteController} selectController={this.props.route.params.state.selectController}/>
                        )}
                    />
                </View>
            </View>
        );
    }
}