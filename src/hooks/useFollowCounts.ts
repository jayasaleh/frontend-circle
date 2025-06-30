import { fetchFollowCounts } from '@/api/countFollowApi';
import { useQuery } from '@tanstack/react-query';

export const useGetFollowCounts = (userId: number) => {
  return useQuery({
    queryKey: [`followCount`, userId],
    queryFn: async () => fetchFollowCounts(userId),
    enabled: !!userId && userId > 0,
    staleTime: 1000 * 60 * 5,
  });
};
