import cn from 'classnames';
import s from './ProductView.module.css';

import { FC, useState } from 'react';
import Image from 'next/image';
import { Button, Container } from '@components/ui';
import { Product } from '@common/types/product';
import { ProductSlider, Swatch } from '@components/product';
import { Choices, getVariant } from '../helpers';
import { useUIContext } from '@components/ui/context';
import useAddItem from '@framework/cart/use-add-item';

interface ProductViewProps {
  product: Product;
}

const ProductView: FC<ProductViewProps> = ({ product }) => {
  const [choices, setChoices] = useState<Choices>({});

  const { openSidebar } = useUIContext();
  const addItem = useAddItem();

  const variant = getVariant(product, choices);

  const addToCart = async () => {
    try {
      const item = {
        productId: String(product.id),
        variantId: variant?.id,
        variantOptions: variant?.options,
      };
      const output = await addItem(item);
      console.log(JSON.stringify(output, null, 2));

      openSidebar();
    } catch (error) {}
  };

  return (
    <Container>
      <div className={cn(s.root, 'fit')}>
        <div className={cn(s.productDisplay, 'fit')}>
          <div className={s.nameBox}>
            <h1 className={s.name}>{product.name}</h1>
            <div
              className={s.price}
            >{`${product.price.value} ${product.price.currencyCode}`}</div>
          </div>
          <ProductSlider>
            {product.images.map((image) => (
              <div key={image.url} className={s.imageContainer}>
                <Image
                  className={s.img}
                  src={image.url}
                  alt={image.alt}
                  width={1050}
                  height={1050}
                  quality='85'
                />
              </div>
            ))}
          </ProductSlider>
        </div>
        <div className={s.sidebar}>
          <section>
            {product.options.map((option) => (
              <div key={option.id} className='pb-4'>
                <h2 className={s.color}>{option.displayName}</h2>
                <div className={s.variantOptions}>
                  {option.values.map((optValue) => {
                    const activeChoice =
                      choices[option.displayName.toLowerCase()];

                    return (
                      <Swatch
                        key={`${option.id}-${optValue.label}`}
                        label={optValue.label}
                        color={optValue.hexColor}
                        variant={option.displayName}
                        isActive={optValue.label.toLowerCase() === activeChoice}
                        onClick={() => {
                          setChoices({
                            ...choices,
                            [option.displayName.toLowerCase()]:
                              optValue.label.toLowerCase(),
                          });
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
            <div className={s.description}>{product.description}</div>
          </section>
          <div>
            <Button className={s.button} onClick={addToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductView;
