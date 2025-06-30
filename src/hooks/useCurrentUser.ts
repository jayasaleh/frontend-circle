import { useAuthLogin } from '@/stores/authLogin';
import { api } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';

type User = {
  id: number;
  name: string;
  email: string;
  username: string;
};

export const useCurrentUser = () => {
  const { token, setUser, logout } = useAuthLogin();

  return useQuery<User>({
    queryKey: ['current-user'],
    queryFn: async () => {
      const res = await api.get('/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data as User;
    },
    enabled: !!token,
    retry: false,
    gcTime: 0, // optional
  }) as ReturnType<typeof useQuery<User>> & {
    onSuccess?: (data: User) => void;
    onError?: (error: unknown) => void;
  };
};
