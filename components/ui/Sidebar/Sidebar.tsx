import s from './Sidebar.module.css';

import { FC, MutableRefObject, useEffect, useRef } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

interface Props {
  children: any;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<Props> = ({ children, isOpen, onClose }) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (ref.current) {
      if (isOpen) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <div ref={ref} className={s.sidebarRoot}>
          <div className={s.sidebarContainer}>
            <div onClick={onClose} className={s.sidebarBg} />
            <section className={s.itemSection}>
              <div className={s.itemBlock}>
                <div className={s.itemScroll}>{children}</div>
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
