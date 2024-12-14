import '../../global-style.css'
import './Button.css'

export type ButtonProps = {
  label: string
  width: string
  borderRadius?: string
  padding?: string
}

const Button = (props: ButtonProps) => {
  const style = {
    width: props.width,
    borderRadius: props.borderRadius || '0px',
    padding: props.padding || '8px 20px',
  }

  return (
    <button type="button" style={style}>
      {props.label}
    </button>
  )
}

export default Button
