import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ForgotPasswordDTO,
  schemaForgotPassword,
} from '@/Layouts/auth/ForgotPassword/schema/schemaForgotPasssword';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useForgotPassword } from './hooks/useForgotPassword';

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordDTO>({
    mode: 'onChange',
    resolver: zodResolver(schemaForgotPassword),
  });
  const { mutate, isPending } = useForgotPassword();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-3/4 sm:w-md">
        <h1 className="text-3xl font-bold  text-green-600">Circle</h1>
        <h1 className="text-md font-bold mb-4">Forgot Password</h1>
        <form
          className="space-y-4 w-full max-w-md"
          onSubmit={handleSubmit((data) => mutate(data))}
        >
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
          <Button
            type="submit"
            className="w-full rounded-full bg-green-600 text-md font-bold text-white"
            disabled={isPending}
          >
            {isPending ? 'Loading...' : 'Send'}
          </Button>
        </form>
        <div className="mt-4">
          Already have account?{' '}
          <Link to="/login" className="text-green-600">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
