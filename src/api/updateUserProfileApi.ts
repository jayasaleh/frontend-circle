import { api } from '@/utils/api';

export const updateUserProfileApi = async (formData: FormData) => {
  const response = await api.patch('/user/profile', formData);
  return response.data;
};
