import ComBtn from 'comComponents/ComBtn';
import css from './style.module.scss';

const BtnTrigger = ({svg, title, description, ...args}) => {
  return (
    <ComBtn className={css['root']} {...args}>
      {svg}
      <div className={css['body']}>
        <div className={css['title']}>{title}</div>
        <div className={css['text']}>{description}</div>
      </div>
    </ComBtn>
  );
};

export default BtnTrigger;
