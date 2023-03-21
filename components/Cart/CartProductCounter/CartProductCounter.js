import Plus from "../../svgs/plus.svg";
import Minus from "../../svgs/minus.svg";
import s from "./CartProductCounter.module.css"


export default function CartProductCounter({ increment, decrement, count, id }) {
    return (
        <div className={s.basket__count}>
            <button
                className={s.basket__decrement}
                onClick={decrement}
                id={id}
            >
                <Minus className={s.basket__minus} />
            </button>

            <span
                className={s.basket__value}
                style={{ width: "20px" }}
            >
                {+count}
            </span>
            <button
                className={s.basket__increment}
                onClick={increment}
                id={id}
            >
                <Plus className={s.basket__plus} />
            </button>
        </div>
    )
}