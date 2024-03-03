import cls from 'classnames';
import Navigation from './components/navigation';

// Google font
import { Poppins } from 'next/font/google';
const poppins = Poppins({ weight: ['900', '400'], subsets: ['latin'] });

import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cls(poppins.className, 'px-4 md:px-20 py-4')}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
