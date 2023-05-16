import React from 'react'
import './TextField.css'

export interface TextFieldProps {
  placeholder?: string
  width: string
  darkMode?: boolean
  borderRadius?: string
}

const TextField = (props: TextFieldProps) => {
  const style = {
    background: props.darkMode ? '#000' : '#fff',
    color: props.darkMode ? '#fff' : '#000',
    width: props.width,
    borderRadius: props.borderRadius || '0px',
    padding: '10px',
  }
  return (
    <input type="text" style={style} placeholder={props.placeholder}></input>
  )
}

export default TextField
