import {
  BlockTextGoCorona,
  BlockTextGoCoronaTEXT,
  BlockTextGoCoronaTITLE
} from '../../common/components/BlockText'
import { style } from '../../common/functions'
import css from './health-care.module.scss'

import cardImg1 from '../../img/healthcare/1.svg'
import cardImg2 from '../../img/healthcare/2.svg'
import cardImg3 from '../../img/healthcare/3.png'

const HealthCareGoCorona = () => {
  return (
    <section className={style(css, 'healthcare')}>
      <div className={style(css, 'healthcare__container')}>
        <BlockTextGoCorona className={style(css, 'healthcare__block-text')}>
          <BlockTextGoCoronaTITLE marker='red'>
            <span>Healthcare</span> at your Fingertips.
          </BlockTextGoCoronaTITLE>
          <BlockTextGoCoronaTEXT>
            Bringing premium healthcare features to your fingertips. User
            friendly mobile platform to bring healthcare to your fingertips.
            Signup and be a part of the new health culture.
          </BlockTextGoCoronaTEXT>
        </BlockTextGoCorona>
        <div className={style(css, 'healthcare__cards cards')}>
          <div className={style(css, 'cards__block')}>
            <article className={style(css, 'cards__item')}>
              <img
                src={cardImg1}
                alt='GoCorona'
                className={style(css, 'cards__image')}
              />
              <div className={style(css, 'cards__title')}>Symptom Checker</div>
              <div className={style(css, 'cards__text')}>
                Check if you are infected by <br />
                COVID-19 with our Symptom Checker
              </div>
            </article>
            <article className={style(css, 'cards__item')}>
              <img
                src={cardImg2}
                alt='GoCorona'
                className={style(css, 'cards__image')}
              />
              <div className={style(css, 'cards__title')}>
                24x7 Medical support
              </div>
              <div className={style(css, 'cards__text')}>
                Consult with 10,000+ health <br /> workers about your concerns.
              </div>
            </article>
            <article className={style(css, 'cards__item')}>
              <img
                src={cardImg3}
                alt='GoCorona'
                className={style(css, 'cards__image')}
              />
              <div className={style(css, 'cards__title')}>Conditions</div>
              <div className={style(css, 'cards__text')}>
                Bringing premium healthcare features to your fingertips.
              </div>
            </article>
          </div>
          <div className={style(css, 'cards__decor cards__decor_1')}></div>
          <div className={style(css, 'cards__decor cards__decor_2')}></div>
          <div className={style(css, 'cards__decor cards__decor_3')}></div>
          <div className={style(css, 'cards__decor cards__decor_4')}></div>
        </div>
      </div>
    </section>
  )
}

export default HealthCareGoCorona
