import React from 'react';
import { cn } from '@/lib/utils';
import { ProviderButton } from './provider-button';

interface Props {
  className?: string;
}

export const AuthProviders: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center gap-x-5', className)}>
      <ProviderButton provider="Яндекс" iconUrl="/img/providers/yandex.svg" />
      <ProviderButton provider="ВК" iconUrl="/img/providers/vk.svg" />
    </div>
  );
};
