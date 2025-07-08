import { ForgotPasswordDTO } from '@/Layouts/auth/ForgotPassword/schema/schemaForgotPasssword';
import { ApiResponse } from '@/types/apiResponse';
import { api } from '@/utils/api';

export const forgotPasswordApi = async (
  payload: ForgotPasswordDTO
): Promise<ApiResponse> => {
  try {
    const response = await api.post(`/forgotpassword`, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};
