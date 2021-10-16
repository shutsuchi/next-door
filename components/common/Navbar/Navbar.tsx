import s from './Navbar.module.css';

import { FC } from 'react';
import Link from 'next/link';
import { Container } from '@components/ui';
import { Usernav } from '@components/common';

const Navbar: FC = () => {
  return (
    <Container>
      <div className={s.navRoot}>
        <div className={s.navContainer}>
          <Link href='/'>
            <a className={s.logo}>NEXT_DOOR</a>
          </Link>
          <nav className={s.linkContainer}>
            <Link href='/'>
              <a className={s.link}>All</a>
            </Link>
            <Link href='/'>
              <a className={s.link}>Clothes</a>
            </Link>
            <Link href='/'>
              <a className={s.link}>Accesories</a>
            </Link>
            <Link href='/'>
              <a className={s.link}>Shoes</a>
            </Link>
          </nav>
          <div className={s.usernav}>
            <Usernav />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
