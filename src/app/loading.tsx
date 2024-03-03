import Skeleton from 'react-loading-skeleton';
import CardLoading from './components/loading/cardLoading';

import 'react-loading-skeleton/dist/skeleton.css';

const Loading = () => {
  return (
    <main>
      <section className="block sm:grid grid-cols-12 gap-10 my-14">
        {[1, 2, 3, 4, 5, 6].map((id) => (
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
