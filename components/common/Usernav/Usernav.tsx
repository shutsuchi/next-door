import s from './Usernav.module.css';

import { FC } from 'react';
import Link from 'next/link';
import { Bag as Cart, Heart } from '@components/icons';

const Usernav: FC = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Link href='/'>
            <Cart />
          </Link>
        </li>
        <li className={s.item}>
          <Link href='/'>
            <Heart />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Usernav;
