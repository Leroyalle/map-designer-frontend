import { Header, HomeProviders } from '@/components/shared';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Map Designer | Project',
  description: 'Create and share maps',
};

export default function ProjectLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <HomeProviders>
      <div className="min-h-screen max-h-screen overflow-hidden bg-gray-500">
        <Header isEditMode className="select-none fixed top-0 z-50 w-full" />
        <main>{children}</main>
      </div>
    </HomeProviders>
  );
}
