import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { resetPasswordApi } from '../api/resetPasswordApi';
import { ApiResponse } from '@/types/apiResponse';

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
