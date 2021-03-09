//Default imports
import React from 'react';
import { Button, Text, View } from 'react-native';

export default class RandomizeView extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>New Randomize Page</Text> 
                <Button title= "Home" onPress={() => this.props.navigation.navigate("Home")} />
                <Button title= "Spin Again" />
                <Button title= "Add to favourites" />
            </View>
        );
    }
}