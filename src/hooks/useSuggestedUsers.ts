import { useAuthLogin } from '@/stores/authLogin';
import { SuggestedUser } from '@/types/suggestedUser';
import { api } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';

export const useSuggestUsers = () => {
  const { token } = useAuthLogin();
  return useQuery<SuggestedUser[], Error>({
    queryKey: ['suggestions'],
    queryFn: async () => {
      const response = await api.get('filterUsers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },

    staleTime: 1000 * 60 * 5,

    refetchOnWindowFocus: false,
    enabled: !!token,
  });
};
