import { Inter, Playfair_Display } from 'next/font/google';
import cls from 'classnames';
import ArrowIcon from '@/app/icons/arrow';

const playFair = Playfair_Display({ weight: '900', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const CardBody = () => {
  return (
    <article className=" text-weesher-500 p-1 mt-2">
      <div>
        <p className="text-[12px]">
          <span className=" text-weesher-100">Front-end </span>
          <span className=" text-weesher-500">. </span>
          <span className=" text-weesher-500">1 Hour ago</span>
        </p>
      </div>
      <h4 className={cls(' text-weesher-600 font-bold my-2', inter.className)}>
        Optimizing CSS for faster page loads{' '}
      </h4>
      <p className="text-[14px] my-3 text-weesher-500">
        Colors play a vital role in making a web page usable or not. In CSS, we
        can control the foreground and background color of an element with the
        color and background properties.
      </p>
      <p className="flex justify-between items-center mt-5 mb-3 text-[12px] capitalize">
        <span>3 Min Read</span>
        <span className=" text-weesher-400 flex items-center">
          Read full <ArrowIcon />
        </span>
      </p>
    </article>
  );
};

export default CardBody;
