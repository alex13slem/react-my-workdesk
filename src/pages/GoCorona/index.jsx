import FooterGoCorona from './common/components/Footer'
import HeaderGoCorona from './common/components/Header'
import css from './go-corona.module.scss'
import ExpertsGoCorona from './sections/Experts'
import GetStartedGoCorona from './sections/GetStarted'
import HealthCareGoCorona from './sections/HealthCare'
import StaySafeGoCorona from './sections/StaySafe'

const GoCorona = () => {
  return (
    <div className={css['body']}>
      <div className={css['wrapper']}>
        <HeaderGoCorona />
        <main className={css['main']}>
          <GetStartedGoCorona />
          <StaySafeGoCorona />
          <ExpertsGoCorona />
          <HealthCareGoCorona />
        </main>
        <FooterGoCorona />
      </div>
    </div>
  )
}

export default GoCorona
