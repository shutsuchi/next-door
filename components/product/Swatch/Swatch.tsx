import s from './Swatch.module.css';
import cn from 'classnames';

import { FC } from 'react';
import { Check } from '@components/icons';
import { isDark } from '@lib/color';

interface SwatchProps {
  color?: string;
  label?: string;
  variant?: 'size' | 'color' | string;
  isActive?: boolean;
  onClick: () => void;
}

const Swatch: FC<SwatchProps> = ({
  color,
  label,
  variant,
  isActive,
  ...otherProps
}) => {
  label = label?.toLowerCase();
  variant = variant?.toLocaleLowerCase();

  const rootClassName = cn(s.root, {
    [s.active]: isActive,
    [s.color]: color,
    [s.size]: variant === 'size',
    [s.dark]: color && isDark(color),
  });

  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      className={rootClassName}
      {...otherProps}
    >
      {variant === 'color' && isActive && (
        <span>
          <Check />
        </span>
      )}
      {variant === 'size' ? label : null}
    </button>
  );
};

export default Swatch;
