import * as React from "react";
import Button from "../Button/Button";
import Characteristics from "../Characteristics";
import CenterMode from "../ProductSlider/ProductSlider";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import s from "./Card.module.css";

export default function Card({
    card,
    onClick,
    disabled,
    text,
    handleChange,
    currentSize,
    sizes,
}) {
    return (
        <>
            <article className={s.card__article}>
                <h3
                    style={{
                        color: "#d2ba40",
                        textAlign: "center",
                        fontSize: "24px",
                        marginBottom: "20px",
                    }}
                >
                    {" "}
                    {card.model}
                </h3>
                <div className={s.card__wrapper}>
                    <div className={s.card__left}>
                        {card.cardImg.length > 0 && <CenterMode cardImg={card.cardImg} />}
                    </div>
                    <div className={s.card__right}>
                        <p className={s.card__discription}>{card.discription}</p>

                        <div className={s.card__showPrice}>
                            <div className={s.blanket__size}>
                                <span className={s.blanket__sizeText}>
                                    Оберіть розмір (ШхД) :
                                </span>

                                <FormControl sx={{ minWidth: 120 }}>
                                    <Select
                                        value={+currentSize}
                                        onChange={handleChange}
                                        name="size"
                                        displayEmpty
                                        inputProps={{ MenuProps: { disableScrollLock: true } }}
                                        className={s.card__select}
                                    >
                                        {sizes.map(({ id, width, size }) => (
                                            <MenuItem key={id} value={+width}>
                                                {size}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                            <p className={s.card__price}>
                                {card.discount > 0
                                    ? card.price - (card.discount / 100) * card.price
                                    : card.price}{" "}
                                грн
                            </p>

                            {card.discount > 0 && (
                                <p
                                    className={s.card__price_discount}
                                    style={
                                        card.discount > 0
                                            ? { textDecoration: "line-through" }
                                            : { textDecoration: "none" }
                                    }
                                >
                                    {card.price} грн
                                </p>
                            )}
                        </div>

                        <Button id={card._id} onClick={onClick} disabled={disabled}>
                            {text}
                        </Button>
                    </div>
                </div>

                <h3 className={s.card__character}>Характеристики {card.model}</h3>

                <Characteristics
                    type={card.category}
                    property={Object.values(card.characteristics)}
                />
            </article>
        </>
    );
}
