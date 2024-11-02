import {View} from 'react-native';
import React from 'react';
import CatCard from '../../components/CatCard/CatCard';

const FavouritesScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-blue-300">
      <CatCard />
    </View>
  );
};

export default FavouritesScreen;
