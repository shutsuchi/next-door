import { InferGetStaticPropsType } from 'next';
import { getConfig } from '@framework/api/config';
import getAllProducts from '@framework/product/get-all-products';
import { Layout } from '@components/common';
import { ProductCard } from '@components/product';
import { Grid, Hero, Marquee } from '@components/ui';

export const getStaticProps = async () => {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
};

export const Home = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline='The best look anytime anywhere'
        description='Anyone can get dressed up and glamorous, but it is how people dress in thir days off that are the most intriguing.'
      />
      <Marquee>
        {products.slice(0, 3).map((product) => (
          <ProductCard
            key={product.id}
            variant='slim'
            tagColor='white'
            product={product}
          />
        ))}
      </Marquee>
      <Grid layout='B'>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Marquee variant='secondary'>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} variant='slim' product={product} />
        ))}
      </Marquee>
    </>
  );
};

Home.Layout = Layout;

export default Home;
