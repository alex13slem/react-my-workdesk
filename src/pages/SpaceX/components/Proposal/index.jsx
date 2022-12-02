import BtnSpaceX from '../../assets/components/FirmBtn'
import css from './proposal.module.scss'

const ProposalSpaceX = () => {
  return (
    <div className={css['proposal']}>
      <p className={css['text']}>
        <span>Путeшествие</span>
        <br />
        на красную планету
      </p>

      <BtnSpaceX
        text={'Начать путешествие'}
        content={<span></span>}
        className={css['btn']}
      />
    </div>
  )
}

export default ProposalSpaceX
