import Skeleton from 'react-loading-skeleton';

const CardLoading = () => {
  return (
    <aside className="border-weesher-300 border p-1 rounded-md my-6 sm:my-0 sm:col-span-6 xl:col-span-4 ">
      <article className=" p-1 flex justify-center items-center  md:overflow-hidden rounded-sm">
        <Skeleton width={300} height={200} />
      </article>
      <article className={'p-1 mt-2'}>
        <div>
          <p className="h-4 w-32">
            <Skeleton className="h-full" />
          </p>
        </div>
        <h4 className={'h-4  my-2'}>
          <Skeleton />
        </h4>
        <p className="h-8">
          <Skeleton className="h-full" />
        </p>
        <p className="h-4">
          <Skeleton />
        </p>
      </article>
    </aside>
  );
};

export default CardLoading;
