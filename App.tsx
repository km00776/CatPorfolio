/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import {verifyInstallation} from 'nativewind';
import {verifyInstallation} from 'nativewind';
import './global.css';

import React from 'react';

import {View} from 'react-native';

function App(): React.JSX.Element {
  verifyInstallation();
  return (
    <View className="flex-1 justify-center items-center bg-red-300">
      <View className="w-10 h-10 bg-red-500" />
    </View>
  );
}

export default App;
