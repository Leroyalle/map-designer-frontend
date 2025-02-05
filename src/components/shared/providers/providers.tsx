import React, { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';

interface Props {
  children: ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
