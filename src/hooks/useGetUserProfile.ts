import { fetchUserProfile } from '@/api/fetchUserProfile';
import { useQuery } from '@tanstack/react-query';

export const useGetUserProfile = (userId: number) => {
  return useQuery({
    queryKey: ['user-profile', userId],
    queryFn: async () => fetchUserProfile(userId),
    enabled: !!userId && userId > 0,
    staleTime: 1000 * 60 * 5,
  });
};
