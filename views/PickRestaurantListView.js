import React from 'react';
import { Button, Text, View, Animated, PanResponder, Dimensions } from 'react-native';
import PropTypes from 'prop-types'

import { styles } from './styles.js'
import { randomizerController } from './../Controllers/RandomizerController.js';
import { favouriteController } from './../Controllers/FavouriteController.js';

export default class PickRestaurantListView extends React.Component {
    screenWidth = Dimensions.get('window').width;
    leftSubmitPoint = -0.3 * this.screenWidth;
    rightSubmitPoint = 0.3 * this.screenWidth;

    constructor(props) {
        super(props);
        this.pos = new Animated.ValueXY();
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event(
                [
                    null,
                    { dx: this.pos.x, dy: this.pos.y },
                ],
                {useNativeDriver: false}
            ),
            onPanResponderRelease: () => {
              this.pos.flattenOffset();
              console.log("Current X Value: " + this.pos.x._value);
              console.log("rightSubmitPoint: " + this.rightSubmitPoint);
              console.log("leftSubmitPoint: " + this.leftSubmitPoint);
              if(this.pos.x._value > this.rightSubmitPoint)  {
                console.log("LIKE");
                Animated.spring(this.pos, {toValue: { x: (1 * this.screenWidth), y: 0 }, useNativeDriver: false}).start();
                randomizerController.addRestaurant(this.props.restaurant);
              } else if(this.pos.x._value < this.leftSubmitPoint) {
                console.log("DO NOT LIKE");
                Animated.spring(this.pos, {toValue: { x: (-1 * this.screenWidth), y: 0 }, useNativeDriver: false}).start();
              } else {
                console.log("MOVE MORE");
                Animated.spring(this.pos, {toValue: { x: 0, y: 0 }, useNativeDriver: false}).start();
              }
            }
        });
    }

//<Button title= "Yes" onPress={() => randomizerController.addRestaurant(this.props.restaurant)} />
    render () {
        return (
            <Animated.View style={{transform: [{ translateX: this.pos.x }, { translateY: this.pos.y }] }} {...this.panResponder.panHandlers}>
                <View style={styles.listItem}>
                    <Text style={styles.listText}> {this.props.name} </Text>
                    <Text>
                    <Button title= "Info" onPress={() => this.props.navFunc("Restaurant", { name: this.props.name, restaurant: this.props.restaurant })} />
                    <Button title= "Fav" onPress={() => this.props.favouriteController.addToFavouriteList(this.props.restaurant)} />
                    </Text>
                </View>
            </Animated.View>
        );
    }
}

PickRestaurantListView.propTypes = {
    name: PropTypes.string.isRequired, 
    navFunc: PropTypes.func.isRequired, 
    restaurant: PropTypes.object.isRequired,
    favouriteController: PropTypes.object.isRequired
};

// THIS VIEW IS FOR SELECT PAGE. RESTAURANT TO BE PICKED FOR RANDOMIZE LIST