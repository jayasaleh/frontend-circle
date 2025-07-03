// file: src/hooks/useLikeButton.ts

import { checkLikeStatus, likeTweet, unlikeTweet } from '@/api/likeTweetApi';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import toast from 'react-hot-toast';

export const useLikeButton = (tweetId: number) => {
  const queryClient = useQueryClient();

  // 1. Gunakan useQuery untuk mendapatkan status awal
  const { data: likeStatus, isLoading: isLoadingStatus } = useQuery({
    queryKey: ['likeStatus', tweetId],
    queryFn: () => checkLikeStatus(tweetId),
    enabled: !!tweetId,
  });

  // Ambil nilai boolean dari hasil query
  const isLiked = likeStatus?.isLiked || false;

  // 2. Siapkan mutasi untuk LIKE
  const { mutate: doLike, isPending: isLiking } = useMutation({
    mutationFn: likeTweet,
    onSuccess: () => {
      // Setelah sukses, refresh SEMUA data yang mungkin terpengaruh
      queryClient.invalidateQueries({ queryKey: ['likeStatus', tweetId] });
      queryClient.invalidateQueries({ queryKey: ['feeds'] });
      queryClient.invalidateQueries({ queryKey: ['detail-tweet', tweetId] });
      queryClient.invalidateQueries({ queryKey: ['tweet-profile'] });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  // 3. Siapkan mutasi untuk UNLIKE
  const { mutate: doUnlike, isPending: isUnliking } = useMutation({
    mutationFn: unlikeTweet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['likeStatus', tweetId] });
      queryClient.invalidateQueries({ queryKey: ['feeds'] });
      queryClient.invalidateQueries({ queryKey: ['detail-tweet', tweetId] });
      queryClient.invalidateQueries({ queryKey: ['tweet-profile'] });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  // Gabungkan semua status loading
  const isLoading = isLoadingStatus || isLiking || isUnliking;

  // Kembalikan semua yang dibutuhkan oleh komponen UI
  return { isLiked, isLoading, doLike, doUnlike };
};
