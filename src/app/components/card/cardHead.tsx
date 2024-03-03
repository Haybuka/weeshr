import Image from 'next/image';

const CardHead = () => {
  return (
    <article className=" text-weesher-500 p-1 bg-[#E5F4FF] flex justify-center items-center overflow-hidden rounded-sm">
      <Image src={'/monokai.png'} width={300} height={200} alt="" />
    </article>
  );
};

export default CardHead;
