//Default imports
import React, { Component }  from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import RestaurantListView from './RestaurantListView.js';

export default class FavouriteView extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        refresh: true
    }

    refresh() {
        this.setState(({ refresh }) => ({ refresh: !refresh }));
    }

    render() {
        console.log("Favourite List: \n");
        console.log(this.props.route.params.state.favouriteController.getFavouriteList());
        return(
            <View>
                <Text>Favourite Page</Text> 
                <View>
                    <FlatList 
                        data={this.props.route.params.state.favouriteController.getFavouriteList()}
                        extraData={this.state.refresh}
                        renderItem={({item}) => (
                            <RestaurantListView name={item.name} navFunc={this.props.navigation.navigate} restaurant={item} favouriteController={this.props.route.params.state.favouriteController} refresh={this.refresh.bind(this)}/>
                        )}
                    />
                </View>
            </View>
        );
    }
}