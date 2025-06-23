import { useAuthLogin } from "@/stores/authLogin";
import { Tweet } from "@/types/tweet";
import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useGetTweets = () => {
  const { token } = useAuthLogin();
  return useQuery<Tweet[]>({
    queryKey: ["feeds"],
    queryFn: async () => {
      const res = await api.get("/getFeeds", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.tweets;
    },
    enabled: !!token,
  });
};
