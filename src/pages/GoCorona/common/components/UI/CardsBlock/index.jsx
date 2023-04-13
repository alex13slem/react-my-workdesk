import css from './style.module.scss';
import {formatClassName} from '../../../../../../utils';
import ComImage from '../../../../../../common/components/ComImage';

const CardsBlock = ({data = []}) => {
  return (
    <div className={css['root']}>
      <div className={css['content']}>
        {data.map(({id, content}) => (
          <article key={id} className={css['item']}>
            <ComImage src={content.img} className={css['image']} />
            <div className={css['title']}>{content.title}</div>
            <div className={css['text']}>{content.body}</div>
          </article>
        ))}
      </div>
      <div className={formatClassName(css['decor'], css['decor_1'])}></div>
      <div className={formatClassName(css['decor'], css['decor_2'])}></div>
      <div className={formatClassName(css['decor'], css['decor_3'])}></div>
      <div className={formatClassName(css['decor'], css['decor_4'])}></div>
    </div>
  );
};

export const setCardDataById = (data, cardId) =>
  data.filter((el) => el.id === cardId)[0].content;

export default CardsBlock;
