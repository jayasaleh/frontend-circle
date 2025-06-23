import { useAuthLogin } from "@/stores/authLogin";
import { FollowToggleProps } from "@/types/toggleFollow";
import { api } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const useFollowToggle = ({
  followId,
  initialIsFollowing,
}: FollowToggleProps) => {
  const queryClient = useQueryClient();
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const { token } = useAuthLogin();

  const followMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await api.post(`/follow/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
    onSuccess: () => {
      setIsFollowing(true);
      queryClient.invalidateQueries({ queryKey: ["userProfile", followId] }); //userId digunakan untuk membuat queryKey menjadi spesifik
      // ['userProfile', 5] adalah kunci untuk cache data profil user dengan ID 5.
      queryClient.invalidateQueries({ queryKey: ["feeds"] });
      queryClient.invalidateQueries({ queryKey: ["following"] });
      queryClient.invalidateQueries({ queryKey: ["suggestions"] });
    },
    onError: (error: Error) => {
      setIsFollowing(false);
      console.log(error);
    },
  });
  const unfollowMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await api.delete(`/follow/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
    onSuccess: () => {
      setIsFollowing(false);
      queryClient.invalidateQueries({ queryKey: ["userProfile", followId] }); //userId digunakan untuk membuat queryKey menjadi spesifik
      queryClient.invalidateQueries({ queryKey: ["following"] });
      queryClient.invalidateQueries({ queryKey: ["followers"] });
    },
    onError: () => {
      setIsFollowing(true);
    },
  });
  const isLoading = followMutation.isPending || unfollowMutation.isPending;
  const handleToggleFollow = () => {
    if (isFollowing) {
      unfollowMutation.mutate(followId);
    } else {
      followMutation.mutate(followId);
    }
  };
  return {
    isFollowing,
    isLoading,
    handleToggleFollow,
  };
};
