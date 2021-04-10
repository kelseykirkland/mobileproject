//Default imports
import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import PickRestaurantListView from './PickRestaurantListView.js';

import { styles } from './styles.js'

export default class SelectView extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        refresh: true,
    }

    refresh() {
        console.log(refresh);
        
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.instructions}>We found these restaurants nearby.</Text> 
                <Text style={styles.instructions}>Swipe right on the ones you like!</Text> 
                <TouchableOpacity style = {styles.blueButton}
                   onPress={() => this.props.navigation.navigate("Randomizer")}>
                   <Text style = {styles.buttonText}> Done! </Text>
                </TouchableOpacity>
                <View style={styles.container}>
                    <FlatList 
                        data={this.props.route.params.state.selectController.selectList}
                        extraData={this.state.refresh}
                        renderItem={({item}) => (
                            <PickRestaurantListView name={item.name} navFunc={this.props.navigation.navigate} restaurant={item} parentState={this.props.route.params.state} refresh={this.refresh.bind(this)}/>
                        )}
                    />
                </View>
            </View>
        );
    }
}

