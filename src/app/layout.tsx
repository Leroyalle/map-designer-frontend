import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/shared';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const montserrat = Montserrat({
  subsets: ['cyrillic'],
  variable: '--font-Montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Map Designer',
  description: 'Create and share maps',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(montserrat.className, 'min-h-screen')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
