import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Map Designer | Home',
  description: 'Create and share maps',
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="min-h-screen">{children}</main>;
}
