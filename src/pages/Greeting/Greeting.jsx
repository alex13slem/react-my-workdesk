import css from './style.module.scss';
import {Google} from './components/Google';

export const Greeting = () => {
  return (
    <section className={css['greeting']} id="greeting">
      <Google />
      <div className={css['hello']}>
        <p>Привет, друг!</p>
      </div>
    </section>
  );
};
