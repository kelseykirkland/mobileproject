import React from 'react';
import { Button, Text, View } from 'react-native';
import PropTypes from 'prop-types';

//import { favouriteController } from '../Controllers/FavouriteController.js';

export default class RestaurantListView extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View style={{Height: 50, borderColor: 'Black', borderBottomWidth: 1, borderTopWidth: 1, borderLeftWidth: 1, borderRightWidth: 1}}>
                <Text> {this.props.name} </Text>
                <Button title= "Info" onPress={() => this.props.navFunc("Restaurant", { name: this.props.name, restaurant: this.props.restaurant })} />
                <Button title= "Remove" onPress={() => this.props.favouriteController.removeFromFavourites(this.props.restaurant)} />
            </View>
        );
    }
}

RestaurantListView.propTypes = {
    name: PropTypes.string.isRequired, 
    navFunc: PropTypes.func.isRequired, 
    restaurant: PropTypes.object.isRequired, 
    favouriteController: PropTypes.object.isRequired, 
};
