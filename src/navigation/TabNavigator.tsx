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
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import Colors from '../constants/color';

const Tab = createBottomTabNavigator();

const tabBarIcon =
  (route: any) =>
  ({focused}: any) => {
    let iconName = '';

    if (route.name === HOME_SCREEN) {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === FAVOURITES_SCREEN) {
      iconName = focused ? 'heart' : 'heart-outline';
    } else if (route.name === UPLOAD_SCREEN) {
      iconName = focused ? 'cloud-upload' : 'cloud-upload-outline';
    }

    return <Icon name={iconName} size={20} color={Colors.white} />;
  };

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: tabBarIcon(route),
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'white',
      tabBarLabelStyle: {
        fontSize: 12,
        paddingBottom: 3,
      },
      tabBarStyle: {
        backgroundColor: Colors.darkOrange,
      },
      headerStyle: {
        backgroundColor: Colors.darkOrange,
      },
      headerTintColor: Colors.white,
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
