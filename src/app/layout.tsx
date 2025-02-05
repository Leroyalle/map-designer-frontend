import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Header, Providers } from '@/components/shared';
import { cn } from '@/lib/utils';

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
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(montserrat.className, 'min-h-screen')}>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
