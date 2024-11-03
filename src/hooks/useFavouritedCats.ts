import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {
  fetchFavouritedCats,
  postFavouriteCat,
  deleteFavouritedCat,
} from '../api/catApi';

const useFavouritedCats = () => {
  const queryClient = useQueryClient();

  const favouritedCatsQuery = useQuery({
    queryKey: ['favouritedCats'],
    queryFn: fetchFavouritedCats,
  });

  const postFavouriteCatMutation = useMutation({
    mutationFn: postFavouriteCat,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['favouritedCats']});
    },
    onError: (error: any) => {
      console.error('Error favoriting image:', error.message);
    },
  });

  const deleteFavouritedCatMutation = useMutation({
    mutationFn: deleteFavouritedCat,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['favouritedCats']});
    },
    onError: (error: any) => {
      console.error('Error unfavoriting image:', error.message);
    },
  });

  return {
    favouritedCats: favouritedCatsQuery.data,
    isLoadingFavouritedCats: favouritedCatsQuery.isLoading,
    isErrorFavouritedCats: favouritedCatsQuery.isError,
    refetchFavouritedCats: favouritedCatsQuery.refetch,
    postFavouriteCatMutation,
    deleteFavouritedCatMutation,
  };
};

export default useFavouritedCats;
