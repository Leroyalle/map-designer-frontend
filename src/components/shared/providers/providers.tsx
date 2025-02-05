'use client';
import React, { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import { HeroUIProvider } from '@heroui/react';

interface Props {
  children: ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <HeroUIProvider>{children}</HeroUIProvider>
    </ThemeProvider>
  );
};
