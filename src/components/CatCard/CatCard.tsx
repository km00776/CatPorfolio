import React, {useMemo} from 'react';
import {ImageBackground, TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import {FavouritedCatType} from '../../types/catTypes';
import CatCardVoting from './components/CatCardVoting/CatCardVoting';
import useFavouritedCats from '../../hooks/useFavouritedCats';
import Colors from '../../constants/color';
import useCatVotes from '../../hooks/useCatVotes';

interface CatCardProps {
  imageUrl: string;
  imageId: string;
}

const CatCard = ({imageUrl, imageId}: CatCardProps) => {
  const {
    postFavouriteCatMutation,
    favouritedCats,
    deleteFavouritedCatMutation,
  } = useFavouritedCats();

  const {votes} = useCatVotes();
  const score = useMemo(() => {
    if (votes) {
      const upVotes = votes.filter(
        vote => vote.image_id === imageId && vote.value === 1,
      ).length;
      const downVotes = votes.filter(
        vote => vote.image_id === imageId && vote.value === -1,
      ).length;

      return upVotes - downVotes;
    }
    return 0;
  }, [votes, imageId]);

  const favouritedId = useMemo(() => {
    if (favouritedCats) {
      const favourite = favouritedCats.find(
        (favCat: FavouritedCatType) => favCat.image_id === imageId,
      );
      return favourite ? favourite.id : null;
    }
  }, [favouritedCats, imageId]);

  const onFavouritePress = () => {
    if (favouritedId) {
      deleteFavouritedCatMutation.mutate(favouritedId);
    } else {
      postFavouriteCatMutation.mutate(imageId);
    }
  };

  return (
    <ImageBackground
      source={{uri: imageUrl}}
      resizeMode="cover"
      className="w-4/5 h-96	 rounded-3xl border border-gray-300 my-4 overflow-hidden">
      <View className="flex-row	justify-end w-full">
        <TouchableOpacity
          onPress={onFavouritePress}
          className="rounded-full bg-orange-100 p-2 mr-3 my-3">
          <Icon
            name={favouritedId ? 'heart' : 'heart-outline'}
            size={20}
            color={Colors.darkOrange}
            accessible={true}
            accessibilityLabel="Click this to favourite image"
          />
        </TouchableOpacity>
        <CatCardVoting imageId={imageId} />
      </View>

      <View className="bg-orange-100 rounded-lg p-2 mt-60	w-2/5 mx-5">
        <Text className="text-orange-400 font-bold">Score: {score}</Text>
      </View>
    </ImageBackground>
  );
};

export default CatCard;
