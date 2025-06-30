import { RegisterDTO } from '@/schema/schema';
import { api } from '@/utils/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const usePostRegister = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newUser: RegisterDTO) => {
      const response = await api.post('user', newUser);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['register'] });
      toast.success('berhasil register user baru');
    },
    onError: (error: Error) => {
      console.log('ini errornya', error.message);
      toast.error('gagal register user baru');
    },
  });
};
