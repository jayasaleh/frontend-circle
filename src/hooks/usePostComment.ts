import { useAuthLogin } from '@/stores/authLogin';
import { api } from '@/utils/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
interface CommentProps {
  tweetId: number;
  content: string;
}

interface PostCommentOption {
  onSuccess: () => void;
}
export const usePostComment = (tweetId: number, option?: PostCommentOption) => {
  const { token } = useAuthLogin();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CommentProps) => {
      const res = await api.post(`/comment/${tweetId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['detail-tweet', tweetId] });
     
      option?.onSuccess?.();
    },
    onError: (error: Error) => {
      toast.error(error.message || 'gagal reply');
    },
  });
};
