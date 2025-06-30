import { useAuthLogin } from '@/stores/authLogin';
import { Following } from '@/types/following';
import { api } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';

export const useGetFollowing = () => {
  const { token } = useAuthLogin();
  return useQuery<Following[]>({
    queryKey: ['following'],
    queryFn: async () => {
      const res = await api.get('/follow', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data.data);
      return res.data.data;
    },
    enabled: !!token,
  });
};
