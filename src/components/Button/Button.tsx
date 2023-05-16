import React from 'react'
import './Button.css'

export interface ButtonProps {
  label: string
  width: string
  borderRadius?: string
  darkMode?: boolean
  padding?: string
}

const Button = (props: ButtonProps) => {
  const style = {
    background: props.darkMode ? '#000' : '#fff',
    color: props.darkMode ? '#fff' : '#000',
    width: props.width,
    borderRadius: props.borderRadius || '0px',
    padding: props.padding || '8px 20px',
  }

  return <button style={style}>{props.label}</button>
}

export default Button
