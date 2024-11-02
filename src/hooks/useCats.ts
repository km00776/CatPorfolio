import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {fetchCats, fetchFavouritedCats, postCat} from '../api/catApi';

export interface CatUploadResponse {
  id: string;
  url: string;
  // Other fields as needed
}

const useCats = () => {
  const queryClient = useQueryClient();

  const catsQuery = useQuery({queryKey: ['cats'], queryFn: fetchCats});

  const favouritedCatsQuery = useQuery({
    queryKey: ['favouritedCats'],
    queryFn: fetchFavouritedCats,
  });

  // const addCatMutation = useMutation<CatUploadResponse, Error, string>(
  //   postCat,
  //   {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries({ queryKey: ["cats"] });
  //     },
  //     onError: (error: any) => {
  //       console.error("Error uploading cat image:", error.message);
  //     },
  //   }
  // );

  return {
    cats: catsQuery.data,
    isLoadingCats: catsQuery.isLoading,
    isErrorCats: catsQuery.isError,
    refetchCats: catsQuery.refetch,

    favouritedCats: favouritedCatsQuery.data,
    isLoadingFavouritedCats: favouritedCatsQuery.data,
    isErrorFavouritedCats: favouritedCatsQuery.data,
    refetchFavouritedCats: catsQuery.refetch,
  };
};

export default useCats;
