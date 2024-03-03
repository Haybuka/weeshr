import React from 'react';
import CardBody from './cardBody';
import CardHead from './cardHead';
import Link from 'next/link';
import { Blogs } from '@/app/api/blogs';

type CardProp = {
  item: Blogs;
};
const Card = ({ item }: CardProp) => {
  return (
    <Link
      href={`/blog/${item.id}`}
      className="border-weesher-300 border p-1 rounded-md my-6 sm:my-0 sm:col-span-6 xl:col-span-4 "
    >
      <CardHead item={item} />
      <CardBody item={item} />
    </Link>
  );
};

export default Card;
