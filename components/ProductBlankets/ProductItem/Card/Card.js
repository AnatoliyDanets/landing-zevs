import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Button from "../../../Button/Button";
import Characteristics from "../../../Characteristics";
import CenterMode from "../../../ProductSlider/ProductSlider";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Countdown, { zeroPad } from "react-countdown";
import s from "./Card.module.css";

export default function Card({
    id,
    card,
    onClick,
    disabled,
    text,
    handleChange,
    currentSize,
    model,
    arr,
}) {
    const [discount, setDiscount] = useState(0);

    const router = useRouter();

    useEffect(() => {
        setDiscount(card.discount);
    }, [card.discount]);
    const changeDiscountProduct = async (data, id) => {
        try {
            const res = await axios.patch(
                `https://testback-production-353f.up.railway.app/api/products/${id}`,
                data
            );
            if (res.status === 200) {
                router
                    .replace(router.asPath, undefined, { scroll: false })
                    .catch((e) => {
                        console.log("error", e);
                    });
                setDiscount(res.data.discount);
            }
        } catch (error) {
            console.log(error.response.message);
        }
    };

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            const dataDiscount = {
                discount: 0,
                discount_time: 0,
            };
            if (discount === 0) {
                return;
            } else {
                changeDiscountProduct(dataDiscount, id);
            }
        } else {
            return (
                <p className={s.discount_time}>
                    Знижка<span className={s.discount__percent}>
                        -{card.discount}%{" "}
                    </span>{" "}
                    діятиме:{" "}
                    <span className={s.discount__percent}>
                        {zeroPad(days)}д {zeroPad(hours)}:{zeroPad(minutes)}:
                        {zeroPad(seconds)}
                    </span>
                </p>
            );
        }
    };

    return (
        <article className={s.card__article} key={id}>
            <h3 className={s.card__title}>{card.model}</h3>
            <div className={s.card__wrapper}>
                <div className={s.card__left}>
                    {card.discount > 0 && (
                        <>
                            <div className={s.card__discount}>
                                -{card.discount} <span style={{ fontSize: "12px" }}>%</span>
                            </div>
                        </>
                    )}
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
                                    name={card.category === "Ковдри" ? "blanket" : "pillow"}
                                    displayEmpty
                                    inputProps={{ MenuProps: { disableScrollLock: true } }}
                                    className={s.card__select}
                                >
                                    {arr
                                        .filter((el) => el.model === model)
                                        .sort((a, b) => a.size - b.size)
                                        .map(({ _id, size, height }) => (
                                            <MenuItem key={_id} value={+size}>
                                                {size}x{height}
                                            </MenuItem>
                                        ))}
                                </Select>
                            </FormControl>
                        </div>
                        {card.discount > 0 && (
                            <>
                                <Countdown
                                    date={
                                        Date.now() +
                                        (new Date(card.discount_time).getTime() -
                                            Date.now() -
                                            7200000)
                                    }
                                    renderer={renderer}
                                />
                            </>
                        )}

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
    );
}
