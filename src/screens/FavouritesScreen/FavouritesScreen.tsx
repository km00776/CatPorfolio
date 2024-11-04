/* eslint-disable react-native/no-inline-styles */
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import React from 'react';
import CatCard from '../../components/CatCard/CatCard';
import {FavouritedCatType} from '../../types/catTypes';
import useFavouritedCats from '../../hooks/useFavouritedCats';

const FavouritesScreen = () => {
  const {favouritedCats, isLoadingFavouritedCats, isErrorFavouritedCats} =
    useFavouritedCats();

  const renderCatItem = ({item}: {item: FavouritedCatType}) => {
    return <CatCard imageUrl={item.image.url} imageId={item.image_id} />;
  };

  if (isLoadingFavouritedCats) {
    return <ActivityIndicator />;
  }
  if (isErrorFavouritedCats) {
    return <Text>Something went wrong</Text>;
  }

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <FlatList
        data={favouritedCats}
        keyExtractor={favouritedCat => favouritedCat.id.toString()}
        renderItem={renderCatItem}
        className="flex-1 h-full my-5"
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          gap: 14,
        }}
      />
    </View>
  );
};

export default FavouritesScreen;
