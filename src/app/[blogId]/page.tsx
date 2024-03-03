import Image from 'next/image';
import { Inter, Playfair_Display } from 'next/font/google';
import cls from 'classnames';
import Card from '../components/card';

const inter = Inter({ subsets: ['latin'] });

type BlogProp = {
  params: {
    blogId: string;
  };
};
const Blog = ({ params }: BlogProp) => {
  return (
    <section>
      <article className=" px-52 text-weesher-500">
        <p className="flex items-center text-[12px] gap-x-2">
          <span className="text-weesher-100">By Ryan Jackson</span>
          <span className="text-weesher-600">{params.blogId} Month Ago</span>
        </p>
        <h4
          className={cls(
            ' text-weesher-600 font-bold my-2 text-2xl',
            inter.className
          )}
        >
          Optimizing CSS for faster page loads{' '}
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non
          blandit massa enim. Pulvinar sapien et ligula ullamcorper malesuada
          proin libero nunc consequat. Aliquam sem fringilla ut morbi tincidunt
          augue interdum velit. Tellus elementum sagittis vitae et leo duis ut
          diam. Eget nullam non nisi est sit amet. Dignissim suspendisse in est
          ante in nibh mauris. Nec feugiat in fermentum posuere urna. Diam in
          arcu cursus euismod quis viverra. Facilisis mauris sit amet massa
          vitae tortor condimentum lacinia. Diam quam nulla porttitor massa id
          neque aliquam vestibulum morbi. Sed egestas egestas fringilla
          phasellus faucibus scelerisque eleifend. Sed elementum tempus egestas
          sed sed risus pretium quam vulputate. Lacus sed turpis tincidunt id
          aliquet risus feugiat in ante. Viverra nibh cras pulvinar mattis nunc
          sed blandit libero. Morbi tincidunt augue interdum velit euismod in.
          Accumsan lacus vel facilisis volutpat est velit egestas dui. Erat
          pellentesque adipiscing commodo elit at imperdiet. Quis risus sed
          vulputate odio ut. Nulla aliquet enim tortor at auctor urna.
        </p>
        <p className="flex justify-center items-center my-10">
          <Image src={'/monokai.png'} alt="" width={500} height={330} />
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non
          blandit massa enim. Pulvinar sapien et ligula ullamcorper malesuada
          proin libero nunc consequat. Aliquam sem fringilla ut morbi tincidunt
          augue interdum velit. Tellus elementum sagittis vitae et leo duis ut
          diam. Eget nullam non nisi est sit amet. Dignissim suspendisse in est
          ante in nibh mauris. Nec feugiat in fermentum posuere urna. Diam in
          arcu cursus euismod quis viverra. Facilisis mauris sit amet massa
          vitae tortor condimentum lacinia. Diam quam nulla porttitor massa id
          neque aliquam vestibulum morbi. Sed egestas egestas fringilla
          phasellus faucibus scelerisque eleifend.
        </p>
        <p className="my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non
          blandit massa enim. Pulvinar sapien et ligula ullamcorper malesuada
          proin libero nunc consequat. Aliquam sem fringilla ut morbi tincidunt
          augue interdum velit. Tellus elementum sagittis vitae et leo duis ut
          diam. Eget nullam non nisi est sit amet. Dignissim suspendisse in est
          ante in nibh mauris. Nec feugiat in fermentum posuere urna. Diam in
          arcu cursus euismod quis viverra. Facilisis mauris sit amet massa
          vitae tortor condimentum lacinia. Diam quam nulla porttitor massa id
          neque aliquam vestibulum morbi. Sed egestas egestas fringilla
          phasellus faucibus scelerisque eleifend. Sed elementum tempus egestas
          sed sed risus pretium quam vulputate. Lacus sed turpis tincidunt id
          aliquet risus feugiat in ante. Viverra nibh cras pulvinar mattis nunc
          sed blandit libero. Morbi tincidunt augue interdum velit euismod in.
          Accumsan lacus vel facilisis volutpat est velit egestas dui. Erat
          pellentesque adipiscing commodo elit at imperdiet. Quis risus sed
          vulputate odio ut. Nulla aliquet enim tortor at auctor urna.
        </p>
      </article>
      <article>
        <h4 className=" font-black text-xl">More Articles</h4>
        <Card item={1} />
      </article>
    </section>
  );
};

export default Blog;