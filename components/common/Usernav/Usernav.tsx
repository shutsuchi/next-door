import s from './Usernav.module.css';

import { FC } from 'react';
import Link from 'next/link';
import { Bag as Cart, Heart } from '@components/icons';
import { useUIContext } from '@components/ui/context';

const Usernav: FC = () => {
  const { openSidebar } = useUIContext();

  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Cart onClick={openSidebar} />
        </li>
        <li className={s.item}>
          <Link href='/wishlist'>
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Usernav;
