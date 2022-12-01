import css from './cards-block.module.scss'

const CardsBlockSpaceX = () => {
  return (
    <div className='cards-block main__cards'>
      <div className='cards-block__card card card_nth1'>
        <p className='card__first-line'>мы</p>
        <p className='card__second-line'>1</p>
        <p className='card__third-line'>на рынке</p>
      </div>
      <div className='cards-block__card card card_nth2'>
        <p className='card__first-line'>гарантируем</p>
        <p className='card__second-line'>50%</p>
        <p className='card__third-line'>безопасность</p>
      </div>
      <div className='cards-block__card card card_nth3'>
        <p className='card__first-line'>календарик за</p>
        <p className='card__second-line'>
          2001<span> г.</span>
        </p>
        <p className='card__third-line'>в подарок</p>
      </div>
      <div className='cards-block__card card card_nth4'>
        <p className='card__first-line'>путешествие</p>
        <p className='card__second-line'>597</p>
        <p className='card__third-line'>дней</p>
      </div>
    </div>
  )
}

export default CardsBlockSpaceX
