import { motion } from "framer-motion";
import s from "./FilterProducts.module.css";

const textAnmation = {
    hidden: { x: -100, opacity: 0 },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};

export default function FilterProducts({
    activeOne,
    activeTwo,
    handleFilterPillows,
    handleFilterBlankets,
}) {
    return (
        <motion.ul
            className={s.filter}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            custom={2}
            variants={textAnmation}
        >
            <li className={s.filter__item}>
                <button
                    data-index={0}
                    className={activeOne ? s.filter__btn_active : s.filter__btn}
                    type="button"
                    onClick={handleFilterBlankets}
                >
                    Ковдри
                </button>
            </li>
            <li className={s.filter__item}>
                <button
                    data-index={1}
                    className={activeTwo ? s.filter__btn_active : s.filter__btn}
                    type="button"
                    onClick={handleFilterPillows}
                >
                    Подушки
                </button>
            </li>
        </motion.ul>
    );
}
