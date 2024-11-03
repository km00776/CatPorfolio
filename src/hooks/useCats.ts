import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {fetchCats, postCatImage} from '../api/catApi';

const useCats = () => {
  const queryClient = useQueryClient();

  const catsQuery = useQuery({
    queryKey: ['cats'],
    queryFn: fetchCats,
  });

  const postCatImageMutation = useMutation({
    mutationFn: postCatImage,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['cats']});
    },
    onError: (error: any) => {
      console.error('Error uploading cat image:', error.message);
    },
  });

  return {
    cats: catsQuery.data,
    isLoadingCats: catsQuery.isLoading,
    isErrorCats: catsQuery.isError,
    refetchCats: catsQuery.refetch,
    postCatImageMutation,
  };
};

export default useCats;
