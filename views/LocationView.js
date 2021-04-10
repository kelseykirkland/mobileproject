//Default imports
import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles.js'

export default class LocationView extends React.Component{
    state = {  
        longitude: null,
        latitude: null,
        location: null,
        radius: "default",
    };
    
    constructor(props) {
        super(props);
    }

    getCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
          position => { 
            const longitude = JSON.stringify(position.coords.longitude);
            const latitude = JSON.stringify(position.coords.latitude);
            const location = latitude+','+longitude;
            this.setState({ 
              longitude: longitude,
              latitude: latitude,
              location: location});
          },
          error => Alert.alert(error.message),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };

    handleRadius = (text) => {
        this.setState({radius: text})
        
    }

    checkCoordinates() {
        if(this.state.location == null) {
            return "Finding Your Location.../nPlease wait until we have your coordinates.";
        }
        else {
            return "";
        }
    }

   
    
    render() {
        return (
            <View style={styles.locationContainer}>
                <Text style={styles.smallText}>{this.checkCoordinates}</Text> 
                <Text style={styles.smallTitle} onPress={this.getCoordinates()}> Location: </Text>
                <Text>{this.state.location}</Text>
                <Text style={styles.distanceText}>Enter Distance (km)</Text>
                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "5 Km Distance"
                placeholderTextColor = "#7a42f4"
                autoCapitalize = "none"
                onChangeText = {this.handleRadius}
                />
                <TouchableOpacity style = {styles.purpleButton}
                   onPress={() => { this.props.route.params.state.selectController.getRestaurantList(this.state.location, this.state.radius); this.props.navigation.navigate("Select") } }>
                   <Text style = {styles.buttonText}> Get Restaurants </Text>
                </TouchableOpacity>
            </View>
        );
    }
}