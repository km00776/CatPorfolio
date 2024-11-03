import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {fetchCatVotes, postCatVote} from '../api/catApi';

const useCatVotes = () => {
  const queryClient = useQueryClient();

  const votesQuery = useQuery({
    queryKey: ['votes'],
    queryFn: fetchCatVotes,
  });

  const postCatVoteMutation = useMutation({
    mutationFn: postCatVote,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['votes']});
    },
    onError: (error: any) => {
      console.error('Error voting on image:', error.message);
    },
  });

  return {
    votes: votesQuery.data,
    isLoadingVotes: votesQuery.isLoading,
    isErrorVotes: votesQuery.isError,
    refetchVotes: votesQuery.refetch,
    postCatVoteMutation,
  };
};

export default useCatVotes;
