import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useParams } from 'react-router-dom';
import { useResetPassword } from './hooks/useResetPassword';
import { useForm } from 'react-hook-form';
import {
  ResetPasswordDTO,
  schemaResetPassword,
} from './schema/schemaResetPassword';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';

function ResetPassword() {
  const { token } = useParams<{ token: string }>();
  const { mutate: resetPassword, isPending } = useResetPassword();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordDTO>({
    resolver: zodResolver(schemaResetPassword),
    mode: 'onChange',
  });

  const onSubmit = (data: ResetPasswordDTO) => {
    if (!token) {
      toast.error(
        'Token reset tidak ditemukan. Silakan ulangi proses lupa password.'
      );
      return;
    }

    resetPassword({ token, password: data.password, confirmPassword: '' });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-3/4 sm:w-md">
        <h1 className="text-3xl font-bold  text-green-600">Circle</h1>
        <h1 className="text-md font-bold mb-4">Reset Password</h1>
        <form
          className="space-y-4 w-full max-w-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            id="password"
            type="password"
            placeholder="Password"
            {...register('password')}
          />
          {errors.password && (
            <p className="text-sm text-red-600 mt-1">
              {errors.password.message}
            </p>
          )}
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-600 mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
          <Button
            type="submit"
            className="w-full rounded-full bg-green-600 text-md font-bold text-white"
            disabled={isPending}
          >
            Send
          </Button>
        </form>
        <div className="mt-4">
          Already have account?
          <Link to="/login" className="text-green-600">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
