import css from './style.module.scss';
import {useDocumentTitle} from 'hooks';

import Contacts from './components/Contacts';
import Greeting from './components/Greeting';
import {SVGBgTable, SVGFlowerFrame} from './UI/SVGImages';
import PreviewScreen from './components/PreviewScreen';

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
