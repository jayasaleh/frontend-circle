import { useAuthLogin } from '@/stores/authLogin';
import { api } from '@/utils/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface PostTweetOption {
  onSuccess: () => void;
  onError: (error: Error) => void;
}
export const usePostTweet = (options?: PostTweetOption) => {
  const token = useAuthLogin((state) => state.token);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newTweet: FormData) => {
      const response = await api.post('/tweet', newTweet, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['feeds'] });
      options?.onSuccess?.();
    },
    onError: (error: Error) => {
      options?.onError?.(error);
    },
  });
};
