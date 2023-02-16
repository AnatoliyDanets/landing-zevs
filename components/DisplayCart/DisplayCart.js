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
                <span className={s.displayCart__quantity}
                >
                    {quantityInCart}
                </span>
            </div>
        </div>
    )
}