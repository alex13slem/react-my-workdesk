import {formatClassName} from '../../../../../../utils';
import css from './style.module.scss';

const AchievementBoard = ({items, className}) => {
  return (
    <div className={formatClassName(css['wrap'], className)}>
      <div className={formatClassName(css['decor'], css['decor_1'])}></div>
      <div className={formatClassName(css['decor'], css['decor_2'])}></div>
      <div className={formatClassName(css['decor'], css['decor_3'])}></div>
      <div className={css['board']}>
        {items.map((item) => (
          <div className={css['item']} key={item.id}>
            <p className={css['value']}>{item.firStr}</p>
            <p className={css['title']}>{item.secStr}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementBoard;
