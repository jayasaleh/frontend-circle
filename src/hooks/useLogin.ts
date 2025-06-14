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
      console.log(data);
      toast.success(`Login berhasil, SeLamat datang ${data.user.name}`);
      navigate("/");
    },
    onError: (error) => {
      toast.error(error?.message || "Login Gagal");
    },
  });
  return mutation;
};
