import PropTypes from "prop-types";
import Button from "../Button";
import s from "./SuccessOrder.module.css";

export default function SuccessOrder({ onClick, message }) {
    return (
        <div className={s.successOrder}>
            <p className={s.successOrder__text}>
                {message}
            </p>
            <Button type="button" onClick={onClick}>
                {"Ok"}
            </Button>
        </div>
    );
}

SuccessOrder.propTypes = {
    onClick: PropTypes.func,
    message: PropTypes.object
}
