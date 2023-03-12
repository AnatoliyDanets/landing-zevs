import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
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
    locale
}) {
    const [discount, setDiscount] = useState(0);
    const [currentTime, setCurrentTime] = useState(null)
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
    useEffect(() => {

        setCurrentTime(Date.now() +
            (new Date(card?.discount_time).getTime() -
                Date.now() -
                7200000))


    }, [card?.discount_time, card?.discount, currentTime])
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
                    <FormattedMessage id="page.home.catalog_discount" />{" "}
                    <span className={s.discount__percent}>
                        -{card.discount}%{" "}
                    </span>{" "}
                    <FormattedMessage id="page.home.catalog_discount_action" />{" "}
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
            <h3 className={s.card__title}>{card.model[locale]}</h3>
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
                    <p className={s.card__discription}>{card.discription[locale]}</p>

                    <div className={s.card__showPrice}>
                        <div className={s.blanket__size}>
                            <span className={s.blanket__sizeText}>
                                <FormattedMessage id="page.home.catalog_change_size" />
                            </span>

                            <FormControl sx={{ minWidth: 120 }}>
                                <Select
                                    value={+currentSize}
                                    onChange={handleChange}
                                    name={(card.category[locale] === "Ковдри" || card.category[locale] === "Одеяла") ? "blanket" : "pillow"}
                                    displayEmpty
                                    inputProps={{ MenuProps: { disableScrollLock: true } }}
                                    className={s.card__select}
                                >
                                    {arr
                                        .filter((el) => el.model[locale] === model)
                                        .sort((a, b) => a.size - b.size)
                                        .map(({ _id, size, height }) => (
                                            <MenuItem key={_id} value={+size}>
                                                {size}x{height}
                                            </MenuItem>
                                        ))}
                                </Select>
                            </FormControl>
                        </div>
                        {currentTime > 0 && (
                            <>
                                <Countdown
                                    date={currentTime}
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

            <h3 className={s.card__character}> <FormattedMessage id="page.home.catalog_character_title" /> {card.model[locale]}</h3>

            <Characteristics
                locale={locale}
                type={card.category[locale]}
                property={Object.values(card.characteristics)}
            />
        </article>
    );
}
