import css from './block-text.module.scss'

export const BlockTextGoCorona = ({ children, className }) => {
  return (
    <div className={[css['block-text'], className].join(' ')}>{children}</div>
  )
}

export const BlockTextGoCoronaTITLE = ({
  priority,
  children,
  marker = 'red',
  className = ''
}) => {
  const CustomTag = `h${priority}`
  return (
    <CustomTag
      className={[
        css['block-text__title'],
        css[`marker-${marker}`],
        className
      ].join(' ')}>
      {children}
    </CustomTag>
  )
}

export const BlockTextGoCoronaTEXT = ({ children, className, tag = 'p' }) => {
  const CustomTag = `${tag}`
  return (
    <CustomTag className={[css['block-text__text'], className].join(' ')}>
      {children}
    </CustomTag>
  )
}
