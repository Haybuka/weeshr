import { Inter } from 'next/font/google';
import cls from 'classnames';
import Banner from '../components/banner';
import Card from '../components/card';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // throw new Error('Network error');
  return (
    <main>
      <Banner />
      <section className="block sm:grid grid-cols-12 gap-10 my-14">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <Card key={id} item={id} />
        ))}
      </section>
      <section className="text-center">
        <h4
          className={cls(
            ' text-weesher-600 font-bold my-2 text-xl',
            inter.className
          )}
        >
          Join our Team of Writers
        </h4>
        <p className=" text-weesher-500 md:w-1/2 mx-auto my-2">
          On dasdas, writers earn a living doing what they love. Getting started
          is easy. Just pay a one time{' '}
          <span className=" font-bold">$25 fee</span> and everything is ready to
          go.
        </p>
        <p className="uppercase bg-black text-white py-2 px-10 text-[14px] mt-6 inline-block">
          JOIN US
        </p>
      </section>
    </main>
  );
}