import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  provider: string;
  iconUrl: string;
  onClick?: () => void;
  className?: string;
}

export const ProviderButton: React.FC<Props> = ({ provider, iconUrl, onClick, className }) => {
  return (
    <Button variant="outline" onClick={onClick} className={cn('px-5 py-[13px] h-auto', className)}>
      <div className="flex items-center gap-2">
        <img src={iconUrl} alt={provider} className="w-[30px] h-[30px] shrink-0" />
        <span>Войти через {provider}</span>
      </div>
    </Button>
  );
};
