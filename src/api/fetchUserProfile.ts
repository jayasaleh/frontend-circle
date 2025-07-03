import { User } from '@/types/user';
import { api } from '@/utils/api';

export const fetchUserProfile = async (userId: number): Promise<User> => {
  try {
    const response = await api.get(`/user/${userId}`);
    return response.data.data;
  } catch (error) {
    console.error(`Gagal mengambil user ${userId}:`, error);
    throw error;
  }
};
