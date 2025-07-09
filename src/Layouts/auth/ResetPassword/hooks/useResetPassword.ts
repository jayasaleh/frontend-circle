import { ApiResponse } from '@/types/apiResponse';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { resetPasswordApi } from '../api/resetPasswordApi';

export const useResetPassword = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: resetPasswordApi,
    onSuccess: (response: ApiResponse) => {
      toast.success(response.message);
      navigate('/login');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
