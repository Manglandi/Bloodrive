import React from 'react'
import './button.css'

const Button = ({ bgColor, color, text }) => {

    const style = {
        backgroundColor: bgColor,
        color: color
    }

  return (
    <button className='rc-blood-btn' style={style}>{text}</button>
  )
}

export default Button