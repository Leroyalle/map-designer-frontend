'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { AuthTokensEnum, NavRoutesEnum } from '@/types';
import { Spinner } from '@heroui/react';
import { useGetMe } from '@/hooks';

interface Props {
  children: React.ReactNode;
}

export const AuthGuard: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const { isPending, isError } = useGetMe();

  useEffect(() => {
    if (isError) {
      Cookies.remove(AuthTokensEnum.JWT);
      router.push(NavRoutesEnum.AUTH);
    }
  }, [isError]);

  if (isPending || isError) {
    return <Spinner className="absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />;
  }

  return children;
};
