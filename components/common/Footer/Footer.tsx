import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footerRoot}>
      <div className={s.footerContainer}>
        <div className={s.itemContainer}>
          <div className={s.itemBlock}>
            <p
              className={s.item}
            >{`©︎ ${new Date().getFullYear()} Shutsuchi`}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
