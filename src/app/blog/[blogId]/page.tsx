import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import cls from 'classnames';

import Card from '../../components/card';
import ArrowIcon from '../../icons/arrow';

import { _getPost } from '@/app/api/getPost';
import { _getPosts } from '@/app/api/getPosts';

type BlogProp = {
  params: {
    blogId: string;
  };
};
const Blog = async ({ params }: BlogProp) => {
  const blog = await _getPost(params.blogId);
  const blogData = await _getPosts();
  return (
    <section>
      <Link href={'/blog'} className="flex items-center text-weesher-400">
        {' '}
        <span className=" -rotate-180">
          <ArrowIcon />
        </span>{' '}
        Back
      </Link>
      <article className=" md:px-20 xl:px-52 text-weesher-500">
        <p className="flex items-center text-[12px] gap-x-2">
          <span className="text-weesher-100">
            By {blog?.yoast_head_json?.author}
          </span>
          <span className="text-weesher-600">{blog.date.split('T')[0]}</span>
          <span className="text-weesher-600">{blog.primary_category.name}</span>
        </p>
        <h4
          className={cls(
            ' text-weesher-600 font-bold my-2 text-2xl',
            inter.className
          )}
        >
          {blog?.yoast_head_json.title}{' '}
        </h4>
        <p>{blog?.yoast_head_json?.description}</p>
        <p className="flex justify-center items-center my-10">
          <Image
            src={blog.yoast_head_json.og_image[0].url}
            alt=""
            // className="w-full h-full"
            width={blog?.yoast_head_json.og_image[0]?.width}
            height={blog?.yoast_head_json.og_image[0]?.height}
          />
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
        <h4 className={cls(inter.className, ' font-black text-xl my-3')}>
          More Articles
        </h4>
        <section className="block sm:grid grid-cols-12 gap-10 ">
          {blogData.map((blog, id) => (
            <Card key={id} item={blog} />
          ))}
        </section>
      </article>
    </section>
  );
};

export default Blog;
