import React, {useMemo} from 'react';
import {ImageBackground, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import {FavouritedCatType} from '../../types/catTypes';
import CatCardVoting from './CatCardVoting/CatCardVoting';
import useFavouritedCats from '../../hooks/useFavouritedCats';

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

  // const {postCatVoteMutation, votes} = useCatVotes();

  // console.log('votes', votes);

  // const handleUpVote = () => {
  //   const data = {imageId, value: 1};
  //   postCatVoteMutation.mutate(data);
  // };

  // const handleDownVote = () => {
  //   const data = {imageId, value: -1};
  //   postCatVoteMutation.mutate(data);
  // };

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
    <View
      style={{
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4, // Android shadow
      }}
      className="w-4/5 h-96 bg-white rounded-3xl border border-gray-300 items-center">
      <ImageBackground
        source={{uri: imageUrl}}
        resizeMode="cover"
        className="w-10/12	h-4/6	 rounded-3xl border border-gray-300 my-4 overflow-hidden">
        <View className="flex-row	justify-end w-full">
          <Icon
            className="mr-4  my-4"
            name={favouritedId ? 'heart' : 'heart-outline'}
            size={24}
            color="pink"
            onPress={onFavouritePress}
            accessible={true}
            accessibilityLabel="Click this to favourite image"
          />
        </View>
      </ImageBackground>

      <CatCardVoting imageId={imageId} />
    </View>
  );
};

export default CatCard;
