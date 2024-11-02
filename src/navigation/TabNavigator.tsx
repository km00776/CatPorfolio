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

const Tab = createBottomTabNavigator();

const tabBarIcon =
  (route: any) =>
  ({focused}: any) => {
    let iconName = '';

    // Set icon based on the route name
    if (route.name === HOME_SCREEN) {
      iconName = focused ? 'home' : 'home-outline'; // Filled and outlined versions for home
    } else if (route.name === FAVOURITES_SCREEN) {
      iconName = focused ? 'heart' : 'heart-outline'; // Filled and outlined for heart
    } else if (route.name === UPLOAD_SCREEN) {
      iconName = focused ? 'cloud-upload' : 'cloud-upload-outline'; // Filled and outlined for upload
    }

    // Return the icon component
    return <Icon name={iconName} size={20} color={'red'} />;
  };

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: tabBarIcon(route),
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarLabelStyle: {
        fontSize: 12,
        paddingBottom: 3,
      },
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
