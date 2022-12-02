import css from './cards-block.module.scss'

import cards from '../../data/cardsBlock.json'
import HTMLReactParser from 'html-react-parser'

const CardsBlockSpaceX = () => {
  return (
    <div className={css['cards-block']}>
      {cards.map((card) => (
        <div className={css['card']} key={card.id}>
          <p className={css['first-line']}>
            {HTMLReactParser(card['first-str'])}
          </p>
          <p className={css['second-line']}>
            {HTMLReactParser(card['second-str'])}
          </p>
          <p className={css['third-line']}>
            {HTMLReactParser(card['third-str'])}
          </p>
        </div>
      ))}
    </div>
  )
}

export default CardsBlockSpaceX
