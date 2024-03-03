import { Inter, Poppins } from 'next/font/google';
import cls from 'classnames';
import ArrowIcon from '@/app/icons/arrow';
import { Blogs } from '@/app/api/blogs';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['900', '400'], subsets: ['latin'] });

type CardBodyProp = {
  item: Blogs;
};

const CardBody = ({ item }: CardBodyProp) => {
  return (
    <article className={cls(poppins.className, 'text-weesher-500 p-1 mt-2')}>
      <div>
        <p className="text-[12px]">
          <span className=" text-weesher-100">
            {item.yoast_head_json?.article_section?.map((art, id) => art)}{' '}
          </span>
          <span className=" text-weesher-500">. </span>
          <span className=" text-weesher-500">1 Hour ago</span>
        </p>
      </div>
      <h4 className={cls(' text-weesher-600 font-black my-2', inter.className)}>
        {item?.yoast_head_json?.title}
      </h4>
      <p className="text-[14px] my-3 text-weesher-500">
        {item?.yoast_head_json?.description}
      </p>
      <p className="flex justify-between items-center mt-5 mb-3 text-[12px] capitalize">
        <span>
          {item?.yoast_head_json?.twitter_misc['Est. reading time']} Read
        </span>
        <span className=" text-weesher-400 flex items-center">
          Read full <ArrowIcon />
        </span>
      </p>
    </article>
  );
};

export default CardBody;
