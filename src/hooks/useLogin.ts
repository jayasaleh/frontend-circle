import { LoginDTO } from "@/schema/schema";
import { useAuthLogin } from "@/stores/authLogin";
import { api } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setToken, setUser } = useAuthLogin();
  const mutation = useMutation({
    mutationFn: async (data: LoginDTO) => {
      const res = await api.post("/login", data);
      return res.data;
    },
    onSuccess: (data) => {
      setToken(data.token);
      setUser(data.user);
      toast.success(`Success Login, Welcome  ${data.user.name}`);
      navigate("/");
    },
    onError: (error) => {
      toast.error("email / password salah");
    },
  });
  return mutation;
};
