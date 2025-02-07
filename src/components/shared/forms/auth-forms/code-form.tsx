'use client';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'sonner';
import { authService } from '@/services';
import { InputOtp } from '@heroui/react';
import { Button } from '@/components/ui';
import { codeSchema, TCodeSchema } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';

interface Props {
  title?: string;
  userId: string;
  onChangeTab?: VoidFunction;
}

export const CodeForm: React.FC<Props> = ({ title, userId, onChangeTab }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TCodeSchema>({
    resolver: zodResolver(codeSchema),
    mode: 'onSubmit',
    defaultValues: {
      code: '',
    },
  });

  const onSubmit = async (data: TCodeSchema) => {
    toast.promise(authService.verifyUser({ userId, code: data.code }), {
      loading: 'Подождите, проверяю код...',
      success: () => {
        if (onChangeTab) onChangeTab();
        return 'Аккаунт подтвержден! Входите в систему';
      },
      error: 'Ошибка!',
    });
  };

  return (
    <form className="flex flex-col gap-4 w-full max-w-[300px]" onSubmit={handleSubmit(onSubmit)}>
      {title && <h3 className="text-3xl">{title}</h3>}
      <Controller
        control={control}
        name="code"
        render={({ field }) => (
          <InputOtp
            {...field}
            errorMessage={errors.code && errors.code.message}
            isInvalid={!!errors.code}
            length={6}
            type="number"
            description="Enter your code"
            value={field.value}
            onValueChange={field.onChange}
          />
        )}
        rules={{
          required: 'Code is required',
          minLength: {
            value: 6,
            message: 'Please enter a valid code',
          },
          pattern: {
            value: /^\d+$/,
            message: 'Please enter a valid number',
          },
        }}
      />
      <Button className="max-w-fit" type="submit">
        Отправить
      </Button>
    </form>
  );
};
