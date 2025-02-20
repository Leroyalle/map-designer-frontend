'use client';
import React, { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import { HeroUIProvider } from '@heroui/react';
import { ContextProvider } from './context-provider';
import { Toaster } from '@/components/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import NextTopLoader from 'nextjs-toploader';

interface Props {
  children: ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <HeroUIProvider>
            {children}
            <Toaster position="bottom-left" />
            <NextTopLoader color="#2563eb" />
            <ReactQueryDevtools initialIsOpen={false} />
          </HeroUIProvider>
        </ContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
