import React from 'react';
import { Button, Text, View } from 'react-native';
import PropTypes from 'prop-types'

import { randomizerController } from './../Controllers/RandomizerController.js';

export default class PickRestaurantListView extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View style={{Height: 50, borderColor: 'Black', borderBottomWidth: 1, borderTopWidth: 1, borderLeftWidth: 1, borderRightWidth: 1}}>
                <Text> {this.props.name} </Text>
                <Button title= "Yes" onPress={() => randomizerController.addRestaurant(this.props.name)} />
                <Button title= "Info" onPress={() => this.props.navFunc("Restaurant", { name: this.props.name })} />
            </View>
        );
    }
}

PickRestaurantListView.propTypes = {name: PropTypes.string.isRequired, navFunc: PropTypes.func.isRequired};