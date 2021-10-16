import s from './Grid.module.css';
import cn from 'classnames';

import { FC, ReactNode } from 'react';

interface GridProps {
  children: ReactNode[];
  layout?: 'A' | 'B';
}

const Grid: FC<GridProps> = ({ children, layout = 'A' }) => {
  const rootClassName = cn(s.root, {
    [s.layoutA]: layout === 'A',
    [s.layoutB]: layout === 'B',
  });

  return <div className={rootClassName}>{children}</div>;
};

export default Grid;
