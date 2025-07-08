import { api } from '@/utils/api';
interface UpdatePayload {
  tweetId: number;
  formData: FormData;
}
export const updateTweetApi = async ({ tweetId, formData }: UpdatePayload) => {
  const response = await api.patch(`update-tweet/${tweetId}`, formData);
  return response.data;
};
