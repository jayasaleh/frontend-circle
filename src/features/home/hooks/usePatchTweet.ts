import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTweetApi } from '../api/updateTweetApi';
import { Tweet } from '@/types/tweet';
import toast from 'react-hot-toast';

interface UpdateTweetResponse {
  message: string;
  data: Tweet;
}
interface UpdateTweetOptions {
  onSuccess?: () => void;
}
export const usePatchTweet = (options?: UpdateTweetOptions) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTweetApi,
    onSuccess: (data: UpdateTweetResponse) => {
      const updatedTweet = data.data;
      toast.success(data.message || 'Tweet berhasil diperbarui!');
      queryClient.invalidateQueries({ queryKey: ['feeds'] });
      queryClient.invalidateQueries({
        queryKey: ['detail-tweet', updatedTweet.id],
      });
      queryClient.invalidateQueries({
        queryKey: ['tweet-profile', updatedTweet.userId],
      });
      options?.onSuccess?.();
    },
    onError: (error: Error) => {
      toast.error(error.message || 'gagal mengupdate tweet');
    },
  });
};
