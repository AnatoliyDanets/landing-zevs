import * as React from "react";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

export default function ProductItemBlankets({ arr, text, set, items }) {
    const [disabled, setDisabled] = useState(false);
    const [cartText, setCartText] = useState("У кошик");
    const [currentSizeBlanket, setCurrentSizeBlanket] = useState(150);
    const [currentSizePillow, setCurrentSizePillow] = useState(50);
    const sizesBlanket = [
        { id: 1, width: 150, size: "150x210" },
        { id: 2, width: 175, size: "175x210" },
        { id: 3, width: 200, size: "200x220" },
    ];

    const sizesPillow = [
        { id: 1, width: 50, size: "70x50" },
        { id: 2, width: 70, size: "70x70" },
    ];

    const findProduct = arr?.filter(
        (el) =>
            el.model === text &&
            (+el.size === +currentSizeBlanket || el.size === +currentSizePillow)
    );

    const handleChange = (e) => {
        const { value, name } = e.target;
        switch (name) {
            case "blanket":
                setCurrentSizeBlanket(+value);
                break;
            case "pillow":
                setCurrentSizePillow(+value);
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
    }, [items, findProduct]);

    return findProduct?.map((el, i) => (
        <Card
            id={el._id}
            key={el._id}
            card={el}
            onClick={addToCart}
            disabled={disabled}
            text={cartText}
            handleChange={handleChange}
            currentSize={
                el.category === "Ковдри" ? currentSizeBlanket : currentSizePillow
            }
            sizes={el.category === "Ковдри" ? sizesBlanket : sizesPillow}
        />
    ));
}
