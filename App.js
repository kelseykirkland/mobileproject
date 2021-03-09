//Default imports
import React from 'react';

//Custom imports
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Local view imports
import HomeView from './views/HomeView.js';
import FavouriteView from './views/FavouriteView.js';
import LocationView from './views/LocationView.js';
import SelectView from './views/SelectView.js';
import RandomizeView from './views/RandomizeView.js';
import RestaurantView from './views/RestaurantView.js';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name = "Home" component={HomeView} />
				<Stack.Screen name = "Favourite" component={FavouriteView} />
				<Stack.Screen name = "Location" component={LocationView} />
				<Stack.Screen name = "Select" component= {SelectView} />
				<Stack.Screen name = "Randomizer" component={RandomizeView} />
				<Stack.Screen name = "Restaurant" component={RestaurantView} />
			</Stack.Navigator>
		</NavigationContainer>	
	)
}
