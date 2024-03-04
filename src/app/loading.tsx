import Skeleton from 'react-loading-skeleton';
import CardLoading from './components/loading/cardLoading';

import 'react-loading-skeleton/dist/skeleton.css';
import Banner from './components/banner';
import ArrowIcon from './icons/arrow';

const Loading = () => {
  return (
    <main>
      <section className=" grid grid-cols-12 border-weesher-300 border p-1 rounded-md">
        <aside className={'col-span-12 md:col-span-4  h-60 md:h-auto'}>
          <Skeleton className="w-full h-full" />
        </aside>
        <article className="col-span-12 md:col-span-8 text-weesher-500 p-4">
          <aside className="h-4 my-2 w-[200px]">
            <Skeleton className="h-full" />
          </aside>
          <aside className="h-6 my-4">
            <Skeleton className="h-full" />
          </aside>
          <aside className="h-10">
            <Skeleton className="h-full" />
          </aside>
          <aside className="h-10 my-2">
            <Skeleton className="h-full" />
          </aside>
          <aside className="h-4 my-2">
            <Skeleton className="h-full" />
          </aside>
        </article>
      </section>
      <section className="block sm:grid grid-cols-12 gap-10 my-14">
        {[1, 2, 3].map((id) => (
          <CardLoading key={id} />
        ))}
      </section>
      <section className="text-center">
        <aside className="mx-auto md:w-[600px]">
          <Skeleton />
        </aside>
        <aside className="mx-auto md:w-[500px] my-4">
          <Skeleton />
        </aside>
        <aside className="mx-auto w-[200px] h-16">
          <Skeleton className="h-full" />
        </aside>
      </section>
    </main>
  );
};

export default Loading;
