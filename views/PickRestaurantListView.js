import React from 'react';
import { Button, Text, View, Animated, PanResponder, Dimensions, TouchableOpacity, Alert } from 'react-native';
import PropTypes from 'prop-types'

import { styles } from './styles.js'

export default class PickRestaurantListView extends React.Component {
    screenWidth = Dimensions.get('window').width;
    leftSubmitPoint = -0.3 * this.screenWidth;
    rightSubmitPoint = 0.3 * this.screenWidth;

    constructor(props) {
        super(props);
        //prob should be this.props.pos? maybe
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
                this.props.parentState.randomizerController.addRestaurant(this.props.restaurant);
                this.props.parentState.selectController.removeFromSelect(this.props.restaurant);
                this.props.refresh();
              } else if(this.pos.x._value < this.leftSubmitPoint) {
                console.log("DO NOT LIKE");
                Animated.spring(this.pos, {toValue: { x: (-1 * this.screenWidth), y: 0 }, useNativeDriver: false}).start();
                this.props.parentState.selectController.removeFromSelect(this.props.restaurant);
                this.props.refresh();
              } else {
                console.log("MOVE MORE");
                Animated.spring(this.pos, {toValue: { x: 0, y: 0 }, useNativeDriver: false}).start();
              }
            }
        });
    }

    favouriteAdded = (name) => {
        console.log("Alert");
        Alert.alert("Added "+ name + " to Favourites!");
    }

//<Button title= "Yes" onPress={() => randomizerController.addRestaurant(this.props.restaurant)} />
    render () {
        return (
            <Animated.View style={{transform: [{ translateX: this.pos.x }, { translateY: this.pos.y }] }} {...this.panResponder.panHandlers}>
                <View style={styles.listItem}>
                    <Text style={styles.listText}> {this.props.name} </Text>
                    <Text style={styles.smallButtonContainer}>
                        <TouchableOpacity style = {styles.letterButton}
                            onPress={() => { this.props.parentState.favouriteController.addToFavouriteList(this.props.restaurant) ; this.favouriteAdded(this.props.name) }}>
                            <Text style = {styles.smallButtonText}> Fav </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.letterButton}
                            onPress={() => this.props.navFunc("Restaurant", { name: this.props.name, restaurant: this.props.restaurant })}>
                            <Text style = {styles.smallButtonText}> Info </Text>
                        </TouchableOpacity>
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
    parentState: PropTypes.object.isRequired,
    refresh: PropTypes.func.isRequired
};

// THIS VIEW IS FOR SELECT PAGE. RESTAURANT TO BE PICKED FOR RANDOMIZE LIST