import { useQuery } from '@tanstack/react-query';
import { searchUsersApi } from '../api/searchUsersApi';

export const useSearchUsers = (searchTerm: string) => {
  return useQuery({
    queryKey: ['searchTerm', searchTerm],
    queryFn: () => searchUsersApi(searchTerm),
    enabled: !!searchTerm,
  });
};
