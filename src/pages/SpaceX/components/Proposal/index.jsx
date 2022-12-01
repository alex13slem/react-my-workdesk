import BtnSpaceX from '../../assets/components/FirmBtn'
import css from './proposal.module.scss'

const ProposalSpaceX = () => {
  return (
    <div class='proposal main__proposal'>
      <p class='proposal__text'>
        <span>Путeшествие</span>
        <br />
        на красную планету
      </p>

      <BtnSpaceX
        text={'Начать путешествие'}
        content={<span></span>}
        className={'proposal__btn firm-btn'}
        red
      />
    </div>
  )
}

export default ProposalSpaceX
