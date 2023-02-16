import Button from "../Button"
import s from "./SuccessOrder.module.css"

export default function SuccessOrder({ onClick }) {
    return (
        <div className={s.successOrder}>
            <p className={s.successOrder__text}>Дякуємо що обрали Zevs! Наш менеджер Вам передзвонить в найближайший час</p>
            <Button type="button" onClick={onClick}>{"Ok"}</Button>

        </div>
    )
}