import s from './ProductCard.module.css';
import cn from 'classnames';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@common/types/product';

interface ProductCardProps {
  product: Product;
  variant?: 'simple' | 'slim';
  tagColor?: 'black' | 'white';
}

const placeholderImage = '/product-image-placeholder.svg';

const ProductCard: FC<ProductCardProps> = ({
  product,
  variant = 'simple',
  tagColor = 'black',
}) => {
  const tagClassName = cn(s.root, {
    [s.productName]: tagColor === 'black',
    [s.productNameSecondary]: tagColor === 'white',
  });

  return (
    <Link href={`/products/${product.slug}`}>
      <a className={s.root}>
        {variant === 'slim' ? (
          <>
            <div className={s.productNameBlock}>
              <span className={tagClassName}>{product.name}</span>
            </div>
            {product.images && (
              <Image
                className={s.productImage}
                alt={product.name ?? 'Product image'}
                src={product.images[0].url ?? placeholderImage}
                height={320}
                width={320}
                quality='85'
                layout='fixed'
              />
            )}
          </>
        ) : (
          <>
            <div className={s.productBg}></div>
            <div className={s.productTag}>
              <h3 className={s.productTitle}>
                <span>{product.name}</span>
              </h3>
              <span className={s.productPrice}>
                {product.price.value} {product.price.currencyCode}
              </span>
            </div>
            {product.images && (
              <Image
                className={s.productImage}
                alt={product.name ?? 'Product image'}
                src={product.images[0].url ?? placeholderImage}
                height={540}
                width={540}
                quality='85'
                layout='responsive'
              />
            )}
          </>
        )}
      </a>
    </Link>
  );
};

export default ProductCard;
