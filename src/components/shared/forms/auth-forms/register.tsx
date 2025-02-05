import { Button, Label, Switch, Typography } from '@/components/ui';
import React, { useState } from 'react';
import { AuthProviders, ConfirmDocuments, Copyright } from './components';
import { Mail, User, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FormProvider, useForm } from 'react-hook-form';
import { registerSchema, TRegisterSchema } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from '../../form-input';

interface Props {
  className?: string;
}

export const Register: React.FC<Props> = ({ className }) => {
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
    console.log(data);
  };

  return (
    <div className={cn('max-h-[90vh] overflow-y-auto scrollbar', className)}>
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
              startContent={<User className="text-foreground/40" />}
              placeholder="Имя"
            />
            <FormInput
              name="email"
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
            <div className="flex items-start gap-x-5 border-1 border-gray-200 p-5 rounded-xl">
              <Switch
                id="order-a-call"
                checked={needCallValue}
                onClick={() => setNeedCallValue(!needCallValue)}
              />
              <div className="flex flex-col gap-y-5">
                <Label className="text-foreground font-medium" htmlFor="order-a-call">
                  Заказать обратный звонок
                </Label>
                <Typography>
                  После регистрации наш менеджер свяжется <br /> с вами и ответит на все вопросы по
                  сервису
                </Typography>
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full mt-10 py-[25px]">
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
