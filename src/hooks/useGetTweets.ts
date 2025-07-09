import { useAuthLogin } from '@/stores/authLogin';
import { Tweet } from '@/types/tweet';
import { api } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';

interface FeedsApiResponse {
  message: string;
  data: Tweet[];
}
export const useGetTweets = () => {
  const { token } = useAuthLogin();
  return useQuery<Tweet[], Error>({
    queryKey: ['feeds'],
    queryFn: async (): Promise<Tweet[]> => {
      try {
        const res = await api.get<FeedsApiResponse>('/getFeeds', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return res.data.data;
      } catch (error) {
        throw error;
      }
    },
    enabled: !!token,
  });
};
