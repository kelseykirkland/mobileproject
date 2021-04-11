import React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles.js'
//import { favouriteController } from '../Controllers/FavouriteController.js';

export default class RestaurantListView extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View style={styles.favListItem}>
                <Text style={styles.listText}> {this.props.name} </Text>
                <Text>
                <TouchableOpacity style = {styles.letterButton}
                            onPress={() => this.props.navFunc("Restaurant", { name: this.props.name, restaurant: this.props.restaurant })}>
                            <Text style = {styles.smallButtonText}> Info </Text>
                        </TouchableOpacity>
                <TouchableOpacity style = {styles.letterButton}
                        onPress={() => this.props.favouriteController.removeFromFavourites(this.props.restaurant)} >
                        <Text style = {styles.smallButtonText}> Remove </Text>
                </TouchableOpacity>
                </Text>
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

//<View style={{Height: 50, borderColor: 'Black', borderBottomWidth: 1, borderTopWidth: 1, borderLeftWidth: 1, borderRightWidth: 1}}>