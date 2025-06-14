import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { useLogin } from "@/hooks/useLogin";
import { LoginDTO, schemaLogin } from "@/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function AuthLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDTO>({
    resolver: zodResolver(schemaLogin),
    mode: "all",
  });
  const { mutate, isPending } = useLogin();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-md">
        <h1 className="text-3xl font-bold  text-green-600">Circle</h1>
        <h1 className="text-2xl font-bold mb-4">Login to Circle</h1>

        <form
          className="space-y-4 w-full max-w-md"
          onSubmit={handleSubmit((data) => mutate(data))}
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
            disabled={isPending}
          >
            {isPending ? "Loading..." : "Login"}
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
