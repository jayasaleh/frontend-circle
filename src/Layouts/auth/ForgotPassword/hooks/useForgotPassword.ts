import { ApiResponse } from '@/types/apiResponse';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { forgotPasswordApi } from '../api/forgotPasswordApi';


export const useForgotPassword = () => {
  return useMutation({
    mutationFn: forgotPasswordApi,
    onSuccess: (response: ApiResponse) => {
      toast.success(response.message);
    },
    onError: (response: ApiResponse) => {
      toast.error(response.message);
      throw Error;
    },
  });
};
