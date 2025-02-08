import React, { ReactNode } from 'react';
import { AuthGuard } from './auth-guard';

interface Props {
  children: ReactNode;
}

export const HomeProviders: React.FC<Props> = ({ children }) => {
  return <AuthGuard>{children}</AuthGuard>;
};
