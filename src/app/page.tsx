import { Inter, Playfair_Display } from 'next/font/google';
import cls from 'classnames';

const playFair = Playfair_Display({ weight: '900', subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <p>Washeer</p>
      <section className=" grid grid-cols-12 border-weesher-300 border p-1 rounded-md">
        <aside
          className={cls(
            ' col-span-4 flex items-end bg-weesher-200 px-4 h-60',
            playFair.className
          )}
        >
          <h4 className="text-white text-3xl mb-5">
            <p className="text-4xl ">🚀</p>
            <p className="my-6">Optimizing CSS for faster page loads </p>
          </h4>
        </aside>
        <aside className=" col-span-8 bg-yellow-500"></aside>
      </section>
    </main>
  );
}
