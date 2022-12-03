import css from './stay-safe.module.scss'

import mobileAppImg from '../../img/stay-safe/image.png'
import ButtonGoCorona from '../../common/components/Button'
import {
  BlockTextGoCorona,
  BlockTextGoCoronaTEXT,
  BlockTextGoCoronaTITLE
} from '../../common/components/BlockText'

const StaySafeGoCorona = () => {
  return (
    <section className={css['stay-safe']}>
      <div className={css['stay-safe__container']}>
        <img src={mobileAppImg} alt='Stay Safe' />
        <BlockTextGoCorona className={css['block-text']}>
          <BlockTextGoCoronaTITLE className={css['block-text__title']}>
            Stay safe with Go<span>Corona.</span>
          </BlockTextGoCoronaTITLE>
          <BlockTextGoCoronaTEXT className={css['block-text__text']}>
            24x7 Support and user friendly mobile platform to bring healthcare
            to your fingertips. Signup and be a part of the new health culture.
          </BlockTextGoCoronaTEXT>
          <div className={css['block-text__button']}>
            <ButtonGoCorona href='#'>Features</ButtonGoCorona>
          </div>
        </BlockTextGoCorona>
      </div>
    </section>
  )
}

export default StaySafeGoCorona
