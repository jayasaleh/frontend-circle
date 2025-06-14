import { api } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { error } from "console";

interface PostTweetOption {
  onSuccess: () => void;
  onError: (error: Error) => void;
}

interface PostTweetRequest {
  content: string;
  userId: number;
  images?: string;
}

export const usePostTweet = (options?: PostTweetOption) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newTweet: PostTweetRequest) => {
      const response = await api.post("/tweet", newTweet);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tweets"] });
      options?.onSuccess?.();
    },
    onError: (error: Error) => {
      options?.onError?.(error);
    },
  });
};
