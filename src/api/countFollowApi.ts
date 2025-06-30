import { api } from '@/utils/api';

interface FollowCountsResponse {
  followers: number;
  following: number;
}
export const fetchFollowCounts = async (
  userId: number
): Promise<FollowCountsResponse> => {
  try {
    const response = await api.get(`/users/${userId}/follow-counts`);
    return response.data.data;
  } catch (error) {
    return { followers: 0, following: 0 };
  }
};
