import HeaderGoCorona from './assets/components/Header'
import css from './go-corona.module.scss'
import GetStartedGoCorona from './sections/GetStarted'
import StaySafeGoCorona from './sections/StaySafe'

const GoCorona = () => {
  return (
    <div className={css['body']}>
      <div className={css['wrapper']}>
        <HeaderGoCorona />
        <main className={css['main']}>
          <GetStartedGoCorona />
          <StaySafeGoCorona />
          <section className={css['experts']}>
            <div className={css['experts__container']}>
              <div className={css['experts__board board']}>
                <ul className={css['board__body']}>
                  <li className={css['board__item']}>
                    <div className={css['board__value']}>2m</div>
                    <div className={css['board__title']}>Users</div>
                  </li>
                  <li className='board__item'>
                    <div className={css['board__value']}>78</div>
                    <div className={css['board__title']}>Countries</div>
                  </li>
                  <li className={css['board__item']}>
                    <div className={css['board__value']}>10,000+</div>
                    <div className={css['board__title']}>Medical experts</div>
                  </li>
                </ul>
                <div className={css['board__decor board__decor1']}></div>
                <div className={css['board__decor board__decor2']}></div>
                <div className={css['board__decor board__decor3']}></div>
              </div>
              <div className={css['experts__content']}>
                <div className={css['experts__block-text block-text']}>
                  <div
                    className={css['block-text__title block-text__title_blue']}>
                    Talk to <span>experts.</span>
                  </div>
                  <div className={css['block-text__text']}>
                    Book appointments or submit queries into thousands of forums
                    concerning health issues and prevention against noval Corona
                    Virus.
                  </div>
                  <div className={css['block-text__button']}>
                    <a href='' className={css['button']}>
                      Features
                    </a>
                  </div>
                </div>
                <div className={css['experts__video video-player']}>
                  <iframe
                    width='560'
                    height='315'
                    src='https://www.youtube.com/embed/dcJDpV-igjs'
                    title='YouTube video player'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </section>
          <section className={css['healthcare']}>
            <div className={css['healthcare__container']}>
              <div className={css['healthcare__block-text block-text']}>
                <div className={css['block-text__title block-text__title_red']}>
                  <span>Healthcare</span> at your Fingertips.
                </div>
                <div className={css['block-text__text']}>
                  Bringing premium healthcare features to your fingertips. User
                  friendly mobile platform to bring healthcare to your
                  fingertips. Signup and be a part of the new health culture.
                </div>
              </div>
              <div className={css['healthcare__cards cards']}>
                <div className={css['cards__block']}>
                  <article className={css['cards__item']}>
                    <img
                      src='img/healthcare/1.svg'
                      alt='GoCorona'
                      className={css['cards__image']}
                    />
                    <div className={css['cards__title']}>Symptom Checker</div>
                    <div className={css['cards__text']}>
                      Check if you are infected by <br />
                      COVID-19 with our Symptom Checker
                    </div>
                  </article>
                  <article className={css['cards__item']}>
                    <img
                      src='img/healthcare/2.svg'
                      alt='GoCorona'
                      className={css['cards__image']}
                    />
                    <div className={css['cards__title']}>
                      24x7 Medical support
                    </div>
                    <div className={css['cards__text']}>
                      Consult with 10,000+ health <br /> workers about your
                      concerns.
                    </div>
                  </article>
                  <article className={css['cards__item']}>
                    <img
                      src='img/healthcare/3.png'
                      alt='GoCorona'
                      className={css['cards__image']}
                    />
                    <div className={css['cards__title']}>Conditions</div>
                    <div className={css['cards__text']}>
                      Bringing premium healthcare features to your fingertips.
                    </div>
                  </article>
                </div>
                <div className={css['cards__decor cards__decor1']}></div>
                <div className={css['cards__decor cards__decor2']}></div>
                <div className={css['cards__decor cards__decor3']}></div>
                <div className={css['cards__decor cards__decor4']}></div>
              </div>
            </div>
          </section>
        </main>
        <footer className={css['footer']}>
          <div className={css['footer__container']}>
            <div className={css['footer__icons icons']}>
              <a href='#' className={css['icons__item']}>
                <img src='./img/footer/1.svg' alt='google_play' />
              </a>
              <a href='#' className={css['icons__item']}>
                <img src='./img/footer/2.svg' alt='app_store' />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default GoCorona
