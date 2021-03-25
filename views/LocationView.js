//Default imports
import React from 'react';
import { Button, Text, View } from 'react-native';

import { locationController } from './../Controllers/LocationController.js';
import { selectController } from './../Controllers/SelectController.js';

export default class LocationView extends React.Component{
    state = {  
        longitude: null,
        latitude: null,
        location: null
    };
    
    constructor(props) {
        super(props);
    }

    // this.setState({
    //     location: locationController.getCoordinates();
    // })

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

    render() {
        return (
            <View style={{flex: 1, alignItems: "center"}}>
                <Text>New Location Page</Text> 
                <Button title="Get Location!"
                   onPress={() => this.getCoordinates()}/>
                <Text> Location:  {this.state.location} </Text>
                <Button title="Try"
                   onPress={() => this.props.route.params.state.selectController.getRestaurantList(this.state.location)}/>
                <Button title= "Confirm" onPress={() => this.props.navigation.navigate("Select")} />
            </View>
        );
    }
}