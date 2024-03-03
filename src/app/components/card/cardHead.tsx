'use client';
import { Blogs } from '@/app/api/blogs';
import Image from 'next/image';

type CardHeadProp = {
  item: Blogs;
};

const CardHead = ({ item }: CardHeadProp) => {
  const imgUrl = `${item?.yoast_head_json?.og_image[0].url}`;

  return (
    <article className=" text-weesher-500 p-1 bg-[#E5F4FF] flex justify-center items-center w-auto md:overflow-hidden rounded-sm">
      <Image
        src={item ? imgUrl : '/monokai.png'}
        width={300}
        height={200}
        alt=""
        className="w-full h-full"
      />
    </article>
  );
};

export default CardHead;
