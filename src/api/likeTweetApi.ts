import { useAuthLogin } from '@/stores/authLogin';
import { api } from '@/utils/api';
export const checkLikeStatus = async (
  tweetId: number
): Promise<{ isLiked: boolean }> => {
  const response = await api.get(`/likeStatusTweet/${tweetId}`);
  return response.data;
};

export const likeTweet = async (tweetId: number) => {
  const response = await api.post(`/likeStatusTweet/${tweetId} `);
  return response.data;
};

export const unlikeTweet = async (tweetId: number) => {
  const response = await api.delete(`/likeStatusTweet/${tweetId}`);
  return response.data;
};
