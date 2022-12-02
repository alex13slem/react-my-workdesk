import HeaderSpaceX from './assets/components/Header'
import CardsBlockSpaceX from './components/CardsBlock'
import ProposalSpaceX from './components/Proposal'

import css from './space-x.module.scss'

const SpaceX = () => {
  return (
    <div className={css['body']}>
      <HeaderSpaceX />
      <main className={css['main']}>
        <div className={css['wrap']}>
          <ProposalSpaceX />
          <CardsBlockSpaceX />
        </div>
      </main>
    </div>
  )
}

export default SpaceX
