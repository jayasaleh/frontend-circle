import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { usePostRegister } from '@/Layouts/auth/Register/hooks/usePostRegister';
import { RegisterDTO, schemaRegister } from '@/schema/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

function AuthRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDTO>({
    resolver: zodResolver(schemaRegister),
    mode: 'all',
  });
  const { mutate, isPending } = usePostRegister();

  return (
    <>
      <title>Circle</title>
      <meta name="description" content="Register" />
      <div className="flex justify-center items-center h-screen">
        <div className="w-3/4 sm:w-md">
          <h1 className="text-3xl font-bold text-green-600">Circle</h1>
          <h1 className="text-2xl font-bold mb-4">Create Account Circle</h1>

          <form
            className="space-y-4 w-full"
            onSubmit={handleSubmit((data) => mutate(data))}
          >
            <Input id="name" placeholder="Name" {...register('name')} />
            {errors.name ? (
              <p className="text-red-400"> {errors.name.message}</p>
            ) : (
              <p></p>
            )}
            <Input
              id="username"
              placeholder="Username"
              {...register('username')}
            />
            {errors.username ? (
              <p className="text-red-400"> {errors.username.message}</p>
            ) : (
              <p></p>
            )}
            <Input
              id="email"
              type="email"
              placeholder="Email"
              {...register('email')}
            />
            {errors.email ? (
              <p className="text-red-400"> {errors.email.message}</p>
            ) : (
              <p></p>
            )}
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                {...register('password')}
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
            {errors.password ? (
              <p className="text-red-400"> {errors.password.message}</p>
            ) : (
              <p></p>
            )}
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                {...register('confirmPassword')}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-sm"
                onClick={() => setConfirmShowPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-500" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>
            {errors.confirmPassword ? (
              <p className="text-red-400"> {errors.confirmPassword.message}</p>
            ) : (
              <p></p>
            )}

            <Button
              type="submit"
              className="w-full rounded-full bg-green-600 font-bold text-lg"
              disabled={isPending}
            >
              {isPending ? 'Loading...' : 'Create'}
            </Button>
          </form>

          <div className="text-sm mt-3">
            Already have account? {''}
            <NavLink
              to="/login"
              className=" hover:underline font-bold text-green-600"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthRegister;
