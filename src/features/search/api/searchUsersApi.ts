import { UserWithFollowStatus } from '@/types/user';
import { api } from '@/utils/api';

interface UserSearchApiResponse {
  data: UserWithFollowStatus[];
}
export const searchUsersApi = async (
  query: string
): Promise<UserWithFollowStatus[]> => {
  try {
    if (!query) return [];
    const response = await api.get<UserSearchApiResponse>(
      `/users/search?q=${query}`
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
