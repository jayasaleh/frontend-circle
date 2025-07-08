import { api } from '@/utils/api';
import { ResetPasswordDTO } from '../schema/schemaResetPassword';

interface ResetPasswordPayload extends ResetPasswordDTO {
  token: string;
}
export const resetPasswordApi = async ({
  token,
  password,
}: ResetPasswordPayload) => {
  try {
    const response = await api.patch(`/reset-password/${token}`, { password });
    return response.data;
  } catch (error) {
    console.error('Gagal mereset password:', error);
    throw error;
  }
};
