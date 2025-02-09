import { Button, Typography } from '@/components/ui';
import React from 'react';
import { AuthProviders, Copyright } from './components';
import { Mail, Lock } from 'lucide-react';
import { FormProvider, useForm } from 'react-hook-form';
import { loginSchema, TLoginSchema } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from '../../form-input';
import { toast } from 'sonner';
import { authService } from '@/services';
import { useRouter } from 'next/navigation';
import { NavRoutesEnum } from '@/types';
import { saveAuthCookie } from '@/lib';

interface Props {
  className?: string;
}

export const Login: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: TLoginSchema) => {
    toast.promise(authService.login(data), {
      loading: 'Проверка введенных данных...',
      success: (res) => {
        saveAuthCookie(res.token);
        router.push(NavRoutesEnum.PROFILE);
        form.setValue('email', '');
        form.setValue('password', '');
        return 'Успешный вход в аккаунт! Секунду...';
      },
      error: 'Ошибка! Повторите попытку',
    });
  };

  return (
    <div className={className}>
      <div className="mb-10 flex flex-col gap-y-2">
        <h3 className="text-[24px] font-semibold">Войти в аккаунт</h3>
        <Typography className="text-base">Введите электронную почту и пароль</Typography>
      </div>
      <AuthProviders />
      <hr className="my-5" />
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-5">
            <FormInput
              name="email"
              autoComplete="off"
              variant="faded"
              startContent={<Mail className="text-foreground/40" />}
              placeholder="Электронная почта"
            />
            <FormInput
              name="password"
              variant="faded"
              type="password"
              isClearable
              onClear={() => form.setValue('password', '')}
              startContent={<Lock className="text-foreground/40" />}
              placeholder="Пароль"
            />
          </div>
          <div className="flex flex-col mt-10 mb-[66px]">
            <Button type="submit" className="w-full py-[25px]">
              Войти
            </Button>
            <Button type="button" className="mx-auto" variant="link">
              Забыли пароль?
            </Button>
          </div>
        </form>
      </FormProvider>
      <Copyright className="mx-auto mt-[65px] text-center" />
    </div>
  );
};
