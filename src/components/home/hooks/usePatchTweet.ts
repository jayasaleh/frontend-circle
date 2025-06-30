import { useAuthLogin } from '@/stores/authLogin';
import { api } from '@/utils/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

// export const usePatchTweet = () => {
//   const { token } = useAuthLogin();
//   const queryClient= useQueryClient()
//   const patchTweetMutation= useMutation({
//     mutationKey: ["patchTweet"],
//     mutationFn: async (data:, id:number) =>{
//       const res= await api.patch(``)
//     }
//   })
// };
