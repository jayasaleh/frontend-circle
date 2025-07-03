import { TweetCommentDTO } from '@/schema/schemaTweetComment';
import { useAuthLogin } from '@/stores/authLogin';
import { TweetDetailWithComments } from '@/types/tweetDetailWithComments';
import { api } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';

export const useGetDetailTweet = (tweetId: number) => {
  const { token } = useAuthLogin();
  return useQuery<TweetDetailWithComments>({
    queryKey: ['detail-tweet', tweetId],
    queryFn: async ({ queryKey }) => {
      const [_key, tweetId] = queryKey;
      if (typeof tweetId !== 'number') {
        throw new Error('Tweet ID tidak valid untuk fetch data');
      }
      const res = await api.get(`/tweet/${tweetId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.tweetDetails;
    },
    enabled: !!token,
  });
};
