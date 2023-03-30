import {useDocumentTitle} from '../../hooks';
import {BgTable, FlowerFrame} from './components/decor';
import Contacts from './sections/Contacts';
import Greeting from './sections/Greeting';
import PreviewScreen from './sections/PreviewScreen';
import css from './style.module.scss';

export const Table = () => {
  useDocumentTitle('Welcome!');
  return (
    <section className={css['table']}>
      <div className={css['wrap']}>
        <Greeting gridPos={{gridColumn: '1 / 3', gridRow: '1 / 2'}}>
          ПРОШУ ЛЮБИТЬ И ЖАЛОВАТЬ!
        </Greeting>
        <Contacts gridPos={{gridColumn: '2 / 3', gridRow: '1 / 2'}} />
        <PreviewScreen
          gridPos={{gridColumn: '1 / 2', gridRow: '2 / 3', alignSelf: 'end'}}
        />
      </div>

      <BgTable />

      <FlowerFrame />
    </section>
  );
};
