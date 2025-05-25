import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { schemaLogin } from "@/schema/schema";
import { api } from "@/utils/api";
import { useAuth } from "@/components/auth/AuthContext";
import { toast } from "sonner";

function AuthLogin() {
  type FormData = z.infer<typeof schemaLogin>;

  const { login, isAuth } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schemaLogin),
    mode: "all",
  });

  const handleLogin = async (data: FormData) => {
    try {
      const res = await api.post("/login", data);
      const token = res.data.token;
      login(token);

      console.log("asdasd", res.data);
      navigate("/");
    } catch (error: any) {
      toast.error("", {
        description: error.response.data.message,
      });
    }
  };

  // memanggil data login
  const onSubmit = async (data: FormData) => {
    await handleLogin(data);
  };
  // if (isAuth === true) {
  //   navigate("/");
  // }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-md">
        <h1 className="text-3xl font-bold  text-green-600">Circle</h1>
        <h1 className="text-2xl font-bold mb-4">Login to Circle</h1>

        <form
          className="space-y-4 w-full max-w-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input type="text" {...register("email")} placeholder="Email" />
          {errors.email ? (
            <p className="text-red-400"> {errors.email.message}</p>
          ) : (
            <p></p>
          )}
          <Input
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-400">{errors.password.message}</p>
          )}

          <div className="flex justify-end">
            <Link
              to="/forgotpassword"
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <Button
            type="submit"
            className="w-full rounded-full bg-green-600 text-lg font-bold"
          >
            Login
          </Button>
        </form>

        <div className="mt-4">
          Don't have account yet?{" "}
          <Link to="/register" className="text-green-600">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AuthLogin;
