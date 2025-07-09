import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { usePostRegister } from '@/Layouts/auth/Register/hooks/usePostRegister';
import { RegisterDTO, schemaRegister } from '@/schema/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

function AuthRegister() {
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
          <Input
            id="password"
            type="password"
            placeholder="Password"
            {...register('password')}
          />
          {errors.password ? (
            <p className="text-red-400"> {errors.password.message}</p>
          ) : (
            <p></p>
          )}

          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            {...register('confirmPassword')}
          />
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
  );
}

export default AuthRegister;
