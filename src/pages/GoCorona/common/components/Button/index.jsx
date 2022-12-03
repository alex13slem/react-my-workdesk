import { useState } from 'react'
import css from './button.module.scss'

const ButtonGoCorona = ({ children, href, className, blue }) => {
  const [hover, setHover] = useState(false)

  const blueStyle = !blue
    ? {}
    : {
        backgroundColor: !hover ? '#4285f4' : '#5795f8'
      }

  // console.log(blueStyle)
  return (
    <a
      href={href}
      className={[css['button'], className].join(' ')}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={blueStyle}>
      {children}
    </a>
  )
}

export default ButtonGoCorona
