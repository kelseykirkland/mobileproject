//Default imports
import React from 'react';
import { Text, View } from 'react-native';

export default class RestaurantView extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>{this.props.route.params.name}</Text> 
                <Text>Dog</Text>
            </View>
        );
    }
}