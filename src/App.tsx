import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
// import "./g"
import React from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
