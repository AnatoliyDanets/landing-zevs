import { FormattedMessage } from "react-intl";
import Button from "../Button";
import s from "./SuccessOrder.module.css";

export default function SuccessOrder({ onClick }) {
    return (
        <div className={s.successOrder}>
            <p className={s.successOrder__text}>
                <FormattedMessage id="page.home.success_order" />
            </p>
            <Button type="button" onClick={onClick}>
                {"Ok"}
            </Button>
        </div>
    );
}
