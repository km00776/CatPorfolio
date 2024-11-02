import React from 'react';
import {ImageBackground, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons

interface CatCardProps {
  imageUrl: string;
}

const CatCard = ({imageUrl}: CatCardProps) => {
  return (
    <View className="w-4/5 h-96 bg-white rounded-3xl border border-gray-300 items-center">
      <ImageBackground
        source={{uri: imageUrl}}
        resizeMode="cover"
        className="w-10/12	h-4/6	 rounded-3xl border border-gray-300 my-4 overflow-hidden">
        <View className="flex-row	justify-end w-full">
          <Icon
            className="mr-4  my-4"
            name="heart-outline"
            size={24}
            color="white"
            accessible={true}
            accessibilityLabel="Click this to favourite image"
          />
        </View>
      </ImageBackground>
      <View className="flex-row	justify-end w-full mr-10">
        <Icon
          className="mr-2"
          name="thumbs-up-outline"
          size={22}
          color="green"
          accessible={true}
          accessibilityLabel="Click this to upvote image"
        />
        <Icon
          name="thumbs-down-outline"
          size={22}
          color="red"
          accessible={true}
          accessibilityLabel="Click this to downvote image"
        />
      </View>
    </View>
  );
};

export default CatCard;
