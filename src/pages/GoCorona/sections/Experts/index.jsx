import {
  BlockTextGoCorona,
  BlockTextGoCoronaTEXT,
  BlockTextGoCoronaTITLE
} from '../../common/components/BlockText'
import ButtonGoCorona from '../../common/components/Button'
import { style } from '../../common/functions'
import css from './experts.module.scss'

const ExpertsGoCorona = () => {
  return (
    <section className={style(css, 'experts')}>
      <div className={style(css, 'experts__container')}>
        <div className={style(css, 'experts__board board')}>
          <ul className={style(css, 'board__body')}>
            <li className={style(css, 'board__item')}>
              <div className={style(css, 'board__value')}>2m</div>
              <div className={style(css, 'board__title')}>Users</div>
            </li>
            <li className={style(css, 'board__item')}>
              <div className={style(css, 'board__value')}>78</div>
              <div className={style(css, 'board__title')}>Countries</div>
            </li>
            <li className={style(css, 'board__item')}>
              <div className={style(css, 'board__value')}>10,000+</div>
              <div className={style(css, 'board__title')}>Medical experts</div>
            </li>
          </ul>
          <div className={style(css, 'board__decor board__decor_1')}></div>
          <div className={style(css, 'board__decor board__decor_2')}></div>
          <div className={style(css, 'board__decor board__decor_3')}></div>
        </div>
        <div className={style(css, 'experts__content')}>
          <BlockTextGoCorona className={style(css, 'experts__block-text')}>
            <BlockTextGoCoronaTITLE marker='blue'>
              Talk to <span>experts.</span>
            </BlockTextGoCoronaTITLE>
            <BlockTextGoCoronaTEXT>
              Book appointments or submit queries into thousands of forums
              concerning health issues and prevention against noval Corona
              Virus.
            </BlockTextGoCoronaTEXT>
            <div className={style(css, 'block-text__button')}>
              <ButtonGoCorona href='#' className={style(css, 'button')}>
                Features
              </ButtonGoCorona>
            </div>
          </BlockTextGoCorona>
          <div className={style(css, 'experts__video video-player')}>
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
  )
}

export default ExpertsGoCorona
