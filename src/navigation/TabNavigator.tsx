import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {
  HOME_SCREEN,
  FAVOURITES_SCREEN,
  UPLOAD_SCREEN,
} from '../constants/screenNames';
import FavouritesScreen from '../screens/FavouritesScreen/FavouritesScreen';
import UploadScreen from '../screens/UploadScreen/UploadScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={HOME_SCREEN}
      component={HomeScreen}
      options={{tabBarLabel: 'Home', title: 'Home'}}
    />
    <Tab.Screen
      name={FAVOURITES_SCREEN}
      component={FavouritesScreen}
      options={{tabBarLabel: 'Favourites', title: 'Favourites'}}
    />
    <Tab.Screen
      name={UPLOAD_SCREEN}
      component={UploadScreen}
      options={{tabBarLabel: 'Upload', title: 'Upload'}}
    />
  </Tab.Navigator>
);

export default TabNavigator;
