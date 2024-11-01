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
import Icon from 'react-native-vector-icons/AntDesign'; // Import Ant Design icons

const Tab = createBottomTabNavigator();

const tabBarIcon =
  (route: any) =>
  ({focused}: any) => {
    let iconName = '';

    // Set icon based on the route name
    if (route.name === HOME_SCREEN) {
      iconName = focused ? 'home' : 'home';
    } else if (route.name === FAVOURITES_SCREEN) {
      iconName = focused ? 'heart' : 'heart';
    } else if (route.name === UPLOAD_SCREEN) {
      iconName = focused ? 'camera' : 'camera';
    }

    // Return the icon component
    return <Icon name={iconName} size={20} color={'red'} />;
  };

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: tabBarIcon(route), // Call the tabBarIcon function
      tabBarActiveTintColor: 'tomato', // Active icon color
      tabBarInactiveTintColor: 'gray', // Inactive icon color
    })}>
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
