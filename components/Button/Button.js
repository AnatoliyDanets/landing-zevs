
import s from "./Button.module.css"

const Button = ({ ariaLabel, id, type, style, onClick, children, disabled }) => {
    return (
        <button aria-label={ariaLabel} id={id} type={type} className={s.btn} style={style} onClick={onClick} disabled={disabled}>{children}</button>
    )
}
export default Button