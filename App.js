//Default imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Custom imports
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Local view imports
import { homeView } from './views/HomeView.js';
import { favView } from './views/FavouriteView.js';
import { locationView } from './views/LocationView.js';
import { selectView } from './views/SelectView.js';
import { randomizeView } from './views/RandomizeView.js';
import { restaurantView } from './views/RestaurantView.js';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name = "Home" component={homeView.getView} />
				<Stack.Screen name = "Favourite" component={favView.getView} />
				<Stack.Screen name = "Location" component={locationView.getView} />
				<Stack.Screen name = "Select" component={selectView.getView} />
				<Stack.Screen name = "Randomizer" component={randomizeView.getView} />
				<Stack.Screen name = "Restaurant" component={restaurantView.getView} />
			</Stack.Navigator>
		</NavigationContainer>	
	)
}
