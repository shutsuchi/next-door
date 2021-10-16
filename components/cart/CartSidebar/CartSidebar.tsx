import s from './CartSidebar.module.css';
import cn from 'classnames';

import { FC } from 'react';
import { Bag, Cross } from '@components/icons';
import { useUIContext } from '@components/ui/context';

const CartSidebar: FC = () => {
  const isEmpty = true;
  const { closeSidebar } = useUIContext();

  const rootClass = cn(s.cartSidebarRoot, {
    [s.secondaryColor]: isEmpty,
  });

  return (
    <div className={rootClass}>
      <header className={s.headerContainer}>
        <div className={s.buttonWrap}>
          <div className={s.buttonBlock}>
            <button onClick={closeSidebar} className={s.button}>
              <Cross className={s.clossIcon} />
            </button>
          </div>
        </div>
      </header>

      {isEmpty ? (
        <div className={s.emptyBlock}>
          <span className={s.logoBlock}>
            <Bag className={s.logo} />
          </span>
          <h2 className={s.emptyMessage}>Your cart is empty</h2>
          <p className={s.emptySubMessage}>
            You can add items you want anytime and anywhere.
          </p>
        </div>
      ) : (
        <>
          <div className={s.titleBlock}>
            <h2 className={s.title}>My Cart</h2>
            <ul className={s.subtitle}>Cart Items Here!</ul>
          </div>
          <div className={s.contentWrap}>
            <div className={s.contentBlock}>
              <ul className={s.contentList}>
                <li className={s.contentItem}>
                  <span>Subtotal</span>
                  <span>20$</span>
                </li>
                <li className={s.contentItem}>
                  <span>Taxes</span>
                  <span>Calculated at checkout</span>
                </li>
                <li className={s.contentItem}>
                  <span>Estimated Shipping</span>
                  <span className={s.freeText}>FREE</span>
                </li>
              </ul>
              <div className={s.totalCost}>
                <span>Total</span>
                <span>120$</span>
              </div>
            </div>
            <button
              onClick={() => {
                alert('Going to checkout!');
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
