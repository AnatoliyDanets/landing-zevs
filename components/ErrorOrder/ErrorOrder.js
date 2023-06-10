import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import s from "./ErrorOrder.module.css"

export default function ErrorOrder({ onClick }) {
    return (
        <div className={s.errorOrder}>
            <p className={s.errorOrder__text}>
                <FormattedMessage id="page.home.error_order" />
            </p>
            <Button type="button" onClick={onClick}>
                {"Ok"}
            </Button>
        </div>
    );
}

ErrorOrder.propTypes = {
    onClick: PropTypes.func,
}
