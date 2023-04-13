import {useDocumentTitle} from '../../hooks';
import {SVGBgTable, SVGFlowerFrame} from './img';
import Contacts from './sections/Contacts';
import Greeting from './sections/Greeting';
import PreviewScreen from './sections/PreviewScreen';
import css from './style.module.scss';

const Home = () => {
  useDocumentTitle('Welcome!');
  return (
    <main className={css['home']}>
      <Greeting className={css['sect-greeting']}>
        ПРОШУ ЛЮБИТЬ И ЖАЛОВАТЬ!
      </Greeting>
      <Contacts className={css['sect-contacts']} />
      <PreviewScreen className={css['sect-screen']} />

      <SVGBgTable className={css['bg']} />

      <SVGFlowerFrame className={css['flower-frame']} />
    </main>
  );
};

export default Home;
