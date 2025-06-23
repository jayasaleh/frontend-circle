import { useAuthLogin } from "@/stores/authLogin";
import { api } from "@/utils/api";
import { Mutation, useMutation, useQueryClient } from "@tanstack/react-query";
import { error } from "console";
import toast from "react-hot-toast";

export const useDeleteTweet = () => {
  const { token } = useAuthLogin();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-tweet"],
    mutationFn: async (id: number) => {
     await api.delete(`/delete-tweet/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["feeds"],
      });
      toast.success("berhasil menghapus tweet");
    },
    onError: (error) => {
      const errorMessage =
        error instanceof Error ? error.message : "Gagal menghapus Tweet";
      toast.error(errorMessage);
    },
  });
};
