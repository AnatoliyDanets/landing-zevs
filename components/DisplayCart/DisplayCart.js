import PropTypes from "prop-types";
import Basket from "../svgs/basket.svg"
import s from "./DisplayCart.module.css"


export default function DisplayCart({ handleShowCart, quantityInCart }) {
    return (
        <div
            className={s.displayCart}

        >
            <div
                className={s.displayCart__wrapper}
            >
                <div
                    className={s.displayCart__basket}
                    onClick={handleShowCart}
                >
                    <Basket
                        className={s.displayCart__icon}
                    />
                </div>
                <span className={s.displayCart__quantity} style={quantityInCart > 99 ? { fontSize: "12px" } : { fontSize: "16px" }}
                >
                    {quantityInCart}
                </span>
            </div>
        </div>
    )
}

DisplayCart.propTypes = {
    handleShowCart: PropTypes.func,
    quantityInCart: PropTypes.number
};