import { Inter, Playfair_Display } from 'next/font/google';
import cls from 'classnames';
import ArrowIcon from '@/app/icons/arrow';

const playFair = Playfair_Display({ weight: '900', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });
const Banner = () => {
  return (
    <section className=" grid grid-cols-12 border-weesher-300 border p-1 rounded-md">
      <aside
        className={cls(
          'col-span-12 md:col-span-4 flex items-end bg-weesher-200 px-4 h-60 md:h-auto',
          playFair.className
        )}
      >
        <h4 className="text-white text-3xl mb-5">
          <p className="text-4xl ">🚀</p>
          <p className={cls('my-6')}>Optimizing CSS for faster page loads </p>
        </h4>
      </aside>
      <article className="col-span-12 md:col-span-8 text-weesher-500 p-4">
        <div>
          <p className="text-[12px]">
            <span className=" text-weesher-100">Front-end </span>
            <span className=" text-weesher-500">. </span>
            <span className=" text-weesher-500">1 Hour ago</span>
          </p>
        </div>
        <h4
          className={cls(' text-weesher-600 font-bold my-2', inter.className)}
        >
          Optimizing CSS for faster page loads{' '}
        </h4>
        <p className="text-[14px]">
          Not long ago I decided to improve the loading times of my website. It
          already loads pretty fast, but I knew there was still room for
          improvement and one of them was CSS loading. I will walk you through
          the process and show you how you can improve your load times as well.
        </p>
        <p className="text-[14px] my-3">
          To see how CSS affects the load time of a webpage we first have to
          know how the browser converts an HTML document into a functional
          webpage...
        </p>
        <p className="flex justify-between items-center mt-5 mb-3 text-[12px] capitalize">
          <span>3 Min Read</span>
          <span className=" text-weesher-400 flex items-center">
            Read full <ArrowIcon />
          </span>
        </p>
      </article>
    </section>
  );
};

export default Banner;
