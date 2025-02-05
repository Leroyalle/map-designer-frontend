import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Map Designer | Auth',
  description: 'Auth in Map Designer',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="min-h-screen">{children}</main>;
}
