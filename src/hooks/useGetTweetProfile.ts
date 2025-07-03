import { fetchProfileTweets } from '@/api/fetchProfileTweets';
import { useQuery } from '@tanstack/react-query';

export const useGetTweetProfile = (userId: number) => {
  return useQuery({
    queryKey: ['tweet-profile', userId],
    queryFn: async () => fetchProfileTweets(userId),
    enabled: !!userId && userId > 0,
    staleTime: 1000 * 60 * 5,
  });
};
