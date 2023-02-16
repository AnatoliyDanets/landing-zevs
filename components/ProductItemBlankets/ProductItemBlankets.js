import * as React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import s from "./ProductItemBlankets.module.css";

const textAnmation = {
    hidden: { x: -100, opacity: 0 },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};

export default function ProductItemBlankets({ arr, text, set, items }) {
    const [disabled, setDisabled] = useState(false);
    const [cartText, setCartText] = useState("У кошик");
    const [currentSize, setCurrentSize] = useState(150);
    const sizes = [
        { id: 1, width: 150, size: "150x210" },
        { id: 2, width: 175, size: "175x210" },
        { id: 3, width: 200, size: "200x220" },
    ];
    const findProduct = arr.filter(
        (el) => el.model === text && +el.size === +currentSize
    );

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
                    className={s.blanket__item}
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

// https://i.ibb.co/BTPF2K2/blanket-mobile1-2x.jpg
// https://i.ibb.co/TPMs4tZ/blanket-mobile1-1x.webp
// https://i.ibb.co/hZk8dVc/blanket-mobile1-2x.webp
// https://i.ibb.co/pXCHPrC/blanket-mobile2-1x.jpg
// https://i.ibb.co/TTHYkg5/blanket-mobile2-2x.jpg
// https://i.ibb.co/2PNh3Lc/blanket-mobile2-1x.webp
// https://i.ibb.co/5vNGQjP/blanket-mobile2-2x.webp
// https://i.ibb.co/jHF7gJs/blanket-mobile1-1x.jpg

// "cardImg": [
//     "https://i.ibb.co/chbM5G4/Swan.jpg",
//     "https://i.ibb.co/QrVHfKk/swan2.jpg",
//     "https://i.ibb.co/9g2y2v1/swan4.jpg"
// ],
