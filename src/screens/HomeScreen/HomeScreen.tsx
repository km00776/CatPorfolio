/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList, Text} from 'react-native';

import useCats from '../../hooks/useCats';
import CatCard from '../../components/CatCard/CatCard';
import {CatType} from '../../types/catTypes';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const HomeScreen = () => {
  const {cats, isLoadingCats, isErrorCats} = useCats();
  if (isLoadingCats) {
    return <LoadingSpinner />;
  }
  if (isErrorCats) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Something went wrong... Please try again later!</Text>
      </View>
    );
  }

  if (cats?.length === 0) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>You currently have uploaded no cat photos</Text>
      </View>
    );
  }

  const renderCatItem = ({item}: {item: CatType}) => {
    return (
      <View className="w-full">
        <CatCard imageUrl={item.url} imageId={item.id} />
      </View>
    );
  };
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <FlatList
        data={cats}
        keyExtractor={cat => cat.id.toString()}
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

export default HomeScreen;
