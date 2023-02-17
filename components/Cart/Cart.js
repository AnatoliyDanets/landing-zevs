import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useForm } from "react-hook-form";

import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import {
    isValidPhoneNumber,
    isPossiblePhoneNumber,
} from "react-phone-number-input";
import ua from "react-phone-number-input/locale/ua";
import "react-phone-number-input/style.css";
import Image from "next/image";
import Plus from "../svgs/plus.svg";
import Minus from "../svgs/minus.svg";
import Del from "../svgs/del.svg";
import Button from "../Button";
import s from "./Cart.module.css";

export default function Cart({
    cartProduct,
    increment,
    decrement,
    removeClick,
    set,
    handleShowIsSuccess,
}) {
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState();
    const [showIsMobile, setShowIsMobile] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 479.9px)" });
    const {
        register,
        handleSubmit,
        control,
        formState: { isDirty, isValid },
    } = useForm({
        mode: "onChange",
        defaultValues: {
            name: "",
        },
    });

    const uniqueCartProducts = cartProduct.reduce(
        (acc, el) => (acc.find(({ _id }) => el._id === _id) || acc.push(el), acc),
        []
    );

    const price = uniqueCartProducts?.reduce(
        (acc, el) =>
            acc +
            Number(
                el.discount > 0 ? el.price - (el.discount / 100) * el.price : el.price
            ) *
            el.count,
        0
    );

    useEffect(() => {
        isMobile ? setShowIsMobile(true) : setShowIsMobile(false);
    }, [isMobile]);

    const addedOrderProduct = (data) => {
        fetch("https://testback-production-353f.up.railway.app/api/orders", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                setLoading(true);
                if (res.status === 201) {
                    setLoading(false);
                    handleShowIsSuccess(true);
                    resetForm();
                }
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    };

    const onSubmit = (data, e) => {
        e.preventDefault();
        const orderCart = uniqueCartProducts.map((val) =>
            uniqueCartProducts?.reduce((acc) => {
                acc.model = val.model;
                acc.size = `${val.size}x${val.height}`;
                acc.count = val.count;
                acc.discount = val.discount;
                acc.price =
                    val.discount > 0
                        ? `Знижка ${val.discount}, ціна - ${val.price - (val.discount / 100) * val.price
                        }`
                        : val.price;
                acc.totalPrice = val.totalPrice =
                    val.discount > 0
                        ? (+val.price - (val.discount / 100) * +val.price) * val.count
                        : +val.totalPrice;
                return acc;
            }, {})
        );

        const order = {
            ...data,
            order: orderCart,
            totalPrice: price,
        };
        console.log(order);
        addedOrderProduct(order);
    };

    const resetForm = () => {
        setValue("");
        const emptyProducts = cartProduct.map((val) =>
            cartProduct?.reduce((acc) => {
                acc = val;
                acc.count = 1;
                acc.totalPrice = val.price;

                return acc;
            }, [])
        );

        set([]);
    };

    return loading ? (
        <div className={s.spinner__wrap}>
            <div className={s.spinner}></div>
        </div>
    ) : (
        <div className={s.basket__container}>
            <h2 className={s.basket__title}>ВАШІ ЗАМОВЛЕННЯ</h2>
            {showIsMobile ? (
                <ul className={s.mobile__cart}>
                    {uniqueCartProducts.map((el, i) => (
                        <li key={i} className={s.mobile__cartItem}>
                            <div className={s.mobile__cartWrap}>
                                <Image
                                    src={el.cards}
                                    alt={el.model}
                                    width={70}
                                    height={70}
                                    priority
                                />

                                <p className={s.mobile__name}>
                                    {" "}
                                    {`${el.model} ${el.size}x${el.height}`}
                                </p>
                            </div>

                            <div className={s.mobile__cartWrapCount}>
                                <div className={s.mobile__cartCount}>
                                    <button
                                        className={s.basket__decrement}
                                        onClick={decrement}
                                        id={el._id}
                                    >
                                        {" "}
                                        <Minus className={s.basket__minus} />
                                    </button>

                                    <span className={s.mobile__cartValue}>{+el.count}</span>
                                    <button
                                        className={s.basket__increment}
                                        onClick={increment}
                                        id={el._id}
                                    >
                                        <Plus className={s.basket__plus} />
                                    </button>
                                </div>
                                <span className={s.mobile__cartPrice}>
                                    {el.discount > 0
                                        ? (
                                            (+el.price - (el.discount / 100) * +el.price) *
                                            el.count
                                        ).toFixed(2)
                                        : +el.totalPrice.toFixed(2)}
                                    грн
                                </span>
                                <button
                                    id={el._id}
                                    className={s.basket__delete}
                                    type="button"
                                    onClick={() => removeClick(el._id)}
                                >
                                    <Del className={s.basket__plus} />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <table className={s.tableCart}>
                    <thead className={s.tableCart__head}>
                        <tr className={s.tableCart__head_row}>
                            <th
                                className={s.tableCart__head_sel}
                                style={{ emptyCells: "hide" }}
                            ></th>
                            <th className={s.tableCart__head_sel}>Модель</th>
                            <th className={s.tableCart__head_sel}>Кількість</th>
                            <th className={s.tableCart__head_sel}>Ціна</th>
                            <th className={s.tableCart__head_sel}></th>
                        </tr>
                    </thead>
                    <tbody className={s.tableCart__body}>
                        {uniqueCartProducts.map((el, i) => (
                            <tr className={s.tableCart__body_row} key={i}>
                                <>
                                    <td className={s.tableCart__body_sel}>
                                        {
                                            <Image
                                                src={el.cards}
                                                alt={el.model}
                                                width={70}
                                                height={70}
                                                priority
                                            />
                                        }
                                    </td>
                                    <td className={s.tableCart__body_sel}>
                                        <p className={s.basket__name}>
                                            {el.model} {`${el.size}x${el.height}`}
                                        </p>
                                    </td>
                                    <td className={s.tableCart__body_sel}>
                                        {" "}
                                        <div className={s.basket__count}>
                                            <button
                                                className={s.basket__decrement}
                                                onClick={decrement}
                                                id={el._id}
                                            >
                                                {" "}
                                                <Minus className={s.basket__minus} />
                                            </button>

                                            <span
                                                className={s.basket__value}
                                                style={{ width: "20px" }}
                                            >
                                                {+el.count}
                                            </span>
                                            <button
                                                className={s.basket__increment}
                                                onClick={increment}
                                                id={el._id}
                                            >
                                                <Plus className={s.basket__plus} />
                                            </button>
                                        </div>
                                    </td>
                                    <td className={s.tableCart__body_sel}>
                                        <span className={s.basket__price}>
                                            {el.discount > 0
                                                ? (
                                                    (+el.price - (el.discount / 100) * +el.price) *
                                                    el.count
                                                ).toFixed(2)
                                                : +el.totalPrice.toFixed(2)}
                                            грн
                                        </span>
                                    </td>

                                    <td className={s.tableCart__body_sel}>
                                        <button
                                            id={el._id}
                                            className={s.basket__delete}
                                            type="button"
                                            onClick={() => removeClick(el._id)}
                                        >
                                            <Del className={s.basket__plus} />
                                        </button>
                                    </td>
                                </>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <div className={s.basket__order}>
                <p className={s.basket__total}>{price.toFixed(2)}грн</p>
            </div>
            <div>
                <h3 className={s.basket__orderTitle}>ОФОРМЛЕННЯ ЗАМОВЛЕННЯ</h3>

                <form onSubmit={handleSubmit(onSubmit)} className={s.basket__form}>
                    <label className={s.basket__form_label} htmlFor="value">
                        Им`я *
                    </label>
                    <div className={s.basket__form_inputWrap}>
                        <input
                            className={s.basket__form_input}
                            placeholder="Им`я"
                            {...register("name", {
                                required: true,
                                minLength: 3,
                                maxLength: 40,
                                min: 3,
                                max: 40,
                            })}
                        />
                    </div>
                    <label className={s.basket__form_label} htmlFor="phone">
                        Телефон *
                    </label>
                    <PhoneInputWithCountry
                        className={s.phone}
                        labels={ua}
                        name="phone"
                        id="phone"
                        international
                        defaultCountry="UA"
                        value={value}
                        maxLength={16}
                        onChange={setValue}
                        control={control}
                        countryCallingCodeEditable={false}
                        rules={{
                            required: true,
                        }}
                        error={
                            value
                                ? isValidPhoneNumber(value)
                                    ? undefined
                                    : "Invalid phone number"
                                : "Phone number required"
                        }
                    />
                    <Button
                        style={{
                            margin: "auto",
                        }}
                        type={"submit"}
                        disabled={
                            (!(value && isPossiblePhoneNumber(value)) &&
                                !(value && isValidPhoneNumber(value))) ||
                            value?.length > 13 ||
                            !isDirty ||
                            !isValid
                        }
                    >
                        Замовити
                    </Button>
                    {!(
                        value &&
                        isPossiblePhoneNumber(value) &&
                        value &&
                        isValidPhoneNumber(value)
                    ) &&
                        value?.length > 13 && <p>Невірно набраний номер</p>}
                </form>
            </div>
        </div>
    );
}
