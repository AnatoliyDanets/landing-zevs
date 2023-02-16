
import s from "./Button.module.css"

const Button = ({ id, type, style, onClick, children, disabled }) => {
    return (
        <button id={id} type={type} className={s.btn} style={style} onClick={onClick} disabled={disabled}>{children}</button>
    )
}
export default Button