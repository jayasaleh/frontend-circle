import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLogin } from '@/Layouts/auth/Login/hooks/useLogin';
import { LoginDTO, schemaLogin } from '@/schema/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function AuthLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDTO>({
    resolver: zodResolver(schemaLogin),
    mode: 'all',
  });
  const { mutate, isPending } = useLogin();

  return (
    <>
      <title>Circle</title>
      <meta name="description" content="Login" />
      <div className="flex justify-center items-center h-screen">
        <div className="w-3/4 sm:w-md">
          <h1 className="text-3xl font-bold  text-green-600">Circle</h1>
          <h1 className="text-2xl font-bold mb-4">Login to Circle</h1>

          <form
            className="space-y-4 w-full max-w-md"
            onSubmit={handleSubmit((data) => mutate(data))}
          >
            <Input type="text" {...register('email')} placeholder="Email" />
            {errors.email ? (
              <p className="text-red-400"> {errors.email.message}</p>
            ) : (
              <p></p>
            )}
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-sm"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-500" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>
            {errors.password && (
              <span className="text-red-400">{errors.password.message}</span>
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
              {isPending ? 'Loading...' : 'Login'}
            </Button>
          </form>

          <div className="mt-4">
            Don't have account yet?{' '}
            <Link to="/register" className="text-green-600">
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default AuthLogin;
