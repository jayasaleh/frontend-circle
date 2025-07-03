import { TweetProfile } from '@/types/tweetProfile';
import { api } from '@/utils/api';

export const fetchProfileTweets = async (
  userId: number
): Promise<TweetProfile[]> => {
  try {
    const response = await api.get(`/users/${userId}/profile-tweet`);
    return response.data.data;
  } catch (error) {
    console.error(`Gagal mengambil tweet untuk profil user ${userId}:`, error);
    throw error;
  }
};
