import s from './Button.module.css';
import cn from 'classnames';

import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
}

const Button: FC<ButtonProps> = ({ children, className, ...otherProps }) => {
  return (
    <button className={cn(s.root, className)} type='button' {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
