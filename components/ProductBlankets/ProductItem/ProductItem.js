import { useIntl } from "react-intl";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Card from "./Card/Card";

export default function ProductItem({ arr, text, set, items, locale }) {
    const [disabled, setDisabled] = useState(false);
    const [cartText, setCartText] = useState("У кошик");
    const [currentSizeBlanket, setCurrentSizeBlanket] = useState(150);
    const [currentSizePillow, setCurrentSizePillow] = useState(50);
    const intl = useIntl();
    const addCart = intl.formatMessage({ id: "page.home.catalog_add_cart" });
    const addedCart = intl.formatMessage({ id: "page.home.catalog_added_cart" });
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
            el.model[locale] === text &&
            (+el.size === currentSizeBlanket || el.size === +currentSizePillow)
    );

    const addToCart = () => {
        set((prev) => [
            ...prev,
            {
                _id: findProduct[0]._id,
                model: findProduct[0].model[locale],
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
            setCartText(addedCart);
            setDisabled(true);
        } else {
            setCartText(addCart);
            setDisabled(false);
        }
    }, [items, findProduct[0]]);
    useEffect(() => {
        const findNewProduct = arr
            ?.filter(
                (el) =>
                    el.model[locale] === text &&
                    ((+el.size === +currentSizeBlanket
                        ? currentSizeBlanket
                        : 175 || 200) ||
                        (el.size === +currentSizePillow ? +currentSizePillow : 70))
            )
            .sort((a, b) => a.size - b.size);
        if (
            findNewProduct[0]?.category[locale] === "Одеяла" ||
            findNewProduct[0]?.category[locale] === "Ковдри"
        ) {
            setCurrentSizeBlanket(findNewProduct[0]?.size);
        } else {
            setCurrentSizePillow(findNewProduct[0]?.size);
        }
    }, [arr, locale, text]);

    return findProduct?.map((el) => (
        <Card
            id={el._id}
            key={el._id}
            card={el}
            arr={arr}
            onClick={addToCart}
            disabled={disabled}
            text={cartText}
            model={text}
            locale={locale}
            handleChange={handleChange}
            currentSize={
                el.category[locale] === "Ковдри" || el.category[locale] === "Одеяла"
                    ? currentSizeBlanket
                    : currentSizePillow
            }
        />
    ));
}
ProductItem.propTypes = {
    id: PropTypes.string,
    arr: PropTypes.array,
    set: PropTypes.func,
    items: PropTypes.array,
    text: PropTypes.string,
    locale: PropTypes.string,
};
