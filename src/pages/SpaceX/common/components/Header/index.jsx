import css from './header.module.scss'
import logo from '../../../img/spacex_logo.webp'
import { Link } from 'react-router-dom'

const HeaderSpaceX = () => {
  return (
    <header className={css['header']}>
      <div className={css['wrap']}>
        <nav className={css['navbar']}>
          <a className={css['site-logo']}>
            <img className={css['img']} src={logo} alt='SpaceX' />
          </a>
          <input type='checkbox' name='burger' id='burger-toggle' />
          <button className={css['toggler']}>
            <label htmlFor='burger-toggle'>
              <span className={css['toggler-icon']}>
                <svg xmlnsname='http://www.w3.org/2000/svg' viewBox='0 0 30 30'>
                  <path
                    stroke='rgba(0, 0, 0, 0.5)'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeMiterlimit='10'
                    d='M4 7h22M4 15h22M4 23h22'
                  />
                </svg>
              </span>
            </label>
          </button>

          <div className={css['collapse']}>
            <div className={css['navbar-nav']}>
              <Link className={css['item']} to={'/'}>
                Главная
              </Link>
              <Link className={css['item']} to={'/'}>
                Технология
              </Link>
              <Link className={css['item']} to={'/'}>
                График полётов
              </Link>
              <Link className={css['item']} to={'/'}>
                Гарантии
              </Link>
              <Link className={css['item']} to={'/'}>
                О компании
              </Link>
              <Link className={css['item']} to={'/'}>
                Контакты
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default HeaderSpaceX
