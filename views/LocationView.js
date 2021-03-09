//Default imports
import React from 'react';
import { Button, Text, View } from 'react-native';

export default class LocationView extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>New Location Page</Text> 
                <Button title= "Confirm" onPress={() => this.props.navigation.navigate("Select")} />
            </View>
        );
    }
}