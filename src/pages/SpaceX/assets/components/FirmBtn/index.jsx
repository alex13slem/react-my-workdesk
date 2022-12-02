import css from './firm-btn.module.scss'

const BtnSpaceX = ({
  text = 'Нажми',
  content = '',
  className = '',
  red = false
}) => {
  const bgRed = !red
    ? {}
    : {
        backgroundColor: 'rgba(111, 0, 0, 0.666)'
      }
  return (
    <button
      type='button'
      className={[css['firm-btn'], className].join(' ')}
      style={bgRed}>
      {text}
      {content}
    </button>
  )
}

export default BtnSpaceX
