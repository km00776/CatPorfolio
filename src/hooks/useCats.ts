import {useQuery} from '@tanstack/react-query';
import {fetchCats} from '../api/catApi';

const useCats = () => {
  // const {data, isLoading, isError, error, refetch} = useQuery(
  //   ['cats'],
  //   fetchCats,
  //   {
  //     staleTime: 1000 * 60 * 5, // Keep data fresh for 5 minutes
  //     cacheTime: 1000 * 60 * 30, // Cache data for 30 minutes
  //     retry: 1, // Retry failed requests once
  //     refetchOnWindowFocus: true, // Refetch on app focus
  //   },
  // );
  // return {
  //   cats: data,
  //   loading: isLoading,
  //   error: isError ? error : null,
  //   refetch,
  // };
};

export default useCats;
