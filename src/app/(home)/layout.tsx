import { Header, HomeProviders } from '@/components/shared';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Map Designer | Home',
  description: 'Create and share maps',
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <HomeProviders>
      <Header />
      <main>{children}</main>;
    </HomeProviders>
  );
}
