import {formatClassName} from '../../../../utils';
import css from './style.module.scss';

const Greeting = ({children, className}) => {
  return (
    <section className={formatClassName(className, css['greeting'])}>
      <p>{children}</p>
    </section>
  );
};

export default Greeting;
