import css from './block-text.module.scss'

export const BlockTextGoCorona = ({ children, className }) => {
  return (
    <div className={[css['block-text'], className].join(' ')}>{children}</div>
  )
}

export const BlockTextGoCoronaTITLE = ({
  children,
  marker = 'red',
  className = ''
}) => {
  return (
    <div
      className={[
        css['block-text__title'],
        css[`marker-${marker}`],
        className
      ].join(' ')}>
      {children}
    </div>
  )
}

export const BlockTextGoCoronaTEXT = ({ children, className }) => {
  return (
    <div className={[css['block-text__text'], className].join(' ')}>
      {children}
    </div>
  )
}
