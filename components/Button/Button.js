import { forwardRef } from "react"
import { motion } from "framer-motion"
import s from "./Button.module.css"

const Button = forwardRef(({ id, type, style, onClick, children, disabled }, ref) => {
    return (
        <button ref={ref} id={id} type={type} className={s.btn} style={style} onClick={onClick} disabled={disabled}>{children}</button>
    )
})
const MButton = motion(Button)
// export default Button
export default MButton