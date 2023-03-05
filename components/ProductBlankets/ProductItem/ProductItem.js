import { useEffect, useState } from "react";
import Card from "./Card/Card";

export default function ProductItem({ id, arr, text, set, items }) {
    const [disabled, setDisabled] = useState(false);
    const [cartText, setCartText] = useState("У кошик");
    const [currentSizeBlanket, setCurrentSizeBlanket] = useState(150);
    const [currentSizePillow, setCurrentSizePillow] = useState(50);

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
    const findProduct = arr?.filter(
        (el) =>
            el.model === text &&
            (+el.size === currentSizeBlanket || el.size === +currentSizePillow)
    );

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
            items?.find((el) => findProduct[0]?._id === el._id)?._id ===
            findProduct[0]?._id
        ) {
            setCartText("Додано");
            setDisabled(true);
        } else {
            setCartText("У кошик");
            setDisabled(false);
        }
    }, [findProduct, arr]);
    useEffect(() => {
        const findNewProduct = arr
            ?.filter(
                (el) =>
                    el.model === text &&
                    ((+el.size === +currentSizeBlanket
                        ? currentSizeBlanket
                        : 175 || 200) ||
                        (el.size === +currentSizePillow ? +currentSizePillow : 70))
            )
            .sort((a, b) => a.size - b.size);
        if (findNewProduct[0]?.category === "Ковдри") {
            setCurrentSizeBlanket(findNewProduct[0]?.size);
        } else {
            setCurrentSizePillow(findNewProduct[0]?.size);
        }
    }, []);

    return findProduct?.map((el, i) => (
        <Card
            id={el._id}
            key={el._id}
            card={el}
            arr={arr}
            onClick={addToCart}
            disabled={disabled}
            text={cartText}
            model={text}
            handleChange={handleChange}
            currentSize={
                el.category === "Ковдри" ? currentSizeBlanket : currentSizePillow
            }
        />
    ));
}
