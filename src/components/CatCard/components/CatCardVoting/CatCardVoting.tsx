import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import useCatVotes from '../../../../hooks/useCatVotes';
interface CatCardVotingProps {
  imageId: string;
}

const CatCardVoting = ({imageId}: CatCardVotingProps) => {
  const {postCatVoteMutation} = useCatVotes();

  const handleUpVotePress = () => {
    const data = {imageId, value: 1};
    postCatVoteMutation.mutate(data);
  };

  const handleDownVotePress = () => {
    const data = {imageId, value: -1};
    postCatVoteMutation.mutate(data);
  };

  return (
    <>
      <TouchableOpacity
        onPress={handleUpVotePress}
        className="rounded-full bg-orange-100 p-2 mr-3 my-3">
        <Icon
          name="thumbs-up-outline"
          size={20}
          color="#C05621"
          accessible={true}
          accessibilityLabel="Click this to upvote image"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleDownVotePress}
        className="rounded-full bg-orange-100 p-2 mr-3 my-3">
        <Icon
          name="thumbs-down-outline"
          size={20}
          color="#C05621"
          accessible={true}
          accessibilityLabel="Click this to upvote image"
        />
      </TouchableOpacity>
    </>
  );
};

export default CatCardVoting;
