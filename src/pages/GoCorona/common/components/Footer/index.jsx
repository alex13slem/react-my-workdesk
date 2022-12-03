import { style } from '../../functions'
import css from './footer.module.scss'

import googleLogo from '../../../img/footer/1.svg'
import appleLogo from '../../../img/footer/2.svg'

const FooterGoCorona = () => {
  return (
    <footer className={style(css, 'footer')}>
      <div className={style(css, 'footer__container')}>
        <div className={style(css, 'footer__icons icons')}>
          <a href='#' className={style(css, 'icons__item')}>
            <img src={googleLogo} alt='google_play' />
          </a>
          <a href='#' className={style(css, 'icons__item')}>
            <img src={appleLogo} alt='app_store' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterGoCorona
