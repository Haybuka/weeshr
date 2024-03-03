import Link from 'next/link';

import TwitterIcon from '../icons/twitter';
import DribbleIcon from '../icons/dribble';
import GithubIcon from '../icons/github';
import FigmaIcon from '../icons/figma';

const DesktopNav = () => {
  const navItems = [
    {
      name: 'twitter',
      icon: '',
    },
  ];
  return (
    <header>
      <nav>
        <h3>Dasdas</h3>
        <ul>
          <li>
            <Link href={''}>
              <TwitterIcon />
              <DribbleIcon />
              <GithubIcon />
              <FigmaIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default DesktopNav;
