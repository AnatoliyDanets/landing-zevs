import * as React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import s from "./ProductItemPillows.module.css";

const textAnmation = {
    hidden: { x: -100, opacity: 0 },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};

export default function ProductItemPillows({ arr, text, set, items }) {
    const [disabled, setDisabled] = useState(false);
    const [cartText, setCartText] = useState("У кошик");
    const [currentSize, setCurrentSize] = useState(50);

    const findProduct = arr.filter(
        (el) => el.model === text && +el.size === +currentSize
    );
    const sizes = [
        { id: 1, width: 50, size: "70x50" },
        { id: 2, width: 70, size: "70x70" },
    ];

    const handleChange = (e) => {
        const { value, name } = e.target;
        switch (name) {
            case "size":
                setCurrentSize(+value);
                break;

            default:
                break;
        }
    };
    const addToCart = () => {
        set((prev) => [
            ...prev,
            {
                _id: findProduct[0]._id,
                model: findProduct[0].model,
                price: findProduct[0].price,
                totalPrice: findProduct[0].totalPrice,
                size: findProduct[0].size,
                height: findProduct[0].height,
                count: findProduct[0].count,
                discount: findProduct[0].discount,
                cards: findProduct[0].cards,
            },
        ]);
    };

    useEffect(() => {
        if (
            items?.find((el) => findProduct[0]._id === el._id)?._id ===
            findProduct[0]._id
        ) {
            setCartText("Додано");
            setDisabled(true);
        } else {
            setCartText("У кошик");
            setDisabled(false);
        }
    });

    return (
        <>
            {findProduct.map((el, i) => (
                <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true }}
                    custom={1}
                    variants={textAnmation}
                    key={el._id}
                    className={s.pillow__item}
                >
                    <Card
                        card={el}
                        onClick={addToCart}
                        disabled={disabled}
                        text={cartText}
                        handleChange={handleChange}
                        currentSize={currentSize}
                        sizes={sizes}
                    />
                </motion.li>
            ))}
        </>
    );
}
