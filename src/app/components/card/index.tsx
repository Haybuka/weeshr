import React from 'react';
import CardBody from './cardBody';
import CardHead from './cardHead';

const Card = () => {
  return (
    <div className="border-weesher-300 border p-1 rounded-md my-6 sm:my-0 sm:col-span-6 xl:col-span-4 ">
      <CardHead />
      <CardBody />
    </div>
  );
};

export default Card;
