import { Button, Typography } from '@/components/ui';
import React, { useState } from 'react';
import { AuthProviders, ConfirmDocuments, Copyright, OrderACall } from './components';
import { Mail, User, Lock } from 'lucide-react';
import { FormProvider, useForm } from 'react-hook-form';
import { registerSchema, TRegisterSchema } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from '../../form-input';
import { toast } from 'sonner';
import { authService } from '@/services';

interface Props {
  onSuccess?: (userId: string) => void;
  onChangeAction?: () => void;
  className?: string;
}

export const Register: React.FC<Props> = ({ onSuccess, onChangeAction, className }) => {
  const [needCallValue, setNeedCallValue] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const form = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: TRegisterSchema) => {
    toast.promise(authService.register(data), {
      loading: 'Регистрация...',
      success: ({ userId }) => {
        form.setValue('name', '');
        form.setValue('email', '');
        form.setValue('password', '');
        if (onSuccess) onSuccess(userId);
        if (onChangeAction) onChangeAction();
        return 'Письмо с кодом отправлено на почту';
      },
      error: 'Ошибка! Повторите попытку',
    });
  };

  return (
    <div className={className}>
      <div className="mb-10 flex flex-col gap-y-2">
        <h3 className="text-[24px] font-semibold">Регистрация</h3>
        <Typography className="text-base">заполните форму, чтобы создать аккаунт</Typography>
      </div>
      <AuthProviders />
      <hr className="my-5" />
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-5">
            <FormInput
              name="name"
              variant="faded"
              autoComplete="off"
              startContent={<User className="text-foreground/40" />}
              placeholder="Имя"
            />
            <FormInput
              name="email"
              variant="faded"
              autoComplete="off"
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
            <OrderACall
              needCallValue={needCallValue}
              changeCallValue={() => setNeedCallValue(!needCallValue)}
            />
          </div>
          <Button type="submit" className="w-full mt-10 py-[25px]" disabled={!isConfirmed}>
            Создать аккаунт
          </Button>
          <ConfirmDocuments
            isConfirmed={isConfirmed}
            isSubscribed={isSubscribed}
            onConfirm={() => setIsConfirmed(!isConfirmed)}
            onSubscribe={() => setIsSubscribed(!isSubscribed)}
            className="mt-10"
          />
        </form>
      </FormProvider>
      <Copyright className="mx-auto mt-[65px] text-center" />
    </div>
  );
};
