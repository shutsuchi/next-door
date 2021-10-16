import s from './wishlist.module.css';

import { Heart } from '@components/icons';
import { Layout } from '@components/common';
import { Container } from '@components/ui';

const Wishlist = () => {
  const isEmpty = true;

  return (
    <Container>
      <div className={s.wishlistRoot}>
        <div className={s.wishlistContainer}>
          {isEmpty ? (
            <div className={s.emptyBlock}>
              <span className={s.logoBlock}>
                <Heart className={s.logo} />
              </span>
              <h2 className={s.emptyMessage}>Your wishlist is empty</h2>
              <p className={s.emptySubMessage}>
                You can add items you want anytime and anywhere.
              </p>
            </div>
          ) : (
            <h1>Wishlist cards...</h1>
          )}
        </div>
      </div>
    </Container>
  );
};

Wishlist.Layout = Layout;

export default Wishlist;
