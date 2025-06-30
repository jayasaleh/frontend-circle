import { TweetProfile } from '@/types/tweetProfile';
import { api } from '@/utils/api';

interface TweetProfileApiResponse {
  data: TweetProfile[];
}
export const fetchProfileTweets = async (
  userId: number
): Promise<TweetProfileApiResponse> => {
  try {
    const response = await api.get(`/users/${userId}/profile-tweet`);
    return response.data.data;
  } catch (error) {
    console.error(`Gagal mengambil tweet untuk profil user ${userId}:`, error);
    throw error;
  }
};
