import navItems from '@/app/utils/navItems';
import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  return (
    <header>
      <nav className="flex justify-between items-center mb-12">
        <h3>
          <Image src={'/logo.png'} width={60} height={60} alt="" />
        </h3>
        <ul className="flex items-center">
          {navItems.map((item, id) => (
            <>
              <li key={id} className="mx-3">
                <Link href={''}>{item.icon}</Link>
              </li>
              {navItems.length - 1 !== id && <span>·</span>}
            </>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
