import s from './ProductSlider.module.css';
import cn from 'classnames';

import {
  FC,
  Children,
  isValidElement,
  cloneElement,
  RefObject,
  useState,
} from 'react';
import { useKeenSlider } from 'keen-slider/react';

const ProductSlider: FC = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <div className={cn(s.root, 'fit')}>
      <div
        ref={sliderRef as RefObject<HTMLDivElement>}
        className={cn(s.slider, 'keen-slider')}
      >
        <button
          className={cn(s.leftControl, s.control)}
          onClick={slider?.prev}
        />
        <button
          className={cn(s.rightControl, s.control)}
          onClick={slider?.next}
        />
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            // MEMO: Structure is like below
            // return {
            //   ...child,
            //   props: {
            //     ...child.props,
            //     className: `${
            //       child.props.className ? child.props.className : ''
            //     } keen-slider__slide`,
            //   },
            // };

            return cloneElement(child, {
              className: `${
                child.props.className ? child.props.className : ''
              } keen-slider__slide`,
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
