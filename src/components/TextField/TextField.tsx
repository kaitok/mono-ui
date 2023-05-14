import React from 'react'

export interface TextFieldProps {
  placeholder: string
}

const Button = (props: TextFieldProps) => {
  return <input type="text" placeholder={props.placeholder}></input>
}

export default Button
