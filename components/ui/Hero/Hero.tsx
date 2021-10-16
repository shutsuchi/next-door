import s from './Hero.module.css';

import { FC } from 'react';
import Link from 'next/link';
import { Container } from '@components/ui';

interface HeroProps {
  headline: string;
  description: string;
}

const Hero: FC<HeroProps> = ({ headline, description }) => {
  return (
    <div className='bg-black'>
      <Container el={`div` as any}>
        <div className={s.root}>
          <h2 className={s.headline}>{headline}</h2>
          <div className={s.descriptionBlock}>
            <p className={s.description}>{description}</p>
            <Link href='/'>
              <a className={s.link}>Read it here</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
