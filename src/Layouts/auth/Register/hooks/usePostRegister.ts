import { RegisterDTO } from '@/schema/schema';
import { ApiResponse } from '@/types/apiResponse';
import { api } from '@/utils/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const usePostRegister = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newUser: RegisterDTO) => {
      const response = await api.post('/user', newUser);
      return response.data;
    },
    onSuccess: (data: ApiResponse) => {
      queryClient.invalidateQueries({ queryKey: ['register'] });
      toast.success(data.message);
    },
    onError: (error: Error) => {
      console.log('ini errornya', error.message);
      toast.error(`gagal register user baru`);
    },
  });
};
