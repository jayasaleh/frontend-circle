import { updateUserProfileApi } from '@/api/updateUserProfileApi';
import { useAuthLogin } from '@/stores/authLogin';
import { User } from '@/types/user';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

interface UpdateSuccessResponse {
  message: string;
  data: User;
}
interface UpdateProfileOptions {
  onSuccess?: () => void;
}

export const useUpdateProfile = ({ onSuccess }: UpdateProfileOptions = {}) => {
  const queryClient = useQueryClient();
  const { login } = useAuthLogin();

  return useMutation({
    mutationFn: updateUserProfileApi,
    onSuccess: (data: UpdateSuccessResponse) => {
      toast.success(data.message);
      const updatedUser = data.data;
      const token = useAuthLogin.getState().token;
      if (token) {
        login({ user: updatedUser, token });
      }

      queryClient.invalidateQueries({
        queryKey: ['userProfile', updatedUser.id],
      });
      queryClient.invalidateQueries({ queryKey: ['feeds'] });

      onSuccess?.();
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Gagal memperbarui profil.');
    },
  });
};
