'use client';
import React, { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import { HeroUIProvider } from '@heroui/react';
import { ContextProvider } from './context-provider';
import { Toaster } from '@/components/ui';

interface Props {
  children: ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <ContextProvider>
        <HeroUIProvider>
          {children}
          <Toaster position="bottom-left" />
        </HeroUIProvider>
      </ContextProvider>
    </ThemeProvider>
  );
};
