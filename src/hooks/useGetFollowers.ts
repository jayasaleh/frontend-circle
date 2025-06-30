import { useAuthLogin } from '@/stores/authLogin';
import { Followers } from '@/types/followers';
import { api } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';

export const useGetFollowers = () => {
  const { token } = useAuthLogin();
  return useQuery<Followers[]>({
    queryKey: ['followers'],
    queryFn: async () => {
      const res = await api.get('/followers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      return res.data.data;
    },
    enabled: !!token,
  });
};
