import { Inter, Playfair_Display } from 'next/font/google';
import cls from 'classnames';
import ArrowIcon from './icons/arrow';
import Banner from './components/banner';
import Card from './components/card';

const playFair = Playfair_Display({ weight: '900', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Banner />
      <section className="grid grid-cols-12 gap-10 my-14">
        {[1, 2, 3, 4, 5].map((id) => (
          <Card key={id} />
        ))}
      </section>
    </main>
  );
}
