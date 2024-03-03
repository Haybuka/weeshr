'use client';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import cls from 'classnames';
import Navigation from './components/navigation';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
const poppins = Poppins({ weight: ['900', '400'], subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={cls(poppins.className, 'px-4 md:px-20 py-4')}>
          <ReactQueryStreamedHydration>
            <Navigation />
            {children}
          </ReactQueryStreamedHydration>
          <ReactQueryDevtools initialIsOpen={false} />
        </body>
      </QueryClientProvider>
    </html>
  );
}
