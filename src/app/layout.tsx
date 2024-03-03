import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './components/footer';
import cls from 'classnames';
import Navigation from './components/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cls(inter.className, 'px-6 md:px-20 py-4')}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
