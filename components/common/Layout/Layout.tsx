import s from './Layout.module.css';
import { FC } from 'react';

const Layout: FC = ({ children }) => {

  return (
    <div className={s.root}>
      <main className='fit'>
        {children}
      </main>
    </div>
  );
};

export default Layout;