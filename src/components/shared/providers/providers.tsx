'use client';
import React, { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import { HeroUIProvider } from '@heroui/react';
import { ContextProvider } from './context-provider';
import { Toaster } from '@/components/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface Props {
  children: ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <HeroUIProvider>
            {children}
            <Toaster position="bottom-left" />
          </HeroUIProvider>
        </ContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
