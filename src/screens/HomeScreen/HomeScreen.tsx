/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
// import useCats from '../hooks/useCats';
// import CatCard from '../components/CatCard';
// import {CatType} from '../types/catTypes';
import useCats from '../../hooks/useCats';
import CatCard from '../../components/CatCard/CatCard';
import {CatType} from '../../types/catTypes';

const HomeScreen = () => {
  const {cats, isLoadingCats, isErrorCats} = useCats();

  if (isLoadingCats) {
    return <ActivityIndicator />;
  }
  if (isErrorCats) {
    return <Text>Something went wrong</Text>;
  }

  const renderCatItem = ({item}: {item: CatType}) => {
    return <CatCard imageUrl={item.url} />;
  };

  return (
    <View className="flex-1 justify-center items-center">
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
