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
import WinnerView from './views/WinnerView.js';

import FavouriteController from './Controllers/FavouriteController.js';
import SelectController from './Controllers/SelectController.js';
import RandomizerController from './Controllers/RandomizerController.js';

const Stack = createStackNavigator();

export default class App extends React.Component{

	state = {
		favouriteController: new FavouriteController(),
		selectController: new SelectController(),
		randomizerContoller: new RandomizerController(),
	}

	render(){
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name = "Home" component={HomeView} initialParams={{state: this.state}}/>
					<Stack.Screen name = "Favourite" component={FavouriteView} initialParams={{state: this.state}}/>
					<Stack.Screen name = "Location" component={LocationView} initialParams={{state: this.state}}/>
					<Stack.Screen name = "Select" component= {SelectView} initialParams={{state: this.state}}/>
					<Stack.Screen name = "Randomizer" component={RandomizeView} initialParams={{state: this.state}}/>
					<Stack.Screen name = "Winner" component={WinnerView} initialParams={{state: this.state}}/>
					<Stack.Screen name = "Restaurant" component={RestaurantView} initialParams={{state: this.state}}/>
				</Stack.Navigator>
			</NavigationContainer>	
		)
	}
}
