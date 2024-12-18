import '../../global-style.css'
import './TextField.css'

export type TextFieldProps = {
  width: string
  placeholder?: string
  darkMode?: boolean
  borderRadius?: string
}

const TextField = (props: TextFieldProps) => {
  const style = {
    width: props.width,
    borderRadius: props.borderRadius || '0px',
    padding: '10px',
  }
  return <input type="text" style={style} placeholder={props.placeholder} />
}

export default TextField
