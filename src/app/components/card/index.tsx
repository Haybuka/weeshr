import React from 'react';
import CardBody from './cardBody';
import CardHead from './cardHead';

const Card = () => {
  return (
    <div className="border-weesher-300 border p-1 rounded-md col-span-4">
      <CardHead />
      <CardBody />
    </div>
  );
};

export default Card;
