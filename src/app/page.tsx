'use client';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
const Home = () => {
  useEffect(() => {
    redirect('/blog');
  }, []);
  return <div>Home</div>;
};

export default Home;
