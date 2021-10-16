import s from './Container.module.css';

import { FC, ReactNode, ComponentType, HTMLAttributes } from 'react';

interface ContainerProps {
  children: ReactNode | ReactNode[];
  el?: ComponentType<HTMLAttributes<HTMLElement>>;
}

const Container: FC<ContainerProps> = ({ children, el: Component = 'div' }) => {
  return <Component className={s.container}>{children}</Component>;
};

export default Container;
