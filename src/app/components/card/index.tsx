import React from 'react';
import CardBody from './cardBody';
import CardHead from './cardHead';
import Link from 'next/link';

type CardProp = {
  item: number;
};
const Card = ({ item }: CardProp) => {
  return (
    <Link
      href={`${item}`}
      className="border-weesher-300 border p-1 rounded-md my-6 sm:my-0 sm:col-span-6 xl:col-span-4 "
    >
      <CardHead />
      <CardBody />
    </Link>
  );
};

export default Card;
