import HTMLReactParser from 'html-react-parser';
import css from './style.module.scss';

const CardsBlockSpaceX = ({data}) => {
  return (
    <section className={css['cards-block']}>
      {data.map((card) => (
        <div className={css['card']} key={card.id}>
          <p className={css['first-line']}>
            {HTMLReactParser(card['first-str'])}
          </p>
          <p className={css['second-line']}>
            {HTMLReactParser(card['second-str'])}
          </p>
          <p className={css['third-line']}>
            {HTMLReactParser(card['third-str'])}
          </p>
        </div>
      ))}
    </section>
  );
};

export default CardsBlockSpaceX;
