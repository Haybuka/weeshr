import React from 'react';
import CardBody from './cardBody';
import CardHead from './cardHead';

const Card = () => {
  return (
    <div className="border-weesher-300 border p-1 rounded-md  sm:col-span-6 md:col-span-4 bg-yellow-500">
      <CardHead />
      <CardBody />
    </div>
  );
};

export default Card;
