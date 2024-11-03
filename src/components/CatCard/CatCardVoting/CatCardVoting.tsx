import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import useCatVotes from '../../../hooks/useCatVotes';
interface CatCardVotingProps {
  imageId: string;
}

const CatCardVoting = ({imageId}: CatCardVotingProps) => {
  const {postCatVoteMutation} = useCatVotes();

  const handleUpVote = () => {
    const data = {imageId, value: 1};
    postCatVoteMutation.mutate(data);
  };

  const handleDownVote = () => {
    const data = {imageId, value: -1};
    postCatVoteMutation.mutate(data);
  };

  return (
    <View className="flex-column items-center w-full">
      <View className="flex-row justify-end w-full mr-10">
        <Icon
          className="mr-2"
          name="thumbs-up-outline"
          size={22}
          color="green"
          accessible={true}
          onPress={handleDownVote}
          accessibilityLabel="Click this to upvote image"
        />
        <Icon
          name="thumbs-down-outline"
          size={22}
          color="red"
          accessible={true}
          onPress={handleUpVote}
          accessibilityLabel="Click this to downvote image"
        />
      </View>

      {/* Center the Votes text both horizontally and vertically */}
      <View className="w-full  py-2 items-center justify-center">
        <Text>Votes:</Text>
      </View>
    </View>
  );
};

export default CatCardVoting;
