'use client';
import { TextAreaProps, Textarea } from '@heroui/react';
import { useFormContext } from 'react-hook-form';

interface Props extends TextAreaProps {
  name: string;
  required?: boolean;
  className?: string;
}

export const TextareaInput: React.FC<Props> = ({ className, name, ...props }) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const onClickClear = () => {
    setValue(name, '', { shouldValidate: true });
  };

  return (
    <Textarea
      errorMessage={errorText}
      isInvalid={!!errorText}
      value={value}
      {...register(name)}
      {...props}
      isClearable
      onClear={onClickClear}
      className={className}
    />
  );
};
