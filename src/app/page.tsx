import { Inter, Playfair_Display } from 'next/font/google';
import cls from 'classnames';
import ArrowIcon from './icons/arrow';
import Banner from './components/banner';

const playFair = Playfair_Display({ weight: '900', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Banner />
    </main>
  );
}
