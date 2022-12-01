import css from './header.module.scss'

const HeaderSpaceX = () => {
  return (
    <header className='header'>
      <div className='header__wrap'>
        <nav className='navbar'>
          <a className='site-logo' href='javascript:void(0)'>
            <picture>
              <source srcset='image/spacex_logo.webp' type='image/webp' />
              <img
                className='site-logo__img'
                src='image/spacex_logo.png'
                alt='SpaceX'
              />
            </picture>
          </a>
          <input type='checkbox' name='burger' id='burger-toggle' />
          <button className='navbar__toggler'>
            <label for='burger-toggle'>
              <span className='navbar__toggler-icon'>
                <svg xmlnsName='http://www.w3.org/2000/svg' viewBox='0 0 30 30'>
                  <path
                    stroke='rgba(0, 0, 0, 0.5)'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-miterlimit='10'
                    d='M4 7h22M4 15h22M4 23h22'
                  />
                </svg>
              </span>
            </label>
          </button>

          <div className='navbar-nav__collapse'>
            <div className='navbar-nav'>
              <a className='navbar-nav__item' href='javascript:void(0)'>
                Главная
              </a>
              <a className='navbar-nav__item' href='javascript:void(0)'>
                Технология
              </a>
              <a className='navbar-nav__item' href='javascript:void(0)'>
                График полётов
              </a>
              <a className='navbar-nav__item' href='javascript:void(0)'>
                Гарантии
              </a>
              <a className='navbar-nav__item' href='javascript:void(0)'>
                О компании
              </a>
              <a className='navbar-nav__item' href='javascript:void(0)'>
                Контакты
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default HeaderSpaceX
