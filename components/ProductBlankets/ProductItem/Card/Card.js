import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import PropTypes, { object, string } from "prop-types";
import Arrow from "../../../svgs/arrow.svg";
import Button from "../../../Button/Button";
import Characteristics from "../../../Characteristics";
import CenterMode from "../../../ProductSlider/ProductSlider";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
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
    locale,
}) {

    const [currentTime, setCurrentTime] = useState(null);
    const [showDisc, setShowDisc] = useState(false);
    const [showAllDisc, setShowAllDisc] = useState(card.discription[locale]);
    const handleShowDisc = () => {
        setShowDisc((prev) => !prev);
    };
    // console.log(model)
    useEffect(() => {
        if (card.discription[locale].length > 450) {
            setShowDisc(false);
            const showText = card.discription[locale].slice(0, 450);
            setShowAllDisc(showText);
        }
    }, [card.discription[locale]]);

    useEffect(() => {
        setCurrentTime(card?.discount_time);
    }, [card?.discount_time, card?.discount, currentTime]);
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return;
        } else {
            return (
                <p className={s.card__discount_time}>
                    <FormattedMessage id="page.home.catalog_discount" />{" "}
                    <span className={s.card__discount_percent}>-{card.discount}% </span>{" "}
                    <FormattedMessage id="page.home.catalog_discount_action" />{" "}
                    <span className={s.card__discount_percent}>
                        {zeroPad(days)}д {zeroPad(hours)}:{zeroPad(minutes)}:
                        {zeroPad(seconds)}
                    </span>
                </p>
            );
        }
    };

    const style = {
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: "#d2ba40",
                border: "1px solid #d2ba40",
                borderRadius: "4px",
                "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                },
            },
            "&:hover fieldset": {
                borderColor: "#d2ba40",
            },
        },
    };
    // console.log(text)
    return (
        <article className={s.card__article} key={id}>
            <h4 className={s.card__title} id={card.model[locale]}>
                {card.model[locale]}
            </h4>
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
                    <p className={s.card__discription}>
                        {showDisc === false && card?.discription[locale]?.length >= 450 ? (
                            `${showAllDisc?.slice(0, 450)}...`
                        ) : (
                            <span className={s.card__discription_text}>
                                {card.discription[locale]}
                            </span>
                        )}
                        {card?.discription[locale]?.length >= 450 && (
                            <button
                                className={s.card__discription_show}
                                type="button"
                                onClick={handleShowDisc}
                            >
                                <span className={s.card__discription_showText}>
                                    {!showDisc ? (
                                        <>
                                            {" "}
                                            <FormattedMessage id="page.home.catalog_discription_button_true" />{" "}
                                        </>
                                    ) : (
                                        <>
                                            <FormattedMessage id="page.home.catalog_discription_button_false" />
                                        </>
                                    )}
                                    <Arrow
                                        style={
                                            showDisc
                                                ? { transform: "rotate(180deg)" }
                                                : { transform: "rotate(0deg)" }
                                        }
                                        className={s.card__discription_icon}
                                    />
                                </span>
                            </button>
                        )}
                    </p>

                    <div className={s.card__showPrice}>
                        <div className={s.card__product_size}>
                            <span className={s.card__product_sizeText}>
                                <FormattedMessage id="page.home.catalog_change_size" />
                            </span>

                            <FormControl sx={{ minWidth: 120 }}>
                                <TextField
                                    sx={style}
                                    id={`${card.size} ${card.model[locale]}`}
                                    select
                                    variant="outlined"
                                    value={+currentSize}
                                    onChange={handleChange}
                                    name={
                                        card.category[locale] === "Ковдри" ||
                                            card.category[locale] === "Одеяла"
                                            ? "blanket"
                                            : "pillow"
                                    }
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
                                </TextField>
                            </FormControl>
                        </div>
                        {currentTime > 0 && (
                            <>
                                <Countdown date={currentTime} renderer={renderer} />
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

            <Characteristics
                model={card.model[locale]}
                locale={locale}
                type={card.category[locale]}
                property={Object.values(card.characteristics)}
            />
        </article>
    );
}




Card.propTypes = {
    id: PropTypes.string,
    card: PropTypes.shape({
        brand: PropTypes.string,
        cardImg: PropTypes.array,
        cards: PropTypes.object,
        category: PropTypes.object,
        characteristics: PropTypes.object,
        count: PropTypes.number,
        discount: PropTypes.number,
        discount_time: PropTypes.number,
        discription: PropTypes.object,
        height: PropTypes.number,
        model: PropTypes.object,
        price: PropTypes.number,
        size: PropTypes.number,
        totalPrice: PropTypes.number,
    }),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    text: PropTypes.string,
    handleChange: PropTypes.func,
    currentSize: PropTypes.number,
    model: PropTypes.string,
    arr: PropTypes.array,
    locale: PropTypes.string

};