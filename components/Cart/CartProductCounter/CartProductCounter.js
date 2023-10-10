import PropTypes from "prop-types";
import Plus from "../../svgs/plus.svg";
import Minus from "../../svgs/minus.svg";
import { useEffect, useState, useRef } from "react";
import s from "./CartProductCounter.module.css";

export default function CartProductCounter({
    increment,
    decrement,
    count,
    id,
    handleInputChange,
}) {
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState(1);
    const inputRef = useRef(null);
    useEffect(() => {
        setInputValue(count);
    }, [count]);
    const handleInput = (e) => {
        let value = e.target.value;
        if (value > 1000) {
            value = 1000;
            console.log("Помилка: Введіть значення не більше 1000");
            return;
        }
        setInputValue(value);
        handleInputChange(id, value);
    };

    const handleBlur = () => {
        if (!inputValue || isNaN(inputValue) || inputValue <= 0) {
            setInputValue(1);
            handleInputChange(id, 1);
        }

        setInputVisible(false);
    };

    const handleClick = () => {
        setInputVisible(true);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    useEffect(() => {
        if (inputVisible && inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputVisible]);

    return (
        <div className={s.basket__count}>
            {inputVisible ? (
                <input
                    ref={inputRef}
                    name="count"
                    id={id}
                    type="number"
                    value={inputValue}
                    onChange={handleInput}
                    onBlur={handleBlur}
                    max={1000}
                    min={1}
                    maxLength={4}
                    className={s.basket__input}
                />
            ) : (
                <>
                    <button className={s.basket__decrement} onClick={decrement} id={id}>
                        <Minus className={s.basket__minus} />
                    </button>
                    <span className={s.basket__value} onClick={handleClick}>
                        {count}
                    </span>
                    <button className={s.basket__increment} onClick={increment} id={id}>
                        <Plus className={s.basket__plus} />
                    </button>
                </>
            )}
        </div>
    );
}

CartProductCounter.propTypes = {
    increment: PropTypes.func,
    decrement: PropTypes.func,
    handleInputChange: PropTypes.func,
    count: PropTypes.number,
    id: PropTypes.string,
};
