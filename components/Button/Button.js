import PropTypes from "prop-types";
import s from "./Button.module.css";

export default function Button({
    ariaLabel,
    id,
    type,
    style,
    onClick,
    children,
    disabled,
}) {
    return (
        <button
            aria-label={ariaLabel}
            id={id}
            type={type}
            className={s.btn}
            style={style}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node
}