import { useAuthLogin } from '@/stores/authLogin';
import { api } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';

interface Follower {
  id: number;
  username: string;
  name: string;
  photo: string;
  isFollowing: boolean;
}
export const useGetFollowers = () => {
  const { token } = useAuthLogin();
  return useQuery<Follower[]>({
    queryKey: ['followers'],
    queryFn: async () => {
      const res = await api.get('/followers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data.responseData);
      return res.data.responseData;
    },
    enabled: !!token,
  });
};
