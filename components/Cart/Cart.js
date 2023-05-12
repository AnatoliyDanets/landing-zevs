import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Del from "../svgs/del.svg";
import Loader from "../Loader";
import CartProductCounter from "./CartProductCounter";
import CartOrderForm from "./CartOrderForm";
import s from "./Cart.module.css";

export default function Cart({
    cartProduct,
    increment,
    decrement,
    removeClick,
    set,
    handleShowIsSuccess,
    handleShowError
}) {
    const [value, setValue] = useState();
    const [loading, setLoading] = useState(false);
    const [showIsMobile, setShowIsMobile] = useState(false);
    const [showAddInfo, setShowAddInfo] = useState(false)
    const [selectMail, setSelectMail] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 479.9px)" });




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
        fetch(process.env.API_ORDERS, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (res.status === 201) {
                    setLoading(false);
                    handleShowIsSuccess(true);
                    resetForm();
                }
                else {
                    return Promise.reject(res)
                }
            }).catch((error) => {
                if (error) {
                    console.log(error.statusText);
                }
                setLoading(false);
                handleShowError(true)
            });
    };

    const currentDate = () => {
        let result = "";
        let d = new Date();
        result +=
            d.getFullYear() +
            "-" +
            (d.getMonth() + 1) +
            "-" +
            d.getDate() +
            " " +
            d.getHours() +
            ":" +
            d.getMinutes() +
            ":" +
            d.getSeconds();
        return result;
    };

    const onSubmit = (data, e) => {
        setLoading(true);
        e.preventDefault();
        const orderCart = uniqueCartProducts.map((val) =>
            uniqueCartProducts?.reduce((acc) => {
                acc.model = val.model;
                acc.size = `${val.size}x${val.height}`;
                acc.count = val.count;
                acc.discount = val.discount;
                acc.price =
                    val.discount > 0
                        ? `Звичайна ціна - ${val.price}, знижка ${val.discount
                        }, ціна зі знижкою - ${val.price - (val.discount / 100) * val.price
                        }`
                        : val.price;
                acc.totalPrice = val.totalPrice =
                    val.discount > 0
                        ? (
                            (+val.price - (val.discount / 100) * +val.price) *
                            val.count
                        ).toFixed(2)
                        : val.count * +val.price.toFixed(2);
                return acc;
            }, {})
        );
        console.log("data", data)
        const order = {
            ...data,
            name: data?.name,
            phone: data?.phone,
            fullName: showAddInfo ? data?.fullName : "Отсутстует",
            location: showAddInfo ? data?.location : "Отсутстует",
            state: showAddInfo ? data?.state : "Отсутстует",
            mail: showAddInfo ? data?.mail : "Отсутстует",
            mailNumber: (showAddInfo && selectMail) ? data?.mailNumber : 0,
            postal: (showAddInfo && !selectMail) ? data?.postal : "Отсутстует",
            date: currentDate(),
            dateSort: Date.now(),
            order: orderCart,
            totalPrice: price,
            IsCall: showAddInfo ? false : true,
            status: "Новый"

        };
        console.log(order)
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

    return (
        <>
            <Loader loading={loading} />
            <div className={s.cart__container}>
                <h2 className={s.cart__title}>
                    <FormattedMessage id="page.home.modal_order_title" />
                </h2>
                {showIsMobile ? (
                    <ul className={s.mobile__cart}>
                        {uniqueCartProducts.map((el, i) => (
                            <li key={el.cards.public_id} className={s.mobile__cartItem}>
                                <div className={s.mobile__cartWrap}>
                                    <Image
                                        src={el.cards.url}
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
                                    <CartProductCounter
                                        increment={increment}
                                        decrement={decrement}
                                        count={+el.count}
                                        id={el._id}
                                        cartProduct={cartProduct}
                                        set={set}
                                    />
                                    <span className={s.mobile__cartPrice}>
                                        {el.discount > 0
                                            ? (
                                                (+el.price - (el.discount / 100) * +el.price) *
                                                el.count
                                            ).toFixed(2)
                                            : +el.count * +el.price.toFixed(2)}
                                        грн
                                    </span>
                                    <button
                                        id={el._id}
                                        className={s.cart__delete_btn}
                                        type="button"
                                        onClick={() => removeClick(el._id)}
                                    >
                                        <Del className={s.cart__delete_icon} />
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
                                <th className={s.tableCart__head_sel}>
                                    <FormattedMessage id="page.home.modal_table_model" />
                                </th>
                                <th className={s.tableCart__head_sel}>
                                    <FormattedMessage id="page.home.modal_table_quantity" />
                                </th>
                                <th className={s.tableCart__head_sel}>
                                    <FormattedMessage id="page.home.modal_table_price" />
                                </th>
                                <th className={s.tableCart__head_sel}></th>
                            </tr>
                        </thead>
                        <tbody className={s.tableCart__body}>
                            {uniqueCartProducts.map((el) => (
                                <tr className={s.tableCart__body_row} key={el.cards.public_id}>
                                    <>
                                        <td className={s.tableCart__body_sel}>
                                            {
                                                <Image
                                                    src={el.cards.url}
                                                    alt={el.model}
                                                    width={70}
                                                    height={70}
                                                    priority
                                                />
                                            }
                                        </td>
                                        <td className={s.tableCart__body_sel}>
                                            <p className={s.cart__name}>
                                                {el.model} {`${el.size}x${el.height}`}
                                            </p>
                                        </td>
                                        <td className={s.tableCart__body_sel}>
                                            <CartProductCounter
                                                increment={increment}
                                                decrement={decrement}
                                                count={+el.count}
                                                id={el._id}
                                            />
                                        </td>
                                        <td className={s.tableCart__body_sel}>
                                            <span className={s.cart__price}>
                                                {el.discount > 0
                                                    ? (
                                                        (+el.price - (el.discount / 100) * +el.price) *
                                                        el.count
                                                    ).toFixed(2)
                                                    : +el.count * +el.price.toFixed(2)}
                                                грн
                                            </span>
                                        </td>

                                        <td className={s.tableCart__body_sel}>
                                            <button
                                                aria-label={"Удалить"}
                                                id={el._id}
                                                className={s.cart__delete_btn}
                                                type="button"
                                                onClick={() => removeClick(el._id)}
                                            >
                                                <Del className={s.cart__delete_icon} />
                                            </button>
                                        </td>
                                    </>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                <div className={s.cart__order}>
                    <p className={s.cart__total}>{price.toFixed(2)}грн</p>
                </div>

                <CartOrderForm onSubmit={onSubmit} value={value} setValue={setValue} showAddInfo={showAddInfo} setShowAddInfo={setShowAddInfo} selectMail={selectMail} setSelectMail={setSelectMail} />
            </div>
        </>
    );
}
